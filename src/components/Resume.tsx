import { Download, BookOpen, Award, Briefcase } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const Resume = () => {
  const handleDownload = () => {
    // TODO: Replace with actual resume PDF URL
    const pdfUrl = "/placeholder.svg";
    window.open(pdfUrl, "_blank");
    console.log("Resume download initiated");
  };

  return (
    <section id="resume" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fadeIn opacity-0" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Resume</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-fadeIn opacity-0" style={{ animationDelay: '0.4s' }}>
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4 mb-4">
                    <BookOpen className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Education</h3>
                      <p className="text-gray-600">
                        West Virginia University
                        <br />
                        Dual Major: Mechanical & Aerospace Engineering
                        <br />
                        GPA: 4.0
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4 mb-4">
                    <Briefcase className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Experience</h3>
                      <ul className="text-gray-600 list-disc list-inside">
                        <li>WVU Research Assistant</li>
                        <li>Machine Shop Worker</li>
                        <li>Carpentry Apprentice (Sri Lanka)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4 mb-4">
                    <Award className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Achievements</h3>
                      <ul className="text-gray-600 list-disc list-inside">
                        <li>President's List</li>
                        <li>Edexcel Outstanding Achievers Award</li>
                        <li>97% Tuition Coverage Scholarship</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="animate-fadeIn opacity-0" style={{ animationDelay: '0.6s' }}>
            <div className="sticky top-24">
              <div className="bg-gray-50 rounded-lg p-8 mb-6">
                <img 
                  src="/placeholder.svg"
                  alt="Resume Preview"
                  className="w-full h-[400px] object-cover rounded shadow-lg mb-6"
                />
                <Button 
                  onClick={handleDownload}
                  className="w-full"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;