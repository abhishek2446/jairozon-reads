import { BookOpen, Calculator, DollarSign, PenTool, Trophy, GraduationCap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const categories = [
  {
    name: 'Science',
    icon: BookOpen,
    count: '2,450+ books',
    color: 'bg-blue-50 text-blue-600',
    description: 'Physics, Chemistry, Biology & more'
  },
  {
    name: 'Mathematics',
    icon: Calculator,
    count: '1,850+ books',
    color: 'bg-green-50 text-green-600',
    description: 'Pure & Applied Mathematics'
  },
  {
    name: 'Commerce',
    icon: DollarSign,
    count: '1,200+ books',
    color: 'bg-orange-50 text-orange-600',
    description: 'Business, Economics & Finance'
  },
  {
    name: 'Literature',
    icon: PenTool,
    count: '3,100+ books',
    color: 'bg-purple-50 text-purple-600',
    description: 'Classic & Modern Literature'
  },
  {
    name: 'Competitive Exams',
    icon: Trophy,
    count: '950+ books',
    color: 'bg-red-50 text-red-600',
    description: 'JEE, NEET, UPSC & more'
  },
  {
    name: 'Academic',
    icon: GraduationCap,
    count: '2,750+ books',
    color: 'bg-indigo-50 text-indigo-600',
    description: 'University & School textbooks'
  }
];

const FeaturedCategories = () => {
  return (
    <section className="py-16 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Explore by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find the perfect books for your learning journey across our comprehensive categories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card key={category.name} className="category-card cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg ${category.color}`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        {category.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {category.description}
                      </p>
                      <p className="text-sm font-medium text-primary">
                        {category.count}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;