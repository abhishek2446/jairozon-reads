import { Search, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import heroImage from '@/assets/hero-books.jpg';

const HeroSection = () => {
  return (
    <section className="hero-gradient text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Your Gateway to
              <span className="block text-accent">Knowledge</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl">
              Discover a world of learning with our vast collection of educational books. 
              From science to literature, we have everything you need to expand your mind.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto lg:mx-0 mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search books, authors, subjects..."
                  className="pl-12 pr-4 py-3 text-gray-900 bg-white/95 border-0 focus:bg-white"
                />
                <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 btn-jairozon">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="btn-jairozon">
                Shop Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary">
                Browse Categories
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Stack of educational books representing knowledge and learning"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;