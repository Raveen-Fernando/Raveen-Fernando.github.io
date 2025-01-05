import { GraduationCap, MapPin, User } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fadeIn opacity-0" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">About Me</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-fadeIn opacity-0" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-start gap-4 mb-6">
              <User className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Who I Am</h3>
                <p className="text-gray-600">
                  I am a dedicated engineering student with a passion for innovation and problem-solving. 
                  My journey in engineering began with a curiosity about how things work, which has evolved 
                  into a deep commitment to advancing aerospace and mechanical technologies.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 mb-6">
              <GraduationCap className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Academic Excellence</h3>
                <p className="text-gray-600">
                  Currently maintaining a 4.0 GPA while pursuing a dual major in Mechanical and Aerospace 
                  Engineering at West Virginia University. My academic journey reflects my dedication to 
                  mastering both theoretical knowledge and practical applications in engineering.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">My Roots</h3>
                <p className="text-gray-600">
                  Originally from Negombo, Sri Lanka, I bring a unique global perspective to my work. 
                  This international background has shaped my approach to problem-solving and collaboration 
                  in engineering projects.
                </p>
              </div>
            </div>
          </div>
          
          <div className="animate-fadeIn opacity-0" style={{ animationDelay: '0.6s' }}>
            <img 
              src="/placeholder.svg"
              alt="Raveen working on an engineering project"
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;