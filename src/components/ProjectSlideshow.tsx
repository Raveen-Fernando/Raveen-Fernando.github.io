import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css'; // Make sure Keen Slider's CSS is imported

export interface ProjectImage {
    url: string;
    title: string;
    description: string;
}

interface ProjectSlideshowProps {
    images: ProjectImage[];
}

export const ProjectSlideshow: React.FC<ProjectSlideshowProps> = ({ images }) => {
    const [sliderRef] = useKeenSlider(
        {
            loop: true,
            slides: {
                perView: 4,
                spacing: 16,
            },
            dragSpeed: 1.5,
            renderMode: 'performance',
            defaultAnimation: {
                duration: 2000,
            },
        },
        [
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

                slider.on('created', () => {
                    nextTimeout();
                });
                slider.on('dragStarted', clearNextTimeout);
                slider.on('animationEnded', nextTimeout);
                slider.on('updated', nextTimeout);

                return () => {
                    clearNextTimeout();
                };
            },
        ]
    );

    return (
        <div className="relative mt-6">
            <div ref={sliderRef} className="keen-slider h-[240px]">
                {[...images, ...images].map((image, idx) => (
                    <div
                        key={idx}
                        className="keen-slider__slide relative group overflow-hidden rounded-lg"
                    >
                        <img
                            src={image.url}
                            alt={image.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                            <h4 className="text-white font-semibold text-sm mb-2">
                                {image.title}
                            </h4>
                            <p className="text-white/90 text-xs text-center">
                                {image.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
