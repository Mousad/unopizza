import { useState } from 'react';
import { useNavigate } from 'react-router';
import { CheckCircle } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

export function Checkout() {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    notes: '',
  });

  if (items.length === 0 && !isSubmitted) {
    navigate('/cart');
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      clearCart();
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <CheckCircle className="w-24 h-24 mx-auto mb-6 text-green-500" />
          <h1 className="text-4xl mb-4">تم استلام طلبك بنجاح</h1>
          <p className="text-xl text-gray-600 mb-8">
            شكراً لك! سنتواصل معك قريباً لتأكيد الطلب
          </p>
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 text-right">
            <h2 className="text-2xl mb-4">تفاصيل الطلب</h2>
            <div className="space-y-2 text-gray-600">
              <p><strong>الاسم:</strong> {formData.name}</p>
              <p><strong>الهاتف:</strong> {formData.phone}</p>
              <p><strong>العنوان:</strong> {formData.address}</p>
              {formData.notes && <p><strong>ملاحظات:</strong> {formData.notes}</p>}
              <div className="border-t pt-4 mt-4">
                <p className="text-xl text-[#E53935]">
                  <strong>الإجمالي:</strong> {totalPrice} جنيه
                </p>
              </div>
            </div>
          </div>
          <button
            onClick={() => navigate('/')}
            className="bg-[#E53935] text-white px-8 py-3 rounded-lg hover:bg-[#c62828] transition-colors"
          >
            العودة للرئيسية
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl mb-8 text-center"> الطلب</h1>

        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-2xl mb-6">معلومات التوصيل</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block mb-2">الاسم الكامل *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E53935]"
                      placeholder="أدخل اسمك الكامل"
                    />
                  </div>

                  <div>
                    <label className="block mb-2">رقم الهاتف *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E53935]"
                      placeholder="01234567890"
                    />
                  </div>
                  <div>
                    <label className="block mb-2">رقم واتس *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E53935]"
                      placeholder="01234567890"
                    />
                  </div>

                  <div>
                    <label className="block mb-2">العنوان *</label>
                    <textarea
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E53935] h-24"
                      placeholder="أدخل عنوانك بالتفصيل"
                    />
                  </div>

                  <div>
                    <label className="block mb-2">ملاحظات (اختياري)</label>
                    <textarea
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E53935] h-24"
                      placeholder="أي ملاحظات إضافية"
                    />
                  </div>

                  <div className="bg-gray-100 p-4 rounded-lg">
                    <h3 className="text-lg mb-2">طريقة الدفع</h3>
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        id="cash"
                        name="payment"
                        checked
                        readOnly
                        className="w-5 h-5"
                      />
                      <label htmlFor="cash">الدفع عند الاستلام</label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#E53935] text-white py-4 rounded-lg hover:bg-[#c62828] transition-colors text-lg"
                  >
                    تأكيد الطلب
                  </button>
                </div>
              </form>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                <h2 className="text-2xl mb-6">ملخص الطلب</h2>
                
                <div className="space-y-3 mb-6">
                  {items.map((item) => (
                    <div key={`${item.product.id}-${item.size}`} className="flex justify-between text-sm">
                      <span className="text-gray-600">
                        {item.product.name} ({item.size}) × {item.quantity}
                      </span>
                      <span className="text-[#E53935]">{item.price * item.quantity} جنيه</span>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4 space-y-3">
                  <div className="flex justify-between text-gray-600">
                    <span>المجموع الفرعي</span>
                    <span>{totalPrice} جنيه</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>رسوم التوصيل</span>
                    <span>مجاناً</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between text-xl">
                    <span>الإجمالي</span>
                    <span className="text-[#E53935]">{totalPrice} جنيه</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
