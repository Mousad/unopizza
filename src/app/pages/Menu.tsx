import { useState, useRef, useEffect } from 'react';
import { products } from '../data/products';
import { useCart } from '../contexts/CartContext';
import { toast } from 'sonner';
import { FaShoppingCart } from "react-icons/fa";

export function Menu() {
  const [activeCategory, setActiveCategory] = useState<'pizza' | 'fatayer' | 'calzone'>('pizza');
  const [showScrollHint, setShowScrollHint] = useState(true);

  const { addToCart } = useCart();

  const pizzaRef = useRef<HTMLDivElement>(null);
  const fatayerRef = useRef<HTMLDivElement>(null);
  const calzoneRef = useRef<HTMLDivElement>(null);

  const pizzaProducts = products.filter((p) => p.category === 'pizza');
  const fatayerProducts = products.filter((p) => p.category === 'fatayer');
  const calzoneProducts = products.filter((p) => p.category === 'calzone');

  const scrollToSection = (category: 'pizza' | 'fatayer' | 'calzone') => {
    setActiveCategory(category);
    const ref =
      category === 'pizza'
        ? pizzaRef
        : category === 'fatayer'
        ? fatayerRef
        : calzoneRef;

    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleAddToCart = (
    productId: string,
    size: string,
    price: number,
    productName: string
  ) => {
    const product = products.find((p) => p.id === productId);
    if (product) {
      addToCart(product, size, 1);
      toast.success(`تم إضافة ${productName} (${size}) إلى السلة`);
    }
  };

  // 👇 إخفاء التلميح عند أول سكرول
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollHint(false);
    };

    window.addEventListener('scroll', handleScroll, { once: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const ProductSection = ({
    title,
    products,
    sectionRef,
  }: {
    title: string;
    products: typeof pizzaProducts;
    sectionRef: React.RefObject<HTMLDivElement>;
  }) => (
    <div ref={sectionRef} className="mb-8 scroll-mt-32">
      <h2 className="text-3xl mb-6 pb-2 border-b-2 border-[#E53935]">
        {title}
      </h2>

      <div className="overflow-x-auto pb-4">
        <div className="flex gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0 w-76 bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4">
                <h3 className="text-xl mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  {product.description}
                </p>

                <div className="space-y-2">
                  {product.sizes.map((size) => (
                    <div
                      key={size.size}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                    >
                      <div>
                        <span className="font-medium">{size.size}</span>
                        <span className="text-[#E53935] mr-3">
                          {size.price} ج م
                        </span>
                      </div>

                      <button
                        onClick={() =>
                          handleAddToCart(
                            product.id,
                            size.size,
                            size.price,
                            product.name
                          )
                        }
                        className="flex items-center justify-center w-9 h-9 bg-[#E53935] text-white rounded-full hover:bg-[#c62828] transition-all duration-300 active:scale-95 shadow-md hover:shadow-lg"
                      >
                        <FaShoppingCart className="text-sm" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen relative">

      {/* 👇 Scroll Hint للموبايل */}
      {showScrollHint && (
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none md:hidden">
          <div className="flex items-center gap-2 bg-black/60 text-white px-4 py-2 rounded-full animate-bounce">
            
            <span className="text-sm">اسحب للمزيد</span>
            <span className="animate-pulse">👈</span>
          </div>
        </div>
      )}

      {/* Menu Content */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl text-center mb-12">منيو المطعم</h1>

        <ProductSection
          title="بيتزا"
          products={pizzaProducts}
          sectionRef={pizzaRef}
        />

        <ProductSection
          title="فطاير شرقية"
          products={fatayerProducts}
          sectionRef={fatayerRef}
        />

        <ProductSection
          title="كلزوني"
          products={calzoneProducts}
          sectionRef={calzoneRef}
        />
      </div>
    </div>
  );
}