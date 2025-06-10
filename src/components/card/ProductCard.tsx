import { Star, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import type { Product } from '@/utils/types/api';

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

export const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const rating = Math.floor(Math.random() * 2) + 4;

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg gap-2 py-2">
      <div className="relative">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <CardHeader className="p-3 pb-0">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-3 w-3 ${
                i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
              }`}
            />
          ))}
          <span className="text-xs text-gray-500 ml-1">({rating}.0)</span>
        </div>
        <h3 className="text-base font-semibold line-clamp-1 mt-1">{product.title}</h3>
        <p className="text-xs text-gray-500 line-clamp-2 mt-0.5">{product.description}</p>
      </CardHeader>

      <CardContent className="p-3 pt-2">
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-primary">${product.price}</span>
          <span className="text-xs text-gray-500">
            {product.category}
          </span>
        </div>
      </CardContent>

      <CardFooter className="p-3 pt-0">
        <Button
          className="w-full gap-1 h-8 text-sm"
          onClick={() => onAddToCart?.(product)}
        >
          <ShoppingCart className="h-3 w-3" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}; 