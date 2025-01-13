import { HashLink } from 'react-router-hash-link';

const Hero = () => {
  return (
      <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden bg-section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fadeIn opacity-0" style={{ animationDelay: '0.2s' }}>
            <div className="w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden ring-4 ring-white/50 shadow-lg">
              <img
                  src="/headshot.jpeg"
                  alt="Raveen Fernando"
                  className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="animate-fadeIn opacity-0" style={{ animationDelay: '0.4s' }}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-slate-800">
              Raveen Fernando
            </h1>
          </div>

          <div className="animate-fadeIn opacity-0" style={{ animationDelay: '0.6s' }}>
            <p className="text-xl sm:text-2xl text-slate-600 mb-8">
              Engineering Student | Aspiring Aerospace Engineer
            </p>
          </div>

          <div className="animate-fadeIn opacity-0" style={{ animationDelay: '0.8s' }}>
            <p className="max-w-2xl mx-auto text-slate-500 mb-12">
              Dual major in Mechanical and Aerospace Engineering at West Virginia University.
              Passionate about innovation, design, and pushing the boundaries of what's possible.
            </p>
          </div>

          <div className="animate-fadeIn opacity-0" style={{ animationDelay: '1s' }}>
            <HashLink
                to="#contact"
                className="inline-block bg-slate-700 text-white px-8 py-3 rounded-md font-medium hover:bg-slate-800 transition-colors hover:shadow-lg hover:scale-105 transform duration-200"
            >
              Get in Touch
            </HashLink>
          </div>
        </div>
      </section>
  );
};

export default Hero;