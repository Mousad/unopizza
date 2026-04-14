import { Link } from 'react-router';
import { Facebook, Instagram, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-2">
      <div className="container mx-auto px-4 py-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div className="">
            <h3 className="text-xl  text-center justify-center mb-4 text-[#FFC107]">UNO<span className="text-xs text-[#E53935]">pizza</span></h3>
            <p className="text-gray-300 mb-4">
              نحن مطعم متخصص في تقديم أفضل أنواع البيتزا والفطاير باستخدام مكونات طازجة يوميًا
            </p>
          </div>
          <div className="flex gap-4  text-center justify-center items-center">
              <a href="#" className="w-10 h-10 bg-[#E53935] rounded-full flex items-center justify-center hover:bg-[#c62828] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#E53935] rounded-full flex items-center justify-center hover:bg-[#c62828] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://wa.me/201234567890" className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center hover:bg-[#20ba5a] transition-colors">
                <Phone className="w-5 h-5" />
              </a>
            </div>

          {/* Links */}
          <div>
            <h3 className="text-xl mb-4 text-[#FFC107]">روابط سريعة</h3>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-gray-300 hover:text-[#FFC107] transition-colors">
                الرئيسية
              </Link>
              <Link to="/menu" className="text-gray-300 hover:text-[#FFC107] transition-colors">
                المنيو
              </Link>
              <Link to="/products" className="text-gray-300 hover:text-[#FFC107] transition-colors">
                المنتجات
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-[#FFC107] transition-colors">
                من نحن
              </Link>
            </div>
          </div>

          {/* Contact */}
         
        </div>

        <div className="border-t border-gray-700 mt-12 pt-5 text-center text-gray-400">
          <p>© 2026  UNO<span className="text-xs text-[#E53935]">pizza</span>. جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  );
}
