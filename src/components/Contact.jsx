function Contact() {
  return (
    <section id="contact" className="py-20 bg-darker">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-title-underline"></div>
          <p className="mt-4 text-light max-w-2xl mx-auto">
            Have a question or want to connect? Feel free to reach out using the information below.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-primary">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="mt-1 bg-primary p-3 rounded-full text-dark">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-primary">Location</h4>
                  <p className="text-light">Bhopal, India</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 bg-primary p-3 rounded-full text-dark">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-primary">Email</h4>
                  <p className="text-light">bhaskarojha2426@gmail.com</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-4 text-primary">Follow Me</h3>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/itsbhaskarojha/" className="bg-primary p-3 rounded-full text-dark hover:bg-secondary transition-colors shadow-glow">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path>
                  </svg>
                </a>
                <a href="https://github.com/CoderYUI" className="bg-primary p-3 rounded-full text-dark hover:bg-secondary transition-colors shadow-glow">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-dark p-8 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-4 text-primary">Send Me a Message</h3>
            <p className="mb-6 text-light">
              Contact form functionality coming soon! In the meantime, please reach out via email.
            </p>
            <a 
              href="mailto:bhaskarojha2426@gmail.com"
              className="bg-primary hover:bg-secondary text-dark py-3 px-8 rounded-lg font-medium transition-all duration-300 shadow-glow inline-block"
            >
              Email Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
