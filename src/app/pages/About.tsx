import { Heart, Award, Users, Clock } from 'lucide-react';

export function About() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl mb-6">من نحن</h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            نحن <span className="font-bold text-xl "><span className="text-[#0c1014]">UNO</span><span className="text-xs text-[#E53935]">pizza</span></span> مطعم متخصص في تقديم أفضل أنواع البيتزا والفطاير باستخدام مكونات طازجة يوميًا 
          </p>
        </div>

        {/* Main Image */}
        <div className="mb-16">
          <img
            src="https://images.unsplash.com/photo-1710575341655-0062ead9f389?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMGNoZWYlMjBjb29raW5nfGVufDF8fHx8MTc3NjEwODMxNHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="مطعم بيتزا القاهرة"
            className="w-full max-w-4xl mx-auto rounded-2xl shadow-lg"
          />
        </div>

        {/* Story Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl mb-6 text-center">قصتنا</h2>
          <div className="bg-white rounded-2xl shadow-lg p-8 space-y-4 text-lg">
            <p>
              بدأت رحلتنا من حب عميق للطعام الإيطالي الأصيل لي السودان ورغبة في تقديم أفضل تجربة طعام لعملائنا في القاهرة والسودان 
            </p>
            <p>
              نحن نؤمن بأن البيتزا ليست مجرد طعام، بل هي تجربة بي نكهة سودانية كاملة تبدأ من اختيار أفضل المكونات الطازجة،
              مروراً بعملية التحضير بحب واهتمام، وصولاً إلى اللحظة التي تستمتع فيها بأول قضمة.
            </p>
            <p>
              نستخدم فقط أجود أنواع الدقيق والطماطم والجبن، ونحضر العجينة يومياً بطريقة تقليدية لضمان
              الحصول على أفضل نتيجة. كل بيتزا نصنعها هي عمل فني نفتخر به.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl mb-8 text-center">قيمنا</h2>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-[#E53935] rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl mb-3"> والشغف</h3>
              <p className="text-gray-600">
                نصنع كل بيتزا بحب واهتمام كبير
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-[#E53935] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl mb-3">الجودة </h3>
              <p className="text-gray-600">
                نستخدم أفضل المكونات الطازجة
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-[#E53935] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl mb-3">رضا العملاء</h3>
              <p className="text-gray-600">
                سعادتك هي هدفنا الأول
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-[#E53935] rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl mb-3">السرعة</h3>
              <p className="text-gray-600">
                توصيل سريع في اي مكان   
              </p>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="mb-16">
          <h2 className="text-3xl mb-8 text-center">من داخل المطعم</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <img
              src="https://images.unsplash.com/photo-1651981038189-e71e557f5869?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMHJlc3RhdXJhbnQlMjBraXRjaGVufGVufDF8fHx8MTc3NjEwODMxMnww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="مطبخنا"
              className="w-full h-64 object-cover rounded-2xl shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1689150911817-3e27168ab6a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwcGl6emElMjBvdmVufGVufDF8fHx8MTc3NjEwODMxNHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="الفرن"
              className="w-full h-64 object-cover rounded-2xl shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1678443316613-dbc3261c8b50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMGRlbGl2ZXJ5JTIwYm94fGVufDF8fHx8MTc3NjEwODMxM3ww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="التوصيل"
              className="w-full h-64 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-white rounded-2xl shadow-lg p-12 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl mb-4">تواصل معنا</h2>
          <p className="text-xl text-gray-600 mb-6">
            نحن دائماً سعداء بسماع آرائكم واقتراحاتكم
          </p>
          <div className="space-y-3 text-lg">
            <p>📞 103 4503 753 20+ </p>
            <p>📍 : مصر- مدينة نصر</p>
            <p>⏰ مواعيد : يومياً من 10  لي 12  </p>
          </div>
        </div>
      </div>
    </div>
  );
}
