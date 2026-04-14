import { Link } from 'react-router';
import { Home } from 'lucide-react';

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl mb-4 text-[#E53935]">404</h1>
        <h2 className="text-3xl mb-4">الصفحة غير موجودة</h2>
        <p className="text-xl text-gray-600 mb-8">
          عذراً، الصفحة التي تبحث عنها غير موجودة
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-[#E53935] text-white px-8 py-3 rounded-lg hover:bg-[#c62828] transition-colors"
        >
          <Home className="w-5 h-5" />
          <span>العودة للرئيسية</span>
        </Link>
      </div>
    </div>
  );
}
