import { Outlet } from 'react-router';
import { Header } from './Header';
import { Footer } from './Footer';
import { Toaster } from './ui/sonner';

export function Layout() {
  return (
    <div className="min-h-screen bg-[#fffbf7] flex flex-col" dir="rtl">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
}
