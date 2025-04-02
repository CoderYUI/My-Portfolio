function About() {
  return (
    <section id="about" className="py-20 bg-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">About Me</h2>
          <div className="section-title-underline"></div>
        </div>
        
        <div className="bg-gray-dark rounded-xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto border border-gray-darker">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-primary">Student & Aspiring Developer</h3>
              <p className="mb-4 text-light leading-relaxed">
                I am a dedicated student with a growing passion for web development and programming. 
                I'm currently focused on building a strong foundation in both frontend and backend technologies
                to become a skilled full stack developer.
              </p>
              <p className="mb-4 text-light leading-relaxed">
                I'm actively learning and expanding my knowledge in various programming languages and frameworks.
                My goal is to become a proficient Java developer and create impactful web applications that solve 
                real-world problems.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-darker p-6 rounded-lg border border-gray-dark">
                <h4 className="text-xl font-medium mb-4 text-primary">Personal Info</h4>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-light"><strong className="text-primary">Name:</strong> Bhaskar Ojha</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-light"><strong className="text-primary">College:</strong> Vellore Institute of Technology, Bhopal</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-light"><strong className="text-primary">Location:</strong> Bhopal, India</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-darker p-6 rounded-lg border border-gray-dark">
                <h4 className="text-xl font-medium mb-4 text-primary">Education & Focus</h4>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-light"><strong className="text-primary">Status:</strong> Student</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-light"><strong className="text-primary">Degree:</strong> B.Tech Computer Science & Engineering</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-light"><strong className="text-primary">Focus:</strong> Full Stack Development</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="text-center mt-4">
              <button 
                className="bg-primary hover:bg-secondary text-dark py-3 px-8 rounded-lg font-medium transition-colors duration-300 inline-block shadow-glow hover:shadow-none cursor-not-allowed opacity-80"
              >
                Resume Coming Soon
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
