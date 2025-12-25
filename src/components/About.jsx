import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const About = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Create floating books (representing education and learning)
    const books = [];
    const bookGeometry = new THREE.BoxGeometry(0.3, 0.4, 0.05);
    
    for (let i = 0; i < 15; i++) {
      const bookMaterial = new THREE.MeshPhongMaterial({
        color: new THREE.Color().setHSL(Math.random(), 0.7, 0.5),
        shininess: 100
      });
      
      const book = new THREE.Mesh(bookGeometry, bookMaterial);
      book.position.set(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 5
      );
      book.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      
      book.userData = {
        rotationSpeedX: (Math.random() - 0.5) * 0.02,
        rotationSpeedY: (Math.random() - 0.5) * 0.02,
        floatSpeed: Math.random() * 0.01 + 0.005,
        initialY: book.position.y
      };
      
      books.push(book);
      scene.add(book);
    }

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Add point lights
    const pointLight1 = new THREE.PointLight(0x4fc3f7, 1, 100);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xba68c8, 1, 100);
    pointLight2.position.set(-5, -5, 5);
    scene.add(pointLight2);

    camera.position.z = 8;

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);
      
      // Animate books
      const time = Date.now() * 0.001;
      books.forEach((book, index) => {
        book.rotation.x += book.userData.rotationSpeedX;
        book.rotation.y += book.userData.rotationSpeedY;
        // Use sin wave for smooth floating instead of accumulating position
        const initialY = book.userData.initialY;
        book.position.y = initialY + Math.sin(time + index) * 0.5;
      });

      // Camera follows mouse
      camera.position.x += (mouseX * 2 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 2 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);
      
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      renderer.dispose();
    };
  }, []);

  const education = [
    {
      institution: "National Institute of Technology Rourkela",
      degree: "Bachelor of Technology",
      period: "Nov 2021 - Jun 2025",
      gpa: "7.32/10.0"
    },
    {
      institution: "SVM Higher Secondary School, Berhampur, Odisha",
      degree: "Intermediate",
      period: "Jul 2019 - Oct 2021",
      percentage: "95.5%"
    },
    {
      institution: "KSB Public School, Sarankul, Nayagarh, Odisha",
      degree: "Matriculation",
      period: "Apr 2018 - Mar 2019",
      percentage: "93%"
    }
  ];

  const skills = {
    "Programming": ["C++", "Python", "SQL"],
    "Databases": ["PostgreSQL", "MongoDB", "DynamoDB"],
    "Libraries": ["NumPy", "Pandas", "Matplotlib", "TensorFlow", "Langchain"],
    "Data Science & ML": ["NumPy", "Pandas", "Matplotlib", "Tensorflow"],
    "LLM & AI Systems": ["Ollama", "Hugging Face", "Langchain", "MCP Server"],
    "DevOps & Cloud": ["AWS", "Docker", "Podman", "GitHub Actions"],
    "Big Data & Streaming": ["Spark", "Airflow", "Kafka", "Hadoop"]
  };

  const coursework = {
    "Computer Science": ["Deep Learning", "Data Structures and Algorithms", "Database Management System", "System Design"],
    "Mathematics": ["Probability & Statistics", "Vector Algebra", "Linear Algebra"]
  };

  return (
    <section id="about" className="py-20 bg-slate-900 relative overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-30" />
      
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-5xl font-bold text-center text-white mb-16 transform hover:scale-105 transition-transform duration-300">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mb-16 items-stretch">
          <div className="group perspective-1000">
            <div className="relative bg-slate-800 p-8 rounded-xl shadow-xl border border-slate-700 transform transition-all duration-500 hover:scale-105 hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-500/30 h-full flex flex-col" style={{transformStyle: 'preserve-3d'}}>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/10 to-purple-600/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-3xl font-semibold text-blue-400 mb-8 transform transition-all duration-300 group-hover:scale-110">Education</h3>
                <div className="flex-1 flex flex-col justify-around gap-4">
                  {education.map((edu, index) => (
                    <div key={index} className="bg-slate-700/50 rounded-lg p-5 border-l-4 border-blue-500 transform transition-all duration-300 hover:translate-x-2 hover:border-purple-500 hover:bg-slate-700/70">
                      <h4 className="text-lg font-bold text-white mb-2">{edu.institution}</h4>
                      <p className="text-gray-300 font-medium mb-1">{edu.degree}</p>
                      <div className="flex justify-between items-center mt-3">
                        <p className="text-gray-400 text-sm">{edu.period}</p>
                        <p className="text-blue-400 font-semibold text-sm">
                          {edu.gpa ? `GPA: ${edu.gpa}` : `${edu.percentage}`}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="group perspective-1000">
            <div className="relative bg-slate-800 p-8 rounded-xl shadow-xl border border-slate-700 transform transition-all duration-500 hover:scale-105 hover:-translate-y-3 hover:shadow-2xl hover:shadow-purple-500/30 h-full flex flex-col" style={{transformStyle: 'preserve-3d'}}>
              <div className="absolute inset-0 bg-gradient-to-l from-purple-600/0 via-purple-600/10 to-blue-600/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-3xl font-semibold text-blue-400 mb-8 transform transition-all duration-300 group-hover:scale-110">Technical Skills</h3>
                <div className="space-y-4 flex-1">
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

        <div className="group perspective-1000">
          <div className="relative bg-slate-800 p-8 rounded-xl shadow-xl border border-slate-700 transform transition-all duration-500 hover:scale-105 hover:-translate-y-3 hover:shadow-2xl hover:shadow-pink-500/30" style={{transformStyle: 'preserve-3d'}}>
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