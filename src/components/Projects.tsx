import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  images: string[];
}

const projects: Project[] = [
  {
    title: "Glider Project",
    description: "Designed and constructed a functional glider model, implementing aerodynamic principles and lightweight materials for optimal performance.",
    images: [
      "https://images.unsplash.com/photo-1487887235947-a955ef187fcc",
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    ],
  },
  {
    title: "CNC Routing Machine",
    description: "Built a custom CNC routing machine from scratch, incorporating precision controls and automated toolpath generation.",
    images: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    ],
  },
  {
    title: "Mountaineer Shield",
    description: "Led the development of protective equipment, combining innovative design with practical functionality.",
    images: [
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    ],
  },
  {
    title: "Telecaster Guitar Build",
    description: "Handcrafted a custom Telecaster guitar, showcasing woodworking skills and attention to detail in musical instrument construction.",
    images: [
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    ],
  },
];

const ProjectSlider = ({ images }: { images: string[] }) => {
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 1,
      spacing: 16,
    },
  });

  return (
    <div className="relative">
      <div ref={sliderRef} className="keen-slider h-[300px] rounded-lg">
        {images.map((image, idx) => (
          <div key={idx} className="keen-slider__slide">
            <img
              src={image}
              alt={`Project image ${idx + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
      <Button
        variant="outline"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 hover:bg-white"
        onClick={() => instanceRef.current?.prev()}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 hover:bg-white"
        onClick={() => instanceRef.current?.next()}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fadeIn opacity-0" style={{ animationDelay: "0.2s" }}>
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">
            Projects
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="animate-fadeIn opacity-0"
              style={{ animationDelay: `${0.2 * (idx + 2)}s` }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ProjectSlider images={project.images} />
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;