
import { BookOpen, FileText, GraduationCap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="section-container py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Dr. Matteo Maspero</h3>
            <p className="text-white/70 mb-4">
              Assistant Professor at UMC Utrecht focusing on AI for medical imaging and radiotherapy.
            </p>
            <div className="flex space-x-4">
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
                  <path d="M10.93 2.045c-.547.366-3.22 2.14-5.938 3.945C2.272 7.794.05 9.286.05 9.304c0 .019 2.493 1.582 5.54 3.475.045.027 2.615 1.74 5.71 3.807 3.094 2.066 5.633 3.73 5.642 3.696.083-.319.23-.414.917-.183.393.135.479.145.885.145.407 0 .493-.01.885-.145.646-.22.834-.168.917.183.01.033 2.548-1.63 5.642-3.696 3.094-2.068 5.664-3.78 5.71-3.807 3.046-1.893 5.539-3.456 5.539-3.475 0-.019-2.222-1.51-4.95-3.32-2.731-1.805-5.404-3.579-5.949-3.945L18 .816c-2.068-1.304-4.99-1.304-7.07 0zM5.236 24c.534-.002 8.826-.002 9.323 0 .497.002 1.483-.002 1.597 0 .114.002.558-.002 1.332-.003h3.96c1.978 0 2.012-.002 2.012-.257 0-.164-.781-.281-1.77-.267-.995.014-1.95.014-2.124 0-.173-.014-.955-.02-1.735-.014-.779.006-1.56.012-1.735.014-.173.002-1.128.002-2.124 0-.995-.002-1.77.039-1.77.091 0 .053-.898.096-2 .096-1.101 0-2.004-.043-2.004-.096 0-.053-.924-.091-2.049-.087-1.129.004-2.104-.002-2.167-.014-.064-.012-.117-.031-.119-.043-.002-.012-.058-.161-.123-.331-.065-.17-.118-.381-.118-.469 0-.088-.005-.112-.01-.053-.005.058-.008-.02-.006-.173.001-.153-.007-.362-.019-.465-.012-.102-.007-.332.009-.51.017-.177.022-.439.011-.582-.01-.143-.015-.325-.01-.406.005-.081.005-.147 0-.147-.006 0-.01-.066-.01-.147 0-.081.004-.263.01-.406.005-.143.005-.37 0-.506-.006-.136-.01-.335-.01-.441 0-.107.004-.305.01-.441.005-.136.005-.363 0-.506-.006-.143-.01-.325-.01-.406 0-.081.004-.147.01-.147.006 0 .01-.07.01-.155s-.004-.155-.01-.155c-.006 0-.01-.066-.01-.147 0-.081.004-.263.01-.406.005-.143.005-.37 0-.506-.006-.136-.01-.335-.01-.441 0-.107.004-.305.01-.441.005-.136.005-.363 0-.506-.006-.143-.01-.325-.01-.406 0-.081.004-.147.01-.147.006 0 .01-.066.01-.147 0-.081-.004-.263-.01-.406-.005-.143-.005-.37 0-.506.006-.136.01-.335.01-.441 0-.107-.004-.305-.01-.441-.005-.136-.005-.363 0-.506.006-.143.01-.325.01-.406 0-.081-.004-.147-.01-.147-.006 0-.01-.066-.01-.147 0-.081.004-.265.01-.408.005-.143.002-.404-.007-.581-.01-.177-.017-.407-.017-.51v-.19l-.3-.024c-.165-.013-.333-.072-.375-.13-.041-.058-.075-.399-.075-.754v-.646h1.986c1.092 0 1.99-.043 1.99-.095 0-.052.775-.095 1.726-.095s1.726.043 1.726.095c0 .053.673.095 1.496.095.822 0 1.496-.043 1.496-.095 0-.053.733-.095 1.629-.095.897 0 1.629.043 1.629.095 0 .052.97.095 2.159.095 1.505 0 2.16-.027 2.16-.091 0-.05.901-.096 2.003-.102 1.329-.007 2.004-.045 2.004-.111 0-.089-.045-.091-2.068-.091h-2.067v-.501c0-.499 0-.501-.091-.501-.05 0-.091.226-.091.501v.501H7.405v-.633c0-.496-.017-.633-.075-.633-.062 0-.075.178-.075.757 0 .67-.015.775-.097.863-.077.082-.151.106-.297.096-.153-.01-.186.008-.205.116-.013.077-.036.706-.051 1.397-.016.691-.046 1.397-.067 1.57-.021.173-.049.887-.063 1.586-.014.699-.041 1.413-.061 1.586-.02.173-.045.801-.056 1.397-.01.596-.037 1.31-.059 1.586-.023.276-.054 1.076-.071 1.776-.017.7-.046 1.414-.066 1.586-.02.173-.046.801-.058 1.397-.012.596-.039 1.31-.061 1.586-.022.276-.053 1.076-.07 1.776-.017.7-.047 1.413-.066 1.585-.02.173-.049.887-.064 1.588-.015.7-.042 1.414-.062 1.586-.02.173-.046.8-.058 1.397-.012.596-.039 1.31-.061 1.586-.022.276-.053 1.076-.07 1.776-.017.7-.047 1.414-.066 1.586-.02.173-.046.801-.058 1.397-.012.596-.04 1.31-.063 1.586-.022.276-.051.976-.064 1.553-.015.67-.02.711-.023.224-.002-.373-.032-.582-.075-.524z" />
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
            <h3 className="text-xl font-bold mb-4">Academic Affiliations</h3>
            <ul className="space-y-2 text-white/70">
              <li>University Medical Center Utrecht</li>
              <li>Computational Imaging Group</li>
              <li>Department of Radiotherapy</li>
              <li>DLINRT Consortium</li>
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
