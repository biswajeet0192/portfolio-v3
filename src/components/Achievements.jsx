import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Achievements = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Create 3D stars
    const createStar = (size) => {
      const shape = new THREE.Shape();
      const outerRadius = size;
      const innerRadius = size * 0.4;
      const points = 5;

      for (let i = 0; i < points * 2; i++) {
        const angle = (i / (points * 2)) * Math.PI * 2 - Math.PI / 2;
        const radius = i % 2 === 0 ? outerRadius : innerRadius;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        if (i === 0) {
          shape.moveTo(x, y);
        } else {
          shape.lineTo(x, y);
        }
      }
      shape.closePath();

      const extrudeSettings = {
        depth: 0.2,
        bevelEnabled: true,
        bevelThickness: 0.05,
        bevelSize: 0.05,
        bevelSegments: 2
      };

      return new THREE.ExtrudeGeometry(shape, extrudeSettings);
    };

    const stars = [];
    const starPositions = [
      { pos: [-4, 3, -2], size: 0.5, color: 0xffd700 },
      { pos: [0, 2, -1], size: 0.6, color: 0xffa500 },
      { pos: [4, 3, -2], size: 0.5, color: 0xff6347 },
      { pos: [-3, -1, 0], size: 0.4, color: 0x4fc3f7 },
      { pos: [3, -1, 0], size: 0.4, color: 0xba68c8 },
      { pos: [0, -3, -1], size: 0.5, color: 0xf06292 }
    ];

    starPositions.forEach((config, i) => {
      const geometry = createStar(config.size);
      const material = new THREE.MeshPhongMaterial({
        color: config.color,
        shininess: 100,
        emissive: config.color,
        emissiveIntensity: 0.2
      });

      const star = new THREE.Mesh(geometry, material);
      star.position.set(...config.pos);
      star.userData = {
        rotationSpeed: 0.01 + Math.random() * 0.01,
        floatSpeed: 0.005 + Math.random() * 0.005,
        floatOffset: Math.random() * Math.PI * 2
      };

      stars.push(star);
      scene.add(star);
    });

    // Add sparkle particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 800;
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 15;
      positions[i + 1] = (Math.random() - 0.5) * 15;
      positions[i + 2] = (Math.random() - 0.5) * 10;

      const color = new THREE.Color().setHSL(Math.random(), 1, 0.7);
      colors[i] = color.r;
      colors[i + 1] = color.g;
      colors[i + 2] = color.b;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05,
      transparent: true,
      opacity: 0.8,
      vertexColors: true,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xffd700, 2, 100);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xff6347, 2, 100);
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

      const time = Date.now() * 0.001;

      stars.forEach((star, index) => {
        star.rotation.z += star.userData.rotationSpeed;
        star.position.y += Math.sin(time + star.userData.floatOffset) * star.userData.floatSpeed;
      });

      particles.rotation.y += 0.0003;
      particles.rotation.x += 0.0002;

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

  const achievements = [
    {
      title: "Analytica: 2023",
      subtitle: "Winner",
      icon: "🏆",
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Flipkart GRiD 5.0",
      subtitle: "Semi-Finalist",
      icon: "🎯",
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "TVS Credit E.P.I.C 5.0",
      subtitle: "IT Finalist",
      icon: "⚡",
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Hackon with Amazon",
      subtitle: "Finalist",
      icon: "🚀",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-25" />
      
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-yellow-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="text-5xl font-bold text-center text-white mb-16 transform hover:scale-105 transition-transform duration-300">
          Achievements & Recognition
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="group perspective-1000"
            >
              <div className="relative bg-slate-800 rounded-xl p-6 border border-slate-700 overflow-hidden transform transition-all duration-500 hover:scale-110 hover:-translate-y-4 hover:shadow-2xl hover:shadow-purple-500/40"
                   style={{transformStyle: 'preserve-3d'}}>
                
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                <div className={`absolute -inset-0.5 bg-gradient-to-br ${achievement.color} rounded-xl opacity-0 group-hover:opacity-40 blur transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="text-5xl mb-4 transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-12">
                    {achievement.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 transform transition-all duration-300 group-hover:scale-110">
                    {achievement.title}
                  </h3>
                  
                  {achievement.subtitle && (
                    <p className="text-gray-400 text-sm transform transition-all duration-300 group-hover:text-gray-200">
                      {achievement.subtitle}
                    </p>
                  )}
                </div>

                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${achievement.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                  <div className={`absolute top-0 right-0 w-0 h-0 border-t-[3rem] border-r-[3rem] border-t-transparent group-hover:border-t-blue-500/30 transition-all duration-500`} 
                       style={{borderRightColor: 'transparent'}}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;