import { useState } from 'react';
import Navigation from '@/components/Navigation';
import BookCard from '@/components/BookCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Grid, List, Filter, Search } from 'lucide-react';

// Extended sample book data
const allBooks = [
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
  },
  {
    id: '5',
    title: 'Pride and Prejudice: Annotated Edition',
    author: 'Jane Austen',
    price: 449,
    rating: 4.6,
    reviewCount: 892,
    coverImage: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop',
    category: 'Literature'
  },
  {
    id: '6',
    title: 'Linear Algebra and Its Applications',
    author: 'Dr. Robert Kumar',
    price: 999,
    originalPrice: 1199,
    rating: 4.4,
    reviewCount: 156,
    coverImage: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=400&fit=crop',
    category: 'Mathematics'
  }
];

const categories = ['All', 'Mathematics', 'Science', 'Commerce', 'Literature', 'Competitive Exams'];
const priceRanges = [
  { label: 'Under ₹500', min: 0, max: 500 },
  { label: '₹500 - ₹1000', min: 500, max: 1000 },
  { label: '₹1000 - ₹1500', min: 1000, max: 1500 },
  { label: 'Above ₹1500', min: 1500, max: Infinity }
];

const BooksPage = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  const filteredBooks = allBooks.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || book.category === selectedCategory;
    const matchesPrice = selectedPriceRanges.length === 0 || selectedPriceRanges.some(range => {
      const priceRange = priceRanges.find(r => r.label === range);
      return priceRange && book.price >= priceRange.min && book.price <= priceRange.max;
    });
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const handlePriceRangeChange = (rangeLabel: string, checked: boolean) => {
    if (checked) {
      setSelectedPriceRanges([...selectedPriceRanges, rangeLabel]);
    } else {
      setSelectedPriceRanges(selectedPriceRanges.filter(r => r !== rangeLabel));
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">All Books</h1>
          <p className="text-muted-foreground">
            Discover our complete collection of educational books
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:w-64 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4">Filters</h3>
                
                {/* Categories */}
                <div className="mb-6">
                  <h4 className="font-medium text-sm text-foreground mb-3">Category</h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <label key={category} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="category"
                          checked={selectedCategory === category}
                          onChange={() => setSelectedCategory(category)}
                          className="text-primary"
                        />
                        <span className="text-sm">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Ranges */}
                <div className="mb-6">
                  <h4 className="font-medium text-sm text-foreground mb-3">Price Range</h4>
                  <div className="space-y-2">
                    {priceRanges.map((range) => (
                      <div key={range.label} className="flex items-center space-x-2">
                        <Checkbox
                          checked={selectedPriceRanges.includes(range.label)}
                          onCheckedChange={(checked) => 
                            handlePriceRangeChange(range.label, checked as boolean)
                          }
                        />
                        <span className="text-sm">{range.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => {
                    setSelectedCategory('All');
                    setSelectedPriceRanges([]);
                    setSearchQuery('');
                  }}
                >
                  Clear Filters
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Search and Sort Bar */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search books, authors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="lg:hidden"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>
                
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                  </SelectContent>
                </Select>

                <div className="flex border rounded-lg">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Results Count */}
            <p className="text-muted-foreground mb-6">
              Showing {filteredBooks.length} of {allBooks.length} books
            </p>

            {/* Books Grid/List */}
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                : 'grid-cols-1'
            }`}>
              {filteredBooks.map((book) => (
                <BookCard key={book.id} {...book} />
              ))}
            </div>

            {filteredBooks.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  No books found matching your criteria.
                </p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => {
                    setSelectedCategory('All');
                    setSelectedPriceRanges([]);
                    setSearchQuery('');
                  }}
                >
                  Clear all filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksPage;