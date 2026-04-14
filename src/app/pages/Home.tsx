import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { ChevronLeft, ChevronRight, Truck, Award, DollarSign, MapPin, Facebook, Instagram, Phone } from 'lucide-react';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Menu } from '../pages/Menu';

export function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const popularProducts = products.filter((p) => p.popular).slice(0, 5);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1680405620826-83b0f0f61b28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJnaGVyaXRhJTIwcGl6emElMjBpdGFsaWFufGVufDF8fHx8MTc3NjEwODMxMHww&ixlib=rb-4.1.0&q=80&w=1080',
      title: ' ألذ بيتزا في القاهرة والسودان',
      subtitle: 'طعم إيطالي أصلي بمكونات طازة يوميًا ',
    },
    {
      image: 'https://i.pinimg.com/1200x/81/b6/41/81b641b8c1b76002a78a0d915c218bac.jpg',
      title: '🍕 نصنع البيتزا بحب',
      subtitle: 'مكونات طازجة وجودة عالية في كل قطعة',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const categories = [
    { name: 'بيتزا', icon: '🍕', path: '/products?category=pizza' },
    { name: 'فطاير شرقية', icon: '🥟', path: '/products?category=fatayer' },
    { name: 'كلزوني', icon: '🥙', path: '/products?category=calzone' },
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1651981038189-e71e557f5869?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMHJlc3RhdXJhbnQlMjBraXRjaGVufGVufDF8fHx8MTc3NjEwODMxMnww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1710575341655-0062ead9f389?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMGNoZWYlMjBjb29raW5nfGVufDF8fHx8MTc3NjEwODMxNHww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1678443316613-dbc3261c8b50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMGRlbGl2ZXJ5JTIwYm94fGVufDF8fHx8MTc3NjEwODMxM3ww&ixlib=rb-4.1.0&q=80&w=1080',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Slider */}
      <section className="relative h-[650px] md:h-[600px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-black/40 z-10" />
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center px-4">
              <h1 className="text-4xl md:text-6xl mb-4">{slide.title}</h1>
              <p className="text-xl md:text-2xl mb-8">{slide.subtitle}</p>
              <Link
                to="/menu"
                className="bg-[#E53935] text-white px-8 py-3 rounded-full hover:bg-[#c62828] transition-colors text-lg"
              >
                اطلب الآن
              </Link>
            </div>
          </div>
        ))}
        
      
       
      </section>
    
      {/* Categories Section */}
      <section className="container  mx-auto px-4 py-16">
        <h2 className="text-3xl text-center mb-8">الاقسام</h2>
        <div className="grid flex  grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={category.path}
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow"
            >
              <div className="text-6xl mb-4">{category.icon}</div>
              <h3 className="text-2xl">{category.name}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular Products */}
      <section className="container mx-auto px-4 py-6">
        <h2 className="text-3xl text-center mb-8">المنتجات الشائعة</h2>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {popularProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center">
          <Link
            to="/products"
            className="inline-block bg-[#E53935] text-white px-8 py-3 rounded-full hover:bg-[#c62828] transition-colors"
          >
            عرض كل المنتجات
          </Link>
        </div>
      </section>

      {/* Promo Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <img
                src="https://images.unsplash.com/photo-1710575341655-0062ead9f389?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMGNoZWYlMjBjb29raW5nfGVufDF8fHx8MTc3NjEwODMxNHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="نحن نصنع البيتزا بحب"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
            <div className="flex-1 text-center md:text-right">
              <h2 className="text-4xl mb-4">نحن نصنع البيتزا بحب </h2>
              <p className="text-xl text-gray-600 mb-6">
                نستخدم أفضل المكونات الطازجة لنقدم لك تجربة طعم لا تُنسى
              </p>
              <Link
                to="/menu"
                className="inline-block bg-[#FFC107] text-gray-900 px-8 py-3 rounded-full hover:bg-[#ffb300] transition-colors"
              >
                اكتشف المنيو
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="container mx-auto px-4 py-10">
        <h2 className="text-3xl text-center mb-8">معرض الصور</h2>
        <div className="overflow-x-auto">
          <div className="flex gap-4 pb-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="flex-shrink-0 w-80">
                <img
                  src={image}
                  alt={`معرض ${index + 1}`}
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Icons */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex justify-center gap-6">
          <a
            href="https://wa.me/201234567890"
            className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center hover:scale-110 transition-transform text-white shadow-lg"
          >
            <Phone className="w-8 h-8" />
          </a>
          <a
            href="#"
            className="w-16 h-16 bg-[#1877F2] rounded-full flex items-center justify-center hover:scale-110 transition-transform text-white shadow-lg"
          >
            <Facebook className="w-8 h-8" />
          </a>
          <a
            href="#"
            className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform text-white shadow-lg"
          >
            <Instagram className="w-8 h-8" />
          </a>
        </div>
      </section>

      {/* Location */}
      <section className="bg-white py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-center mb-8">موقعنا</h2>
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 text-xl">
              <MapPin className="w-6 h-6 text-[#E53935]" />
              <span>القاهرة - الدقي</span>
            </div>
          </div>
          <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center">
            <p className="text-gray-600">خريطة الموقع</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-3 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-[#E53935] rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl mb-2">توصيل </h3>
            
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-[#E53935] rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl mb-2">جودة </h3>
            
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-[#E53935] rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl mb-2">أسعار </h3>
            
          </div>
        </div>
      </section>
    </div>
  );
}
