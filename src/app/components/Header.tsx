import { Link } from 'react-router';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useState } from 'react';

export function Header() {
  const { totalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#fffbf7] shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
         

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="hover:text-[#E53935] transition-colors">
              الرئيسية
            </Link>
            <Link to="/menu" className="hover:text-[#E53935] transition-colors">
              المنيو
            </Link>
            <Link to="/products" className="hover:text-[#E53935] transition-colors">
              المنتجات
            </Link>
            <Link to="/about" className="hover:text-[#E53935] transition-colors">
              من نحن
            </Link>
          </nav>

          {/* Cart Icon */}
          <Link to="/cart" className="relative">
            <ShoppingCart className="w-6 h-6 text-[#E53935]" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#E53935] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
           {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="text-2xl"></div>
            <span className="font-bold text-xl "><span className="text-[#0c1014]">UNO</span><span className="text-xs text-[#E53935]">pizza</span></span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#E53935]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 h-20 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                className="hover:text-[#E53935] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                الرئيسية
              </Link>
              <Link
                to="/menu"
                className="hover:text-[#E53935] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                المنيو
              </Link>
              <Link
                to="/products"
                className="hover:text-[#E53935] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                المنتجات
              </Link>
              <Link
                to="/products"
                className="hover:text-[#E53935] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                المنتجات
              </Link>
              <Link
                to="/about"
                className="hover:text-[#E53935] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                من نحن
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
