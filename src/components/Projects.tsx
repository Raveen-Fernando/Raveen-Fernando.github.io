import React from 'react';
import { ProjectSlideshow, ProjectImage } from './ProjectSlideshow';

interface Project {
  title: string;
  description: string;
  images: ProjectImage[];
}

const projects: Project[] = [
  {
    title: 'Glider Project',
    description: 'Designed and constructed a functional glider model...',
    images: [
      {
        url: '/assets/Glider/1.jpg',
        title: 'Design Phase',
        description: 'Initial CAD modeling and simulations',
      },
      {
        url: '/assets/Glider/2.HEIC',
        title: 'Construction',
        description: 'Assembly of primary components',
      },
      {
        url: '/assets/Glider/3.JPG',
        title: 'Testing',
        description: 'Wind tunnel validation',
      },
      {
        url: '/assets/Glider/4.JPG',
        title: 'Final Product',
        description: 'Completed glider ready for flight',
      },
    ],
  },
  {
    title: 'CNC Routing Machine',
    description: 'Built a custom CNC routing machine from scratch...',
    images: [
      {
        url: '/assets/CNC Router/1.jpg',
        title: 'Framework',
        description: 'Base structure assembly',
      },
      {
        url: '/assets/CNC Router/2.jpg',
        title: 'Electronics',
        description: 'Control system integration',
      },
      {
        url: '/assets/CNC Router/3.jpg',
        title: 'Software',
        description: 'Custom firmware implementation',
      },
      {
        url: '/assets/CNC Router/4.jpg',
        title: 'Operation',
        description: 'Machine in action',
      },
    ],
  },
  {
    title: 'Mountaineer Shield',
    description: 'Led the development of innovative protective equipment...',
    images: [
      {
        url: '/assets/placeholder.png',
        title: 'Prototyping',
        description: 'Initial design iterations',
      },
      {
        url: '/assets/placeholder.png',
        title: 'Testing',
        description: 'Field trials in various conditions',
      },
      {
        url: '/assets/placeholder.png',
        title: 'Refinement',
        description: 'Design optimizations',
      },
      {
        url: '/assets/placeholder.png',
        title: 'Production',
        description: 'Final manufacturing process',
      },
    ],
  },
];

export const ProjectsSection: React.FC = () => {
  return (
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
              className="animate-fadeIn opacity-0"
              style={{ animationDelay: '0.2s' }}
          >
            <h2 className="text-4xl font-bold text-primary mb-16 text-center tracking-tight">
              Projects
            </h2>
          </div>

          <div className="space-y-20">
            {projects.map((project, idx) => (
                <div
                    key={idx}
                    className="animate-fadeIn opacity-0"
                    style={{ animationDelay: `${0.2 * (idx + 2)}s` }}
                >
                  <div className="text-center mb-4">
                    <h3 className="text-2xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                      {project.description}
                    </p>
                  </div>
                  <ProjectSlideshow images={project.images} />
                </div>
            ))}
          </div>
        </div>
      </section>
  );
};
