import { Star, ShoppingCart, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface BookCardProps {
  id: string;
  title: string;
  author: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  coverImage: string;
  category: string;
  isNew?: boolean;
  isBestseller?: boolean;
}

const BookCard = ({
  title,
  author,
  price,
  originalPrice,
  rating,
  reviewCount,
  coverImage,
  category,
  isNew,
  isBestseller
}: BookCardProps) => {
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <Card className="book-card group overflow-hidden">
      <CardContent className="p-0">
        <div className="relative">
          <img
            src={coverImage}
            alt={`${title} book cover`}
            className="w-full h-64 object-cover"
          />
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {isNew && <Badge className="bg-green-500">New</Badge>}
            {isBestseller && <Badge className="bg-orange-500">Bestseller</Badge>}
            {discount > 0 && <Badge variant="destructive">{discount}% OFF</Badge>}
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/80 hover:bg-white"
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="p-4">
          <div className="mb-2">
            <p className="text-xs text-muted-foreground uppercase tracking-wide">
              {category}
            </p>
          </div>
          
          <h3 className="font-semibold text-foreground mb-1 line-clamp-2 text-sm">
            {title}
          </h3>
          
          <p className="text-sm text-muted-foreground mb-2">
            by {author}
          </p>

          <div className="flex items-center mb-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-3 w-3 ${
                    i < Math.floor(rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground ml-1">
              ({reviewCount})
            </span>
          </div>

          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-foreground">
                ₹{price}
              </span>
              {originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  ₹{originalPrice}
                </span>
              )}
            </div>
          </div>

          <Button className="w-full btn-jairozon">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookCard;