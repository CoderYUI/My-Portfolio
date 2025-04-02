function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-darker text-light py-12 border-t border-gray-dark">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold"><span className="text-primary">Bhaskar </span><span className="text-light">Ojha</span></h2>
            <p className="mt-2 text-gray-300">Student & Aspiring Developer</p>
          </div>
          
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-primary">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-300 hover:text-primary transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-primary transition-colors">About</a></li>
                <li><a href="#skills" className="text-gray-300 hover:text-primary transition-colors">Skills</a></li>
                <li><a href="#projects" className="text-gray-300 hover:text-primary transition-colors">Projects</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2 text-primary">Connect</h3>
              <ul className="space-y-2">
                <li><a href="https://github.com/CoderYUI" className="text-gray-300 hover:text-primary transition-colors">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/itsbhaskarojha/" className="text-gray-300 hover:text-primary transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-dark mt-8 pt-8 text-center">
          <p className="text-gray-400">© {currentYear} Bhaskar Ojha. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
