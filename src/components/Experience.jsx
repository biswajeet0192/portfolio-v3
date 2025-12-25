import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Experience = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Create rotating gears (representing work/progress)
    const createGear = (radius, teeth, innerRadius) => {
      const shape = new THREE.Shape();
      const outerRadius = radius;
      
      for (let i = 0; i < teeth; i++) {
        const angle1 = (i / teeth) * Math.PI * 2;
        const angle2 = ((i + 0.5) / teeth) * Math.PI * 2;
        const angle3 = ((i + 1) / teeth) * Math.PI * 2;
        
        if (i === 0) {
          shape.moveTo(Math.cos(angle1) * outerRadius, Math.sin(angle1) * outerRadius);
        }
        
        shape.lineTo(Math.cos(angle1) * outerRadius, Math.sin(angle1) * outerRadius);
        shape.lineTo(Math.cos(angle1) * (outerRadius + 0.2), Math.sin(angle1) * (outerRadius + 0.2));
        shape.lineTo(Math.cos(angle2) * (outerRadius + 0.2), Math.sin(angle2) * (outerRadius + 0.2));
        shape.lineTo(Math.cos(angle3) * outerRadius, Math.sin(angle3) * outerRadius);
      }
      
      const hole = new THREE.Path();
      hole.absarc(0, 0, innerRadius, 0, Math.PI * 2, true);
      shape.holes.push(hole);
      
      const extrudeSettings = {
        depth: 0.3,
        bevelEnabled: true,
        bevelThickness: 0.05,
        bevelSize: 0.05,
        bevelSegments: 3
      };
      
      return new THREE.ExtrudeGeometry(shape, extrudeSettings);
    };

    const gears = [];
    const gearConfigs = [
      { radius: 1, teeth: 12, innerRadius: 0.3, x: -3, y: 2, z: -2, speed: 0.01, color: 0x4fc3f7 },
      { radius: 0.7, teeth: 10, innerRadius: 0.2, x: 0, y: -1, z: -1, speed: -0.015, color: 0xba68c8 },
      { radius: 1.2, teeth: 15, innerRadius: 0.4, x: 3, y: 1, z: -3, speed: 0.008, color: 0xf06292 },
      { radius: 0.5, teeth: 8, innerRadius: 0.15, x: -1, y: -2, z: 0, speed: -0.02, color: 0x64b5f6 }
    ];

    gearConfigs.forEach(config => {
      const geometry = createGear(config.radius, config.teeth, config.innerRadius);
      const material = new THREE.MeshPhongMaterial({
        color: config.color,
        shininess: 100,
        specular: 0x555555
      });
      
      const gear = new THREE.Mesh(geometry, material);
      gear.position.set(config.x, config.y, config.z);
      gear.userData.speed = config.speed;
      
      gears.push(gear);
      scene.add(gear);
    });

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x4fc3f7, 1.5, 100);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xba68c8, 1.5, 100);
    pointLight2.position.set(-5, -5, 5);
    scene.add(pointLight2);

    camera.position.z = 7;

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);
      
      gears.forEach(gear => {
        gear.rotation.z += gear.userData.speed;
      });

      camera.position.x += (mouseX * 1.5 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 1.5 - camera.position.y) * 0.05;
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
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-20" />
      
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="text-5xl font-bold text-center text-white mb-16 transform hover:scale-105 transition-transform duration-300">
          Professional Experience
        </h2>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative md:ml-20 group perspective-1000">
                <div className="absolute -left-[4.5rem] top-6 hidden md:block">
                  <div className="relative">
                    <div className="w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-900 relative z-10 transform group-hover:scale-150 transition-all duration-300"></div>
                    <div className="absolute inset-0 w-4 h-4 rounded-full bg-blue-500 animate-ping"></div>
                  </div>
                </div>

                <div className="relative bg-slate-800 p-8 rounded-xl shadow-xl border border-slate-700 transform transition-all duration-500 hover:scale-105 hover:-translate-y-4 hover:shadow-2xl hover:shadow-blue-500/30" 
                     style={{transformStyle: 'preserve-3d'}}>
                  
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-purple-600/20 to-pink-600/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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