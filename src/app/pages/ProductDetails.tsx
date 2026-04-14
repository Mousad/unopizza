import { useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { Minus, Plus, ArrowRight } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../contexts/CartContext';
import { toast } from 'sonner';
import { ProductCard } from '../components/ProductCard';
import { FaShoppingCart } from "react-icons/fa";


export function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = products.find((p) => p.id === id);
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0].size || '');
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl mb-4">المنتج غير موجود</h2>
          <button
            onClick={() => navigate('/products')}
            className="bg-[#E53935] text-white px-6 py-2 rounded-lg"
          >
            العودة للمنتجات
          </button>
        </div>
      </div>
    );
  }

  const selectedPrice = product.sizes.find((s) => s.size === selectedSize)?.price || 0;
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, selectedSize, quantity);
    toast.success(`تم إضافة ${product.name} (${selectedSize}) إلى السلة`);
  };

  const handleOrderNow = () => {
    addToCart(product, selectedSize, quantity);
    navigate('/cart');
  };

  const displayImages = product.images || [product.image];

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 mb-6 text-[#E53935] hover:text-[#c62828]"
        >
          <ArrowRight className="w-5 h-5" />
          <span>العودة</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Image Section */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-4">
              <img
                src={displayImages[mainImage]}
                alt={product.name}
                className="w-full  aspect-square object-cover"
              />
            </div>
            {displayImages.length > 1 && (
              <div className="flex gap-4">
                {displayImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setMainImage(index)}
                    className={`flex-1 rounded-lg overflow-hidden ${
                      mainImage === index ? 'ring-4 ring-[#E53935]' : ''
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full aspect-square object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-4xl mb-4">{product.name}</h1>
            <p className="text-2xl text-[#E53935] mb-6">
                {Math.min(...product.sizes.map((s) => s.price))} ج م
            </p>
            <p className="text-gray-600 mb-8 text-lg">{product.description}</p>

            {/* Size Selection */}
            <div className="mb-6">
              <label className="block text-lg mb-3">اختر الحجم:</label>
              <div className="grid grid-cols-2 gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size.size}
                    onClick={() => setSelectedSize(size.size)}
                    className={`p-2 rounded-lg border-2 transition-colors ${
                      selectedSize === size.size
                        ? 'border-[#E53935] bg-[#E53935] text-white'
                        : 'border-gray-300 hover:border-[#E53935]'
                    }`}
                  >
                    <div className="font-medium">{size.size}</div>
                    <div className="text-sm">{size.price} ج م</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mb-6">
              <label className="block text-lg mb-3">الكمية:</label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors flex items-center justify-center"
                >
                  <Minus className="w-5 h-5" />
                </button>
                <span className="text-2xl w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors flex items-center justify-center"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Total Price */}
            <div className="mb-6 p-4 bg-gray-100 rounded-lg">
              <div className="flex justify-between items-center text-xl">
                <span>الإجمالي:</span>
                <span className="text-[#E53935]">{selectedPrice * quantity} ج م</span>
              </div>
            </div>

            {/* Action Buttons */}
           {/* Action Buttons */}
<div className="flex gap-4">
  <button
    onClick={handleAddToCart}
    className="flex-1 flex items-center justify-center gap-2 bg-white border-2 border-[#E53935] text-[#E53935] py-4 rounded-lg hover:bg-[#E53935] hover:text-white transition-colors text-lg"
  >
    <span>أضف</span>
    <FaShoppingCart />
  </button>
</div>
          </div>
        </div>

        {/* Sticky Bottom Button (Mobile) */}
<div className="fixed bottom-0 left-0 right-0 p-4 bg-white shadow-lg lg:hidden z-50">
  <button
    onClick={handleOrderNow}
    className="w-full flex items-center justify-center gap-2 bg-[#E53935] text-white py-2 rounded-lg text-lg"
  >
    <FaShoppingCart />
   
    <span>{selectedPrice * quantity} ج م</span>
  </button>
</div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl mb-8">منتجات مشابهة</h2>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
