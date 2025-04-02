function Projects() {
  return (
    <section id="projects" className="py-20 bg-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">My Projects</h2>
          <div className="section-title-underline"></div>
          <p className="mt-4 text-light max-w-2xl mx-auto">
            I'm currently working on building projects to showcase my skills. This section will be updated as I complete them.
          </p>
        </div>
        
        <div className="bg-gray-dark rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-glow border border-gray-darker hover:border-primary max-w-2xl mx-auto p-8 text-center">
          <div className="text-primary text-6xl mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-4 text-primary">Projects Coming Soon</h3>
          <p className="text-light mb-6">
            I'm currently developing projects that demonstrate my skills in web development.
            Check back soon to see my latest work, or follow my journey on GitHub.
          </p>
          <div className="mt-4">
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-primary hover:bg-secondary text-dark py-3 px-8 rounded-lg font-medium transition-all duration-300 shadow-glow hover:shadow-glow-lg"
            >
              Follow My Progress
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
