import { HashLink } from 'react-router-hash-link';
import TechStack from './TechStack';

const Hero = () => {
  return (
      <section id="home" className="min-h-screen flex flex-col items-center justify-center pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fadeIn opacity-0" style={{animationDelay: '0.2s'}}>
            <div className="w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden">
              <img
                  src="/headshot.jpeg"
                  alt="Raveen Fernando"
                  className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="animate-fadeIn opacity-0" style={{animationDelay: '0.4s'}}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4">
              Raveen Fernando
            </h1>
          </div>

          <div className="animate-fadeIn opacity-0" style={{animationDelay: '0.6s'}}>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8">
              Engineering Student | Aspiring Aerospace Innovator
            </p>
          </div>

          <div className="animate-fadeIn opacity-0" style={{animationDelay: '0.8s'}}>
            <p className="max-w-2xl mx-auto text-gray-600 mb-12">
              Dual major in Mechanical and Aerospace Engineering at West Virginia University.
              Passionate about innovation, design, and pushing the boundaries of what's possible.
            </p>
          </div>

          <div className="animate-fadeIn opacity-0" style={{animationDelay: '1.2s'}}>
            <TechStack/>
          </div>

          <div className="animate-fadeIn opacity-0" style={{animationDelay: '1s'}}>
            <HashLink
                to="#contact"
                className="inline-block bg-primary text-white px-8 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors mb-16"
            >
              Get in Touch
            </HashLink>
          </div>

        </div>
      </section>
  );
};

export default Hero;