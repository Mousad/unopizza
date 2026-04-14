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
  { name: 'بيتزا', image: 'https://i.pinimg.com/736x/60/19/aa/6019aa3d52409c1316d6b0ddef331e43.jpg', path: '/products?category=pizza' },
  { name: 'فطاير شرقية', image: 'https://i.pinimg.com/736x/51/47/2a/51472a709f8ec7b0a4bde03cfe13c903.jpg', path: '/products?category=fatayer' },
  { name: 'كلزوني', image: 'https://i.pinimg.com/1200x/df/28/f4/df28f426ee5d1edf513eb802cb5ccf31.jpg', path: '/products?category=calzone' },
];

  const galleryImages = [
    'https://i.pinimg.com/1200x/db/b2/3f/dbb23fdb033332fce2f7a3c0ffdc8539.jpg',
    'https://i.pinimg.com/736x/51/71/cb/5171cb5ffef2c5ab986d43050126964e.jpg',
    'https://i.pinimg.com/1200x/5d/64/c0/5d64c07665b27adf9817d7f1dbaed9b7.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI6cMhCNNDebTWrL7p5kLZ5JGM2c35Ec_riA&s',
  ];
  const offers = [
  "🍕 عروض بيتزا حصرية - خصم يصل إلى 30%",
  "🚚 توصيل سريع خلال 30 دقيقة",
  "💥 خصومات يومية على كل الطلبات",
  "🧀 اطلب الآن واستمتع بأفضل طعم",
  "🧀 اطلب الآن واستمتع بأفضل طعم",
  "🧀 اطلب الآن واستمتع بأفضل طعم",
  "🧀 اطلب الآن واستمتع بأفضل طعم",
  "🧀 اطلب الآن واستمتع بأفضل طعم",
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
      <section className="w-full bg-[#E53935] text-white overflow-hidden py-2">
  <div className="flex w-max animate-marquee">

    {/* مجموعة 1 */}
    <div className="flex gap-10 px-8 whitespace-nowrap flex-none">
      {offers.map((item, i) => (
        <span key={i}>{item}</span>
      ))}
    </div>

    {/* مجموعة 2 (نفس المحتوى) */}
    <div className="flex gap-16 px-8 whitespace-nowrap flex-none">
      {offers.map((item, i) => (
        <span key={`copy1-${i}`}>{item}</span>
      ))}
    </div>

    {/* مجموعة 3 (مكررة مرة ثانية لضمان لا نهائي 100%) */}
    <div className="flex gap-16 px-8 whitespace-nowrap flex-none">
      {offers.map((item, i) => (
        <span key={`copy2-${i}`}>{item}</span>
      ))}
    </div>

  </div>
</section>
      
    
      {/* Categories Section */}
<section className="container mx-auto px-4 py-16">
  <h2 className="text-3xl text-center mb-8">الاقسام</h2>

  <div className="grid grid-cols-2 gap-6">
    {categories.map((category, index) => (
      <Link
        key={category.name}
        to={category.path}
        className={`relative w-full h-48 rounded-2xl overflow-hidden group
          ${index === categories.length - 1 ? "col-span-2" : ""}`}
      >
        {/* الصورة */}
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition"></div>

        {/* النص */}
        <h3 className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
          {category.name}
        </h3>
      </Link>
    ))}
  </div>
</section>

      {/* Popular Products */}
      <section className="container mx-auto px-4 py-6">
  <h2 className="text-3xl text-center mb-8">المنتجات الشائعة</h2>

  <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
    {popularProducts.map((product, index) => (
      <div
        key={product.id}
        className={index === 4 ? "col-span-2 flex justify-center" : ""}
      >
        <div className={index === 4 ? "w-full max-w-[250px]" : "w-full"}>
          <ProductCard product={product} />
        </div>
      </div>
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
     <section className="py-10">
  <div className="container mx-auto px-4">

    <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden">

      {/* الصورة */}
      <img
        src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRzg9M8MSzXBVryDXWSLM7TGhgtj-WoX2ylEQrFc1EDUJzsn8YH"
        alt="من نحن"
        className="w-full h-full object-cover"
      />

      {/* طبقة تغميق */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* المحتوى داخل الصورة */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">

        <h2 className="text-5xl md:text-6xl font-extrabold text-[#e53935] mb-4">
  من{" "}
  <span className="relative inline-block">
    نحن
    <span className="absolute left-0 -bottom-2 w-full h-[4px] bg-[#f8f4f0] rounded-full"></span>
  </span>
</h2>

        <p className="text-lg md:text-xl  mb-6 max-w-2xl">
         <p className="text-2xl text-[#f8f4f0] max-w-3xl mx-auto">
            نحن <span className="font-bold text-[#f8f4f0] text-xl "><span className="text-[#f8f4f0]">UNO</span><span className="text-xs text-[#E53935]">pizza</span></span> مطعم متخصص في تقديم أفضل أنواع البيتزا والفطاير باستخدام مكونات طازجة يوميًا 
          </p>
        </p>

        <Link
          to="/about"
          className="bg-[#FFC107] text-gray-900 px-8 py-3 rounded-full hover:bg-[#ffb300] transition-colors"
        >
           اعرف عنا
        </Link>

      </div>

    </div>

  </div>
</section>
<section className="py-10 bg-white">
  <div className="container mx-auto px-4">

    

    <div className="grid grid-cols-4 md:grid-cols-4 gap-4">

      <img
        src="https://images.unsplash.com/photo-1601924582970-9238bcb495d9"
        className="w-full h-40 object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
        alt="img1"
      />

      <img
        src="https://images.unsplash.com/photo-1628840042765-356cda07504e"
        className="w-full h-40 object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
        alt="img2"
      />

      <img
        src="https://images.unsplash.com/photo-1606756790138-261d2b21cd75"
        className="w-full h-40 object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
        alt="img3"
      />

      <img
        src="https://i.pinimg.com/736x/f0/8b/e2/f08be24b2a2a42e344273ca54b2aad28.jpg"
        className="w-full h-40 object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
        alt="img4"
      />

    </div>

  </div>
</section>
     <section className="py-10">
  <div className="container mx-auto px-4">

    <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden">

      {/* الصورة */}
      <img
        src="https://i.pinimg.com/736x/f0/8b/e2/f08be24b2a2a42e344273ca54b2aad28.jpg"
        alt="نحن نصنع البيتزا بحب"
        className="w-full h-full object-cover"
      />

      {/* طبقة تغميق */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* المحتوى داخل الصورة */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">

        <h2 className="text-3xl md:text-5xl mb-4">
          نحن نصنع البيتزا بحب
        </h2>

        <p className="text-lg md:text-xl text-gray-200 mb-6 max-w-2xl">
          نستخدم أفضل المكونات الطازجة لنقدم لك تجربة طعم لا تُنسى
        </p>

        <Link
          to="/menu"
          className="bg-[#FFC107] text-gray-900 px-8 py-3 rounded-full hover:bg-[#ffb300] transition-colors"
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
                  className="w-full h-74 object-cover rounded-2xl shadow-lg"
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
        <span>مدينة نصر - شارع الدكتور سيد صبري</span>
      </div>
    </div>

    <div className="rounded-2xl overflow-hidden h-64 shadow-lg">
      <iframe
        title="location-map"
        src="https://www.google.com/maps?q=3%20Street%20Dr%20Sayed%20Sabry%2C%20Nasr%20City%2C%20Cairo&output=embed"
        width="100%"
        height="100%"
        loading="lazy"
        className="border-0"
      ></iframe>
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
