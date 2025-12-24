import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "LocalLM",
      period: "Feb 2025 - Mar 2025",
      tech: ["Python", "FastAPI", "Langchain", "ReactJS"],
      description: [
        "Built a full-stack Local LLM chatbot using React.js (frontend) and FastAPI (backend), enabling real-time conversational AI with complete on-premise inference via Ollama.",
        "Deployed backend on AWS EC2 and frontend on Vercel, implementing secure user-specific chat history and dynamic model selection.",
        "Automated Ollama runtime control from the frontend using subprocess commands, ensuring seamless model availability.",
        "Achieved 100% data privacy by running all LLM inference locally, eliminating cloud dependencies."
      ],
      github: "https://github.com/biswajeet0192/locallm",
      featured: true
    },
    {
      title: "Real-Time YouTube Analytics",
      period: "Mar 2024 - Apr 2024",
      tech: ["Python", "Kafka", "ksqlDB", "Telegram API", "Docker", "Confluent Platform"],
      description: [
        "Built a real-time data processing pipeline using Python, Kafka, and ksqlDB to analyze YouTube metrics such as views, likes, and comments.",
        "Developed and integrated a Telegram bot to deliver real-time notifications based on processed analytics data.",
        "Deployed and managed Kafka services using Docker and the Confluent Platform, ensuring efficient data streaming and fault tolerance."
      ],
      github: "https://github.com/biswajeet0192/YoutubeAnalytics",
      featured: true
    },
    {
      title: "Face Mask Detection Model",
      period: "2023",
      tech: ["Python", "OpenCV", "Keras", "MobileNetV2"],
      description: [
        "Developed a real-time face mask detection system using OpenCV, MobileNetV2, and Keras, achieving accurate mask prediction with live video input.",
        "Implemented face detection and mask prediction by processing video frames and applying a pre-trained deep learning model.",
        "Optimized real-time video processing to detect and label mask compliance, utilizing OpenCV for efficient image handling."
      ],
      github: "https://github.com/biswajeet0192/face-mask-detection-model",
      // featured: true
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-800 relative overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-5xl font-bold text-center text-white mb-16 transform hover:scale-105 transition-transform duration-300">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`group perspective-1000 ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className="relative bg-slate-900 rounded-xl shadow-xl border border-slate-700 overflow-hidden transform transition-all duration-500 hover:scale-105 hover:-translate-y-4 hover:rotate-x-3 hover:shadow-2xl hover:shadow-purple-500/30"
                   style={{transformStyle: 'preserve-3d'}}>
                
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-purple-600/20 to-pink-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Floating glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-500"></div>

                <div className="p-8 relative z-10">
                  <div className="flex justify-between items-center mb-4">
                    {/* Title on the left */}
                    <h3 className="text-2xl font-bold text-white transform transition-all duration-300 group-hover:scale-110 group-hover:text-blue-400">
                      {project.title}
                    </h3>

                    {/* Icons grouped together on the right */}
                    <div className="flex gap-4">
                      {project.link && (
                        <a 
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-125 hover:rotate-12"
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5L21 3m0 0h-6m6 0v6M21 14.25v3.75A2.25 2.25 0 0118.75 21H5.25A2.25 2.25 0 013 18.75V5.25A2.25 2.25 0 015.25 3H9" />
                          </svg>
                        </a>
                      )}

                      {project.github && (
                        <a 
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-125 hover:rotate-12"
                        >
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm mb-4">{project.period}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-1 bg-blue-900 text-blue-200 rounded-full text-xs font-medium transform transition-all duration-300 hover:scale-125 hover:bg-blue-800 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-3">
                    {project.description.map((item, idx) => (
                      <li key={idx} className="text-gray-300 text-sm flex items-start transform transition-all duration-300 hover:translate-x-2 hover:text-white">
                        <span className="text-blue-400 mr-2 mt-1 flex-shrink-0 transform transition-all duration-300 group-hover:scale-125">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom accent line with animated gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;