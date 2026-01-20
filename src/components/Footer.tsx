import { BookOpen, FileText, GraduationCap, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="section-container py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Dr. Matteo Maspero</h3>
            <p className="text-white/70 mb-4">
              Human being, Assistant Professor and Medical Physicist at UMC Utrecht, focusing on AI for adaptive radiotherapy.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/matteo-maspero-9a8629b0/" className="text-white/70 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="https://bsky.app/profile/matteomaspero.bsky.social" className="text-white/70 hover:text-white transition-colors">
                <span className="sr-only">Bluesky</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.043-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z" />
                </svg>
              </a>
              <a href="https://orcid.org/0000-0003-0347-3375" className="text-white/70 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                <span className="sr-only">ORCID</span>
                <img src="https://orcid.org/assets/vectors/orcid.logo.icon.svg" alt="ORCID" className="h-6 w-6 brightness-200" />
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
                  DLinRT.eu
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
