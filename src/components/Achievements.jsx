import React from 'react';

const Achievements = () => {
  const achievements = [
    {
      title: "Analytica",
      subtitle: "Winner",
      icon: "🏆",
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Flipkart GRiD 5.0 - SDE",
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
      {/* Animated background elements */}
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
              <div className="relative bg-slate-800 rounded-xl p-6 border border-slate-700 overflow-hidden transform transition-all duration-500 hover:scale-110 hover:-translate-y-4 hover:rotate-y-12 hover:shadow-2xl hover:shadow-purple-500/40"
                   style={{transformStyle: 'preserve-3d'}}>
                
                {/* Animated gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                {/* Floating glow effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-br ${achievement.color} rounded-xl opacity-0 group-hover:opacity-40 blur transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  {/* Animated icon */}
                  <div className="text-5xl mb-4 transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-12">
                    {achievement.icon}
                  </div>
                  
                  {/* Title with 3D effect */}
                  <h3 className="text-xl font-bold text-white mb-2 transform transition-all duration-300 group-hover:scale-110 group-hover:translate-z-4">
                    {achievement.title}
                  </h3>
                  
                  {achievement.subtitle && (
                    <p className="text-gray-400 text-sm transform transition-all duration-300 group-hover:text-gray-200">
                      {achievement.subtitle}
                    </p>
                  )}
                </div>

                {/* Bottom accent line with gradient */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${achievement.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                
                {/* Corner decoration */}
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