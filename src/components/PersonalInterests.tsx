import React, { useState, useEffect } from "react";
import { Card } from "./ui/card";
import { Music, UtensilsCrossed, Dumbbell, ChevronRight, ChevronLeft } from "lucide-react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useIsMobile } from "../hooks/use-mobile";
import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";

interface Interest {
    title: string;
    description: string;
    icon: React.ReactNode;
    images?: string[];
    subSections?: {
        title: string;
        description: string;
        images: string[];
    }[];
    playlists?: string[];
}

const interests: Interest[] = [
    {
        title: "Music",
        description: "",
        icon: <Music className="h-6 w-6 text-primary" />,
        subSections: [
            {
                title: "Solo Performances",
                description: "I gig at local Morgantown places",
                images: [
                    "assets/Music/2.jpg",
                    "assets/Music/4.jpg"
                ]
            },
            {
                title: "My Band",
                description: "Lead guitarist of The Showerheads",
                images: [
                    "assets/Music/3.jpg",

                ]
            }
        ],
        playlists: [
            "https://open.spotify.com/embed/playlist/6egRcaGlOn5HCuWGOCpoqJ?utm_source=generator",
            "https://open.spotify.com/embed/playlist/62rZRBpbvPdhePDazgzgOL?utm_source=generator"
        ]
    },
    {
        title: "Combat Sports",
        description: "Passionate about martial arts and the discipline it instills.",
        icon: <Dumbbell className="h-6 w-6 text-primary" />,
        images: [
            "/assets/Combat Sports/1.JPG",
            "/assets/Combat Sports/2.jpg"
        ]
    },
    {
        title: "Cooking",
        description: "Experimenting in the kitchen to create new and exciting dishes.",
        icon: <UtensilsCrossed className="h-6 w-6 text-primary" />,
        images: [
            "/assets/Cooking/1.jpg",
            "/assets/Cooking/2.jpg"
        ]
    }
];

const preloadImage = (src: string): Promise<void> => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = reject;
        img.src = src;
    });
};

const InterestImages = ({ images }: { images: string[] }) => {
    const isMobile = useIsMobile();
    const [imagesLoaded, setImagesLoaded] = useState(false);

    useEffect(() => {
        const loadImages = async () => {
            try {
                await Promise.all(images.map(src => preloadImage(src)));
                console.log('All images preloaded successfully');
                setImagesLoaded(true);
            } catch (error) {
                console.error('Error preloading images:', error);
                // Still set as loaded to show images even if preload fails
                setImagesLoaded(true);
            }
        };

        loadImages();
    }, [images]);

    const [sliderRef] = useKeenSlider(
        {
            loop: true,
            mode: "snap",
            slides: {
                perView: isMobile ? 1 : images.length,
                spacing: 16
            },
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
        ]
    );

    const renderImage = (image: string, idx: number) => (
        <div key={idx} className="relative w-64 h-64">
            {!imagesLoaded ? (
                <Skeleton className="w-full h-full rounded-lg" />
            ) : (
                <img
                    src={image}
                    alt={`Interest image ${idx + 1}`}
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                    loading="eager"
                />
            )}
        </div>
    );

    if (!isMobile) {
        return (
            <div className="flex justify-center gap-2">
                {images.map((image, idx) => renderImage(image, idx))}
            </div>
        );
    }

    return (
        <div ref={sliderRef} className="keen-slider">
            {images.map((image, idx) => (
                <div key={idx} className="keen-slider__slide flex items-center justify-center">
                    {renderImage(image, idx)}
                </div>
            ))}
        </div>
    );
};

const PlaylistNavigator = ({ playlists }: { playlists: string[] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const isMobile = useIsMobile();

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % playlists.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + playlists.length) % playlists.length);
    };

    if (!isMobile) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {playlists.map((playlist, index) => (
                    <iframe
                        key={index}
                        src={playlist}
                        width="100%"
                        height="352"
                        frameBorder="0"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                    />
                ))}
            </div>
        );
    }

    return (
        <div className="space-y-4">
            <div className="flex justify-center gap-2">
                <Button
                    variant="outline"
                    onClick={handlePrev}
                    disabled={playlists.length <= 1}
                >
                    <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                    variant="outline"
                    onClick={handleNext}
                    disabled={playlists.length <= 1}
                >
                    <ChevronRight className="h-4 w-4" />
                </Button>
            </div>
            <iframe
                key={currentIndex}
                src={playlists[currentIndex]}
                width="100%"
                height="352"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            />
        </div>
    );
};

const PersonalInterests = () => {
    return (
        <section id="interests" className="py-20 bg-section-gradient">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-primary mb-4">
                        Personal Interests
                    </h2>
                </div>

                <div className="space-y-8">
                    {interests.map((interest, idx) => (
                        <Card key={idx} className="p-6">
                            <div className="space-y-6">
                                <div className="text-center">
                                    <div className="flex items-center justify-center gap-3 mb-2">
                                        {interest.icon}
                                        <h3 className="text-2xl font-semibold">{interest.title}</h3>
                                    </div>
                                    <p className="text-gray-600 mb-6">{interest.description}</p>
                                </div>

                                {interest.subSections ? (
                                    <div className="space-y-8">
                                        {interest.subSections.map((subSection, subIdx) => (
                                            <div key={subIdx} className="space-y-4">
                                                <h4 className="text-xl font-semibold text-center">{subSection.title}</h4>
                                                <p className="text-gray-600 text-center mb-4">{subSection.description}</p>
                                                <InterestImages images={subSection.images} />
                                            </div>
                                        ))}
                                        {interest.playlists && (
                                            <div className="space-y-4">
                                                <h4 className="text-xl font-semibold text-center">My Playlists</h4>
                                                <PlaylistNavigator playlists={interest.playlists} />
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    interest.images && <InterestImages images={interest.images} />
                                )}
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PersonalInterests;