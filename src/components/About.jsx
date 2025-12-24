import React from 'react';

const About = () => {
  const education = [
    {
      institution: "National Institute of Technology Rourkela",
      degree: "Bachelor of Technology",
      period: "Nov 2021 - Jun 2025",
      gpa: "7.32/10.0"
    },
    {
      institution: "SVM Higher Secondary School, Berhampur",
      degree: "Intermediate",
      period: "Jul 2019 - Oct 2021",
      percentage: "95.5%"
    },
    {
      institution: "KSB Public School, Sarankul, Nayagarh",
      degree: "Matriculation",
      period: "Apr 2018 - Mar 2019",
      percentage: "93%"
    }
  ];

  const skills = {
    "Programming": ["C++", "Python", "SQL"],
    "Databases": ["PostgreSQL", "MongoDB", "DynamoDB"],
    "Libraries": ["NumPy", "Pandas", "Matplotlib", "TensorFlow", "Langchain"],
    "Tools": ["Git", "GitHub", "AWS", "PowerBI", "Ollama", "Docker", "Spark", "Airflow", "Kafka", "Hadoop", "Podman", "MCP Server", "LLM"]
  };

  const coursework = {
    "Computer Science": ["Deep Learning", "Data Structures and Algorithms", "Database Management System", "System Design"],
    "Mathematics": ["Probability & Statistics", "Vector Algebra", "Linear Algebra"]
  };

  return (
    <section id="about" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-5xl font-bold text-center text-white mb-16 transform hover:scale-105 transition-transform duration-300">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Education Card with 3D effect */}
          <div className="group perspective-1000">
            <div className="relative bg-slate-800 p-8 rounded-xl shadow-xl border border-slate-700 transform transition-all duration-500 hover:scale-105 hover:-translate-y-3 hover:rotate-y-5 hover:shadow-2xl hover:shadow-blue-500/30" style={{transformStyle: 'preserve-3d'}}>
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/10 to-purple-600/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-semibold text-blue-400 mb-6 transform transition-all duration-300 group-hover:scale-110">Education</h3>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-4 transform transition-all duration-300 hover:translate-x-3 hover:border-purple-500">
                      <h4 className="text-xl font-semibold text-white">{edu.institution}</h4>
                      <p className="text-gray-300">{edu.degree}</p>
                      <p className="text-gray-400 text-sm">{edu.period}</p>
                      <p className="text-blue-300 font-medium mt-1">
                        {edu.gpa ? `GPA: ${edu.gpa}` : `Percentage: ${edu.percentage}`}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Skills Card with 3D effect */}
          <div className="group perspective-1000">
            <div className="relative bg-slate-800 p-8 rounded-xl shadow-xl border border-slate-700 transform transition-all duration-500 hover:scale-105 hover:-translate-y-3 hover:-rotate-y-5 hover:shadow-2xl hover:shadow-purple-500/30" style={{transformStyle: 'preserve-3d'}}>
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-l from-purple-600/0 via-purple-600/10 to-blue-600/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-semibold text-blue-400 mb-6 transform transition-all duration-300 group-hover:scale-110">Technical Skills</h3>
                <div className="space-y-4">
                  {Object.entries(skills).map(([category, items]) => (
                    <div key={category}>
                      <h4 className="text-lg font-semibold text-gray-200 mb-2">{category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {items.map((skill, idx) => (
                          <span 
                            key={idx} 
                            className="px-3 py-1 bg-blue-900 text-blue-200 rounded-full text-sm transform transition-all duration-300 hover:scale-125 hover:bg-blue-800 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/50 cursor-default"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Coursework Card with 3D effect */}
        <div className="group perspective-1000">
          <div className="relative bg-slate-800 p-8 rounded-xl shadow-xl border border-slate-700 transform transition-all duration-500 hover:scale-105 hover:-translate-y-3 hover:shadow-2xl hover:shadow-pink-500/30" style={{transformStyle: 'preserve-3d'}}>
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-pink-600/10 to-purple-600/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-semibold text-blue-400 mb-6 transform transition-all duration-300 group-hover:scale-110">Relevant Coursework</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {Object.entries(coursework).map(([category, courses]) => (
                  <div key={category}>
                    <h4 className="text-xl font-semibold text-gray-200 mb-3">{category}</h4>
                    <ul className="space-y-2">
                      {courses.map((course, idx) => (
                        <li key={idx} className="text-gray-300 flex items-start transform transition-all duration-300 hover:translate-x-2 hover:text-blue-300">
                          <span className="text-blue-400 mr-2">▹</span>
                          {course}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;