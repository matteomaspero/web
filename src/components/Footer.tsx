import { BookOpen, FileText, GraduationCap, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="section-container py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Dr. Matteo Maspero</h3>
            <p className="text-white/70 mb-4">
              Assistant Professor and Clinical Medical Physicist-in-Training at UMC Utrecht, focusing on AI for adaptive radiotherapy.
            </p>
            <div className="flex space-x-4">
              <a href="https://orcid.org/0000-0003-0347-3375" className="text-white/70 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                <span className="sr-only">ORCID</span>
                <img src="https://orcid.org/assets/vectors/orcid.logo.icon.svg" alt="ORCID" className="h-6 w-6 brightness-200" />
              </a>
              <a href="https://twitter.com/MatteoMaspero" className="text-white/70 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/matteo-maspero-9a8629b0/" className="text-white/70 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="https://scholar.google.it/citations?user=vIO1i9EAAAAJ&hl=en" className="text-white/70 hover:text-white transition-colors">
                <span className="sr-only">Google Scholar</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14Zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5 12 0Z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#research" className="text-white/70 hover:text-white transition-colors inline-flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Research Areas
                </a>
              </li>
              <li>
                <a href="#teaching" className="text-white/70 hover:text-white transition-colors inline-flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" />
                  Teaching
                </a>
              </li>
              <li>
                <a href="#publications" className="text-white/70 hover:text-white transition-colors inline-flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  Publications
                </a>
              </li>
              <li>
                <a href="#talks" className="text-white/70 hover:text-white transition-colors">
                  Talks
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Affiliations</h3>
            <ul className="space-y-2 text-white/70">
              <li>
                <a href="https://research.umcutrecht.nl/researchers/maspero/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1">
                  Department of Radiotherapy, UMC Utrecht
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a href="https://cig-utrecht.org/members/matteo-maspero" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1">
                  Computational Imaging Group
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a href="https://dlinrt.eu" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1">
                  DLinRT.eu Consortium
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center text-white/50">
          <p>&copy; {new Date().getFullYear()} Dr. Matteo Maspero. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
