import React from "react";
import { Card } from "./ui/card";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useIsMobile } from "../hooks/use-mobile";

interface ProjectImage {
  url: string;
  title: string;
  description: string;
}

interface Project {
  title: string;
  description: string;
  images: ProjectImage[];
}

const projects: Project[] = [
  {
    title: "Glider Project",
    description: "Designed and constructed a functional glider model...",
    images: [
      {
        url: "/assets/Glider/1.jpg",
        title: "Design Phase",
        description: "Initial CAD modeling and simulations",
      },
      {
        url: "/assets/Glider/2.HEIC",
        title: "Construction",
        description: "Assembly of primary components",
      },
      {
        url: "/assets/Glider/3.JPG",
        title: "Testing",
        description: "Wind tunnel validation",
      },
      {
        url: "/assets/Glider/4.JPG",
        title: "Final Product",
        description: "Completed glider ready for flight",
      },
    ],
  },
  {
    title: "CNC Routing Machine",
    description: "Built a custom CNC routing machine from scratch...",
    images: [
      {
        url: "/assets/CNC Router/1.jpg",
        title: "Framework",
        description: "Base structure assembly",
      },
      {
        url: "/assets/CNC Router/2.jpg",
        title: "Electronics",
        description: "Control system integration",
      },
      {
        url: "/assets/CNC Router/3.jpg",
        title: "Software",
        description: "Custom firmware implementation",
      },
      {
        url: "/assets/CNC Router/4.jpg",
        title: "Operation",
        description: "Machine in action",
      },
    ],
  },
  {
    title: "Mountaineer Shield",
    description: "Led the development of innovative protective equipment...",
    images: [
      {
        url: "/assets/placeholder.png",
        title: "Prototyping",
        description: "Initial design iterations",
      },
      {
        url: "/assets/placeholder.png",
        title: "Testing",
        description: "Field trials in various conditions",
      },
      {
        url: "/assets/placeholder.png",
        title: "Refinement",
        description: "Design optimizations",
      },
      {
        url: "/assets/placeholder.png",
        title: "Production",
        description: "Final manufacturing process",
      },
    ],
  }
];

const ProjectSlider = ({ images }: { images: ProjectImage[] }) => {
  const isMobile = useIsMobile();
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "snap",
    slides: {
      perView: isMobile ? 1 : 4,
      spacing: 16
    },
    defaultAnimation: {
      duration: 2000,
    },
  }, [
    (slider) => {
      let timeout: ReturnType<typeof setTimeout>;
      let mouseOver = false;

      function clearNextTimeout() {
        clearTimeout(timeout);
      }

      function nextTimeout() {
        clearTimeout(timeout);
        if (mouseOver) return;
        timeout = setTimeout(() => {
          slider.next();
        }, 3000);
      }

      slider.on("created", () => {
        nextTimeout();
      });

      slider.container.addEventListener("mouseover", () => {
        mouseOver = true;
        clearNextTimeout();
      });

      slider.container.addEventListener("mouseout", () => {
        mouseOver = false;
        nextTimeout();
      });

      slider.on("dragStarted", clearNextTimeout);
      slider.on("animationEnded", nextTimeout);
      slider.on("updated", nextTimeout);
    },
  ]);

  return (
      <div ref={sliderRef} className="keen-slider">
        {images.map((image, idx) => (
            <div key={idx} className="keen-slider__slide flex items-center justify-center">
              <div className="relative w-64 h-64">
                <img
                    src={image.url}
                    alt={image.title}
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-x-0 bottom-0 bg-black/60 p-4 text-center rounded-b-lg">
                  <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                </div>
              </div>
            </div>
        ))}
      </div>
  );
};

const Projects = () => {
  return (
      <section id="projects" className="py-20 bg-gradient-to-b from-gradient-end to-gradient-start">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Projects
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A showcase of my engineering and creative projects
            </p>
          </div>

          <div className="space-y-16">
            {projects.map((project, idx) => (
                <Card key={idx} className="p-6">
                  <h3 className="text-2xl font-semibold mb-2 text-center">{project.title}</h3>
                  <p className="text-gray-600 text-center mb-6">{project.description}</p>
                  <ProjectSlider images={project.images} />
                </Card>
            ))}
          </div>
        </div>
      </section>
  );
};

export default Projects;