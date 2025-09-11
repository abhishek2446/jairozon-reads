import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FeaturedCategories from '@/components/FeaturedCategories';
import BookCard from '@/components/BookCard';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Clock } from 'lucide-react';

// Sample book data
const featuredBooks = [
  {
    id: '1',
    title: 'Advanced Calculus and Mathematical Analysis',
    author: 'Dr. Sarah Johnson',
    price: 799,
    originalPrice: 999,
    rating: 4.5,
    reviewCount: 245,
    coverImage: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=400&fit=crop',
    category: 'Mathematics',
    isBestseller: true
  },
  {
    id: '2',
    title: 'Organic Chemistry: Structure and Function',
    author: 'Prof. Michael Chen',
    price: 1299,
    originalPrice: 1599,
    rating: 4.7,
    reviewCount: 189,
    coverImage: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&h=400&fit=crop',
    category: 'Science',
    isNew: true
  },
  {
    id: '3',
    title: 'Modern Financial Management',
    author: 'David Williams',
    price: 699,
    rating: 4.3,
    reviewCount: 156,
    coverImage: 'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?w=300&h=400&fit=crop',
    category: 'Commerce'
  },
  {
    id: '4',
    title: 'JEE Main & Advanced Physics',
    author: 'Dr. Raj Patel',
    price: 899,
    originalPrice: 1099,
    rating: 4.8,
    reviewCount: 324,
    coverImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop',
    category: 'Competitive Exams',
    isBestseller: true
  }
];

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <FeaturedCategories />
      
      {/* Bestsellers Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2 flex items-center">
                <TrendingUp className="h-8 w-8 text-accent mr-3" />
                Bestsellers
              </h2>
              <p className="text-muted-foreground">
                Most popular books loved by students and professionals
              </p>
            </div>
            <Button variant="outline" className="hidden sm:flex">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredBooks.map((book) => (
              <BookCard key={book.id} {...book} />
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2 flex items-center">
                <Clock className="h-8 w-8 text-primary mr-3" />
                New Arrivals
              </h2>
              <p className="text-muted-foreground">
                Latest additions to our collection
              </p>
            </div>
            <Button variant="outline" className="hidden sm:flex">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredBooks.slice().reverse().map((book) => (
              <BookCard key={`new-${book.id}`} {...book} isNew={true} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 hero-gradient text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Stay Updated with Latest Books
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Subscribe to our newsletter and get notified about new arrivals, special offers, and educational content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <Button className="btn-jairozon">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;