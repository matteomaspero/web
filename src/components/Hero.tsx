
import { ArrowDownIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4" style={{ color: "#0050B2" }}>
              Matteo Maspero
            </h1>
            <p className="text-lg md:text-xl mb-6 text-muted-foreground">
              Assistant Professor at UMC Utrecht, focusing on AI and deep learning methods for medical image analysis in radiation oncology.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild style={{ backgroundColor: "#0050B2" }}>
                <a href="#research">Research</a>
              </Button>
              <Button variant="outline" asChild style={{ borderColor: "#0050B2", color: "#0050B2" }}>
                <a href="#publications">Publications</a>
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative rounded-2xl overflow-hidden shadow-xl animate-fade-in">
              <img 
                src="https://images.unsplash.com/photo-1576670159375-74bae1ff0610?q=80&w=2000&auto=format&fit=crop" 
                alt="Medical imaging researcher" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-navy/20" />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#research" className="block" style={{ color: "#0050B2" }}>
            <ArrowDownIcon className="h-8 w-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
