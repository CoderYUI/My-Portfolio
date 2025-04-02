import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-darker shadow-md border-b border-gray-dark">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold"><span className="text-primary">Bhaskar</span><span className="text-light"> Ojha</span></div>
        
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-light hover:text-primary transition-colors">Home</a>
          <a href="#about" className="text-light hover:text-primary transition-colors">About</a>
          <a href="#skills" className="text-light hover:text-primary transition-colors">Skills</a>
          <a href="#projects" className="text-light hover:text-primary transition-colors">Projects</a>
          <a href="#contact" className="text-light hover:text-primary transition-colors">Contact</a>
        </div>
        
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none text-light"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-darker py-2 px-6 shadow-lg absolute w-full border-t border-gray-dark">
          <div className="flex flex-col space-y-4">
            <a href="#home" className="text-light hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#about" className="text-light hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#skills" className="text-light hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Skills</a>
            <a href="#projects" className="text-light hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Projects</a>
            <a href="#contact" className="text-light hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
