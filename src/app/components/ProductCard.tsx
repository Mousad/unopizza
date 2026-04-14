import { Link } from 'react-router';
import { Product } from '../data/products';
import { useCart } from '../contexts/CartContext';
import { toast } from 'sonner';
import { FaShoppingCart } from "react-icons/fa";

interface ProductCardProps {
  product: Product;
  showDetails?: boolean;
}

export function ProductCard({ product, showDetails = true }: ProductCardProps) {
  const { addToCart } = useCart();
  const minPrice = Math.min(...product.sizes.map((s) => s.price));

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    // Add with smallest size by default
    const defaultSize = product.sizes[0];
    addToCart(product, defaultSize.size, 1);
    toast.success('تم إضافة المنتج إلى السلة');
  };

  return (
    <div className="bg-[#f8f4f0] rounded- shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <Link to={`/products/${product.id}`}>
        <div className="aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      <div className="p-2 ">
        <h3 className="text-xl mb-2">{product.name}</h3>
        
        <div className="flex items-center justify-between mb-3 ">
          <span className="text-[#15110e] bg-[#c3bfbc] px-2 rounded-xs"> {minPrice} <span className="text-[#e53935]">ج م</span></span>
       
        <div className="flex gap-2">
  <button
    onClick={handleAddToCart}
    className="flex items-center justify-center text-[#E53935] px-2 py-2 rounded-full transition-colors"
  >
    <FaShoppingCart />
  </button>
</div>
        </div>
      </div>
    </div>
  );
}
