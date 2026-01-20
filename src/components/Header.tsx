
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="section-container flex justify-between items-center">
        <a href="#hero" style={{ color: "#0050B2" }} className="font-serif text-xl md:text-2xl font-bold">
          Matteo Maspero
        </a>
        
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        <nav className={`
          ${mobileMenuOpen ? 'flex flex-col absolute top-full left-0 right-0 bg-white shadow-md p-4' : 'hidden'} 
          md:flex md:items-center md:static md:bg-transparent md:shadow-none md:p-0
        `}>
          <ul className="flex flex-col md:flex-row md:items-center gap-1 md:gap-1">
            {['Research', 'Team', 'Teaching', 'Awards', 'Editorial', 'Contact'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`}
                  style={{ color: "#0050B2" }}
                  className="block px-4 py-2 hover:text-teal transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
            {[
              { name: 'Publications', path: '/publications' },
              { name: 'Talks', path: '/talks' },
              { name: 'Projects', path: '/projects' }
            ].map((item) => (
              <li key={item.name}>
                <Link 
                  to={item.path}
                  style={{ color: "#0050B2" }}
                  className="block px-4 py-2 hover:text-teal transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
