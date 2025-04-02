function Hero() {
  return (
    <section id="home" className="bg-darker text-light py-20">
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm <span className="text-primary">Bhaskar Ojha</span></h1>
          <h2 className="text-2xl md:text-4xl mb-6">Student & Aspiring Developer</h2>
          <p className="text-lg mb-8">I'm on a journey to become a full stack developer with a focus on Java and backend technologies.</p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <a href="#contact" className="bg-primary hover:bg-secondary text-dark py-3 px-8 rounded-lg font-medium transition-colors duration-300 text-center">
              Get in Touch
            </a>
            <a href="#skills" className="bg-transparent hover:bg-gray-darker border border-primary text-primary hover:text-primary py-3 px-8 rounded-lg font-medium transition-colors duration-300 text-center">
              My Skills
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="w-60 h-60 md:w-96 md:h-96 rounded-full overflow-hidden shadow-glow-lg transition-all duration-300 hover:shadow-glow">
            <img 
              src="/Profile.png" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
