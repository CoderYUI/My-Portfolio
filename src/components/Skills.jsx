function Skills() {
  const skills = [
    { name: 'HTML & CSS', level: 75 },
    { name: 'JavaScript', level: 70 },
    { name: 'React', level: 60 },
    { name: 'Tailwind CSS', level: 65 },
    { name: 'Python', level: 70 },
    { name: 'MongoDB', level: 65 },
    { name: 'MySQL', level: 60 },
  ];

  return (
    <section id="skills" className="py-20 bg-darker">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">My Skills</h2>
          <div className="section-title-underline"></div>
          <p className="mt-4 text-light max-w-2xl mx-auto">
            These are the technologies I'm currently learning and working with:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="font-medium text-light">{skill.name}</span>
                <span className="text-primary font-medium">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-dark rounded-full h-2.5">
                <div 
                  className="bg-primary h-2.5 rounded-full shadow-glow" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8 text-primary">Learning Path</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Java', 'Spring Boot', 'Node.js', 'Express', 'API Development', 'Backend Architecture'].map((tech, index) => (
              <span 
                key={index} 
                className="bg-gray-dark px-6 py-3 rounded-lg shadow-md text-light border border-primary hover:shadow-glow transition-shadow duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
