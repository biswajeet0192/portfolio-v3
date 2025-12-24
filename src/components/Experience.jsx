import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer II",
      company: "HERE Technologies",
      location: "Mumbai, India",
      period: "Jul 2025 - Present",
      description: [
        "Built a SQL agent–powered chatbot using Claude Sonnet 3.5 on AWS Bedrock, enabling natural-language-to-SQL translation for automated HERESUP ticket queries across HCP3 and BMW(SAM) modules.",
        "Custom NLP-to-SQL chains designed with integrated visualizations, improving stakeholder insights and drastically reducing manual data-fetching effort.",
        "Developing interactive stakeholder dashboards and scalable ETL pipelines for the Operations Monitoring System (OMS), enabling seamless data ingestion from raw to transformed states.",
        "Built an automated FE compliance portal for AWS account shutdown exceptions, allowing administrators to register critical accounts before deadlines."
      ],
      current: true
    },
    {
      title: "Software Engineer Intern",
      company: "HERE Technologies",
      location: "Mumbai, India",
      period: "Jan 2025 - Jun 2025",
      description: [
        "Developed Slim Test Gen Pro, an AI-driven test case generator using LLaMA 3.1 with Apache Spark pipelines and full-stack deployment on AWS EC2.",
        "Optimized backend performance by 60% through Singleton-based database and Bedrock client connections.",
        "Integrated an MCP server to automate Jira operations such as ticket commenting and state transitions."
      ]
    },
    {
      title: "Freelancer",
      company: "Anatech Global Consultancy",
      location: "Rourkela, India",
      period: "May 2024 - Sep 2024",
      description: [
        "Delivered responsive websites to over 10 clients, optimizing user experience across diverse devices and screen sizes.",
        "Implemented 3 Machine Learning models to address specific client needs, enhancing data-driven decision-making.",
        "Built 2 Deep Learning models tailored to client requirements, contributing to advanced analytical capabilities.",
        "Implemented a robust tech stack, streamlining build time by 40%, boosting scalability by 50%, and accelerating time-to-market by 35%."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="text-5xl font-bold text-center text-white mb-16 transform hover:scale-105 transition-transform duration-300">
          Professional Experience
        </h2>

        <div className="relative">
          {/* Animated timeline */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative md:ml-20 group perspective-1000">
                {/* Timeline dot with pulse animation */}
                <div className="absolute -left-[4.5rem] top-6 hidden md:block">
                  <div className="relative">
                    <div className="w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-900 relative z-10 transform group-hover:scale-150 transition-all duration-300"></div>
                    <div className="absolute inset-0 w-4 h-4 rounded-full bg-blue-500 animate-ping"></div>
                  </div>
                </div>

                {/* Experience card with 3D effect */}
                <div className="relative bg-slate-800 p-8 rounded-xl shadow-xl border border-slate-700 transform transition-all duration-500 hover:scale-105 hover:-translate-y-4 hover:rotate-x-2 hover:shadow-2xl hover:shadow-blue-500/30" 
                     style={{transformStyle: 'preserve-3d'}}>
                  
                  {/* Gradient glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-purple-600/20 to-pink-600/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Floating effect border */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    <div className="flex flex-wrap justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2 transform transition-all duration-300 group-hover:scale-110 group-hover:text-blue-400">
                          {exp.title}
                          {exp.current && (
                            <span className="ml-3 px-3 py-1 bg-green-600 text-white text-xs rounded-full animate-pulse">
                              Current
                            </span>
                          )}
                        </h3>
                        <p className="text-xl text-blue-400 font-semibold transform transition-all duration-300 group-hover:text-purple-400">{exp.company}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-400">{exp.period}</p>
                        <p className="text-gray-500 text-sm">{exp.location}</p>
                      </div>
                    </div>

                    <ul className="space-y-3 mt-6">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="text-gray-300 flex items-start transform transition-all duration-300 hover:translate-x-2 hover:text-white">
                          <span className="text-blue-400 mr-3 mt-1 flex-shrink-0 transform transition-all duration-300 group-hover:scale-125">▹</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-b-xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;