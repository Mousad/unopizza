import { Link, useLocation } from 'react-router';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useState } from 'react';
import { Facebook, Instagram, Phone } from 'lucide-react';
import { products } from '../data/products';

export function Header() {
  const { totalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  // ✅ FIXED: تعريف المنتجات الشائعة هنا
  const popularProducts = products.filter((p) => p.popular).slice(0, 5);

  return (
    <header className="sticky top-0 z-50 bg-[#fffbf7] shadow-md">
      <div className="container mx-auto px-4">

        {/* ================= DESKTOP ================= */}
        <div className="hidden md:flex items-center justify-between h-16">

          {/* LOGO (LEFT) */}
          <Link to="/" className="font-bold text-xl">
            <span className="text-[#0c1014]">UNO</span>
            <span className="text-xs text-[#E53935]">pizza</span>
          </Link>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-6">

            <nav className="flex items-center gap-6">

              <Link
                to="/"
                className={`transition ${
                  isActive('/') ? 'text-[#E53935] font-bold' : 'hover:text-[#E53935]'
                }`}
              >
                الرئيسية
              </Link>

              <Link
                to="/menu"
                className={`transition ${
                  isActive('/menu') ? 'text-[#E53935] font-bold' : 'hover:text-[#E53935]'
                }`}
              >
                المنيو
              </Link>

              <Link
                to="/products"
                className={`transition ${
                  isActive('/products') ? 'text-[#E53935] font-bold' : 'hover:text-[#E53935]'
                }`}
              >
                المنتجات
              </Link>

              <Link
                to="/about"
                className={`transition ${
                  isActive('/about') ? 'text-[#E53935] font-bold' : 'hover:text-[#E53935]'
                }`}
              >
                من نحن
              </Link>

            </nav>

            {/* CART */}
            <Link
              to="/cart"
              className="relative bg-white p-2 rounded-full shadow hover:shadow-md transition"
            >
              <ShoppingCart className="w-5 h-5 text-[#E53935]" />

              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#E53935] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>

          </div>
        </div>

        {/* ================= MOBILE ================= */}
        <div className="flex md:hidden items-center justify-between h-16">

          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X className="w-6 h-6 text-[#E53935]" />
            ) : (
              <Menu className="w-6 h-6 text-[#E53935]" />
            )}
          </button>

          <Link to="/" className="font-bold text-xl">
            <span className="text-[#0c1014]">UNO</span>
            <span className="text-xs text-[#E53935]">pizza</span>
          </Link>

          <Link to="/cart" className="relative">
            <ShoppingCart className="w-6 h-6 text-[#E53935]" />

            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#E53935] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>

        </div>

        {/* ================= MOBILE MENU ================= */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 bg-white">

            {/* HEADER */}
            <div className="flex items-center justify-between p-4 border-b">
              <span className="font-bold text-xl">
                <span className="text-[#0c1014]">UNO</span>
                <span className="text-xs text-[#E53935]">pizza</span>
              </span>

              <button onClick={() => setIsMenuOpen(false)}>
                <X className="w-6 h-6 text-[#E53935]" />
              </button>
            </div>

            {/* LINKS */}
            <div className="flex flex-col gap-3 p-4">

              {[
                { name: 'الرئيسية', path: '/' },
                { name: 'المنيو', path: '/menu' },
                { name: 'المنتجات', path: '/products' },
                { name: 'من نحن', path: '/about' },
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="p-4 rounded-xl bg-gray-100 hover:bg-[#E53935] hover:text-white transition text-center text-lg"
                >
                  {item.name}
                </Link>
              ))}

            </div>

            {/* 🔥 POPULAR PRODUCTS (FIXED) */}
            <div className="px-4 mt-4">

              <h3 className="text-lg font-bold mb-3 text-center">
                المنتجات الشائعة
              </h3>

              <div className="flex gap-3 overflow-x-auto pb-4">

                {popularProducts.map((product) => (
                  <div
                    key={product.id}
                    className="min-w-[140px] bg-white shadow-md rounded-xl overflow-hidden"
                  >
                    <img
                      src={product.image}
                      className="w-full h-40 object-cover"
                    />

                    <div className="p-2 text-center">
                      <p className="text-sm font-medium truncate">
                        {product.name}
                      </p>
                    </div>
                  </div>
                ))}

              </div>
            </div>

            {/* SOCIAL */}
            <div className="absolute bottom-16 w-full flex justify-center gap-8">

              <a
                href="https://facebook.com"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1877F2] text-white shadow-lg hover:scale-110 transition"
              >
                <Facebook className="w-6 h-6" />
              </a>

              <a
                href="https://instagram.com"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-purple-500 text-white shadow-lg hover:scale-110 transition"
              >
                <Instagram className="w-6 h-6" />
              </a>

              <a
                href="tel:01000000000"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:scale-110 transition"
              >
                <Phone className="w-6 h-6" />
              </a>

            </div>

          </div>
        )}

      </div>
    </header>
  );
}