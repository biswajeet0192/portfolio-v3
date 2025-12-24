import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

const Hero = () => {
  const canvasRef = useRef(null);
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Enhanced particles with colors
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 3000;
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 12;
      positions[i + 1] = (Math.random() - 0.5) * 12;
      positions[i + 2] = (Math.random() - 0.5) * 12;
      
      // Blue to purple gradient colors
      colors[i] = 0.2 + Math.random() * 0.3;
      colors[i + 1] = 0.5 + Math.random() * 0.5;
      colors[i + 2] = 0.9 + Math.random() * 0.1;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.03,
      transparent: true,
      opacity: 0.8,
      vertexColors: true,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    camera.position.z = 4;

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);
      
      particles.rotation.y += 0.0008;
      particles.rotation.x += 0.0003;
      
      // Interactive camera movement
      camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 0.5 - camera.position.y) * 0.05;
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

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImageUrl(url);
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Profile Photo Container with 3D effect */}
        <div className="mb-8 flex justify-center perspective-1000">
          <div className="relative group">
            {/* Animated gradient border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            
            {/* Photo container with 3D transform */}
            {/* <div className="relative transform transition-all duration-500 group-hover:rotate-y-12 group-hover:rotate-x-12" style={{transformStyle: 'preserve-3d'}}>
              {imageUrl ? (
                <img 
                  src={imageUrl} 
                  alt="Biswajeet Behera" 
                  className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-slate-800 shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
                  style={{objectPosition: 'center'}}
                />
              ) : (
                <label className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center cursor-pointer border-4 border-slate-800 shadow-2xl transform group-hover:scale-105 transition-transform duration-300">
                  <div className="text-center text-white">
                    <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    <p className="text-sm">Upload Photo</p>
                    <p className="text-xs mt-1 opacity-75">(3000x3000)</p>
                  </div>
                  <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                </label>
              )}
            </div> */}
            
            {/* Floating ring effect */}
            <div className="absolute inset-0 rounded-full border-2 border-blue-400 opacity-0 group-hover:opacity-50 animate-ping"></div>
          </div>
        </div>

        <div className="mb-6 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight transform transition-all duration-300 hover:scale-105">
            Biswajeet Behera
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-6 animate-pulse"></div>
        </div>
        
        <p className="text-xl md:text-2xl text-blue-200 mb-4 font-light transform transition-all duration-300 hover:scale-105">
          Software Engineer II @ HERE Technologies
        </p>
        
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto transform transition-all duration-300 hover:scale-105">
          Building AI-driven solutions, scalable data pipelines, and intelligent systems that transform complex problems into elegant software.
        </p>
        
        <div className="flex gap-4 justify-center flex-wrap mb-8">
          <a href="https://github.com/biswajeet0192" target="_blank" rel="noopener noreferrer" 
             className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all transform hover:scale-110 hover:-translate-y-2 shadow-lg hover:shadow-blue-500/50 duration-300">
            GitHub
          </a>
          <a href="https://linkedin.com/in/biswajeet-behera/" target="_blank" rel="noopener noreferrer"
             className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-all transform hover:scale-110 hover:-translate-y-2 shadow-lg hover:shadow-slate-500/50 duration-300">
            LinkedIn
          </a>
          <a href="mailto:biswajeet092003@gmail.com"
             className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-all transform hover:scale-110 hover:-translate-y-2 shadow-lg hover:shadow-slate-500/50 duration-300">
            Contact
          </a>
        </div>
        
        <div className="flex gap-6 justify-center text-gray-400 text-sm flex-wrap">
          <span className="transform transition-all duration-300 hover:scale-110 hover:text-blue-400">📧 biswajeet092003@gmail.com</span>
          <span className="transform transition-all duration-300 hover:scale-110 hover:text-blue-400">📱 +91-7655042927</span>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;