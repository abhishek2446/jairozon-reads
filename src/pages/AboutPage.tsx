import Navigation from '@/components/Navigation';
import { BookOpen, Users, Award, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutPage = () => {
  const stats = [
    { icon: BookOpen, label: 'Books Available', value: '10,000+' },
    { icon: Users, label: 'Happy Customers', value: '50,000+' },
    { icon: Award, label: 'Years of Experience', value: '15+' },
    { icon: Globe, label: 'Cities Served', value: '100+' }
  ];

  const values = [
    {
      title: 'Quality Education',
      description: 'We curate only the finest educational materials to ensure students receive the best learning resources.',
      icon: BookOpen
    },
    {
      title: 'Accessibility',
      description: 'Making quality education accessible to everyone through affordable pricing and wide availability.',
      icon: Users
    },
    {
      title: 'Innovation',
      description: 'Continuously evolving our platform to provide the best online book shopping experience.',
      icon: Award
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">About Jairozon</h1>
          <p className="text-xl text-blue-100 leading-relaxed">
            Your trusted partner in educational excellence since 2009. We're committed to making 
            quality educational books accessible to learners everywhere.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Mission</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              "To make learning accessible through quality educational books and create a world 
              where knowledge knows no boundaries."
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Empowering Minds Since 2009
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Founded with a vision to democratize education, Jairozon has grown from a small local 
                bookstore to India's leading online destination for educational books. We understand 
                the transformative power of knowledge and strive to make quality educational resources 
                accessible to every student, teacher, and lifelong learner.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our carefully curated collection spans across Science, Mathematics, Commerce, Literature, 
                and Competitive Exam preparation materials, ensuring that we cater to diverse learning needs 
                and academic aspirations.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop"
                alt="Students studying with books from Jairozon"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Our Impact in Numbers
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <h3 className="text-3xl font-bold text-foreground mb-2">
                      {stat.value}
                    </h3>
                    <p className="text-muted-foreground">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at Jairozon
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center">
                  <CardContent className="p-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 text-accent mb-6">
                      <IconComponent className="h-10 w-10" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Why Choose Jairozon?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                📚 Curated Collection
              </h3>
              <p className="text-muted-foreground mb-6">
                Every book in our collection is carefully selected by education experts to ensure quality and relevance.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">
                💰 Best Prices
              </h3>
              <p className="text-muted-foreground">
                We offer competitive pricing and regular discounts to make education affordable for everyone.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                🚚 Fast Delivery
              </h3>
              <p className="text-muted-foreground mb-6">
                Quick and reliable delivery across India, ensuring your books reach you when you need them.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">
                🎯 Student-Focused
              </h3>
              <p className="text-muted-foreground">
                Everything we do is designed with students' success in mind, from book selection to customer service.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;