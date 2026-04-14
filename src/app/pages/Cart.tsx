import { Link, useNavigate } from 'react-router';
import { Trash2, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

export function Cart() {
  const { items, removeFromCart, updateQuantity, totalPrice } = useCart();
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="w-24 h-24 mx-auto mb-4 text-gray-300" />
          <h2 className="text-3xl mb-4">السلة فارغة</h2>
          <p className="text-gray-600 mb-6">لم تقم بإضافة أي منتجات بعد</p>
          <Link
            to="/products"
            className="inline-block bg-[#E53935] text-white px-8 py-3 rounded-lg hover:bg-[#c62828] transition-colors"
          >
             تصفح الاصناف
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl mb-8">سلة</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={`${item.product.id}-${item.size}`}
                  className="bg-white rounded-2xl shadow-lg p-4 flex gap-4"
                >
                  {/* Product Image */}
                  <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1">
                    <h3 className="text-xl mb-1">{item.product.name}</h3>
                    <p className="text-gray-600 mb-2">{item.size}</p>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.size, item.quantity - 1)}
                        className="w-8 h-8 bg-gray-200 rounded hover:bg-gray-300 transition-colors flex items-center justify-center"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.size, item.quantity + 1)}
                        className="w-8 h-8 bg-gray-200 rounded hover:bg-gray-300 transition-colors flex items-center justify-center"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Price and Remove */}
                  <div className="flex flex-col items-end justify-between">
                    <button
                      onClick={() => removeFromCart(item.product.id, item.size)}
                      className="text-[#E53935] hover:text-[#c62828] transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                    <div className="text-xl text-[#E53935]">
                      {item.price * item.quantity} 
                      ج 
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <h2 className="text-2xl mb-6">ملخص الطلب</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>المجموع الفرعي</span>
                  <span>{totalPrice} ج م</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>رسوم التوصيل</span>
                  <span>15%</span>
                </div>
                <div className="border-t pt-3 flex justify-between text-xl">
                  <span>الإجمالي</span>
                  <span className="text-[#E53935]">{totalPrice} ج م</span>
                </div>
              </div>

              <button
                onClick={() => navigate('/checkout')}
                className="w-full bg-[#E53935] text-white py-3 rounded-lg hover:bg-[#c62828] transition-colors text-lg"
              >
                إتمام الطلب
              </button>

              <Link
                to="/products"
                className="block text-center mt-4 text-[#E53935] hover:text-[#c62828]"
              >
                متابعة التسوق
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
