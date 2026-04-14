import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';

export function Products() {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [filter, setFilter] = useState<'all' | 'pizza' | 'fatayer' | 'calzone'>('all');

  useEffect(() => {
    if (categoryParam) {
      setFilter(categoryParam as 'pizza' | 'fatayer' | 'calzone');
    }
  }, [categoryParam]);

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl text-center mb-8">جميع الاصناف</h1>

        {/* Filter Tabs */}
        <div className="flex gap-2 justify-center mb-11 flex-wrap">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-full transition-colors ${
              filter === 'all'
                ? 'bg-[#E53935] text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            الكل
          </button>
          <button
            onClick={() => setFilter('pizza')}
            className={`px-2 py-2 rounded-full transition-colors ${
              filter === 'pizza'
                ? 'bg-[#E53935] text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            بيتزا
          </button>
          <button
            onClick={() => setFilter('fatayer')}
            className={`px-6 py-2 rounded-full transition-colors ${
              filter === 'fatayer'
                ? 'bg-[#E53935] text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            فطاير
          </button>
          <button
            onClick={() => setFilter('calzone')}
            className={`px-6 py-2 rounded-full transition-colors ${
              filter === 'calzone'
                ? 'bg-[#E53935] text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            كلزوني
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16 text-gray-500">
            لا توجد منتجات في هذا التصنيف
          </div>
        )}
      </div>
    </div>
  );
}
