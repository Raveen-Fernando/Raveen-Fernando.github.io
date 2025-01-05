import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight, Dumbbell, Music, UtensilsCrossed } from "lucide-react";
import React from "react";

interface Interest {
  title: string;
  description: string;
  icon: React.ReactNode;
  images: string[];
}

const interests: Interest[] = [
  {
    title: "Boxing",
    description: "Passionate about the sweet science of boxing, training regularly to improve technique and fitness.",
    icon: <Dumbbell className="h-6 w-6 text-primary" />,
    images: [
      "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
      "https://images.unsplash.com/photo-1498936178812-4b2e558d2937",
    ],
  },
  {
    title: "Brazilian Jiu-Jitsu",
    description: "Dedicated practitioner of BJJ, focusing on technique and strategic thinking on the mats.",
    icon: <Dumbbell className="h-6 w-6 text-primary" />,
    images: [
      "https://images.unsplash.com/photo-1498936178812-4b2e558d2937",
      "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    ],
  },
  {
    title: "Music",
    description: "Enthusiastic about playing and creating music, particularly enjoying guitar and composition.",
    icon: <Music className="h-6 w-6 text-primary" />,
    images: [
      "https://images.unsplash.com/photo-1498936178812-4b2e558d2937",
      "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    ],
  },
  {
    title: "Cooking",
    description: "Love experimenting with different cuisines and creating delicious meals from scratch.",
    icon: <UtensilsCrossed className="h-6 w-6 text-primary" />,
    images: [
      "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
      "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    ],
  },
];

const InterestSlider = ({ images }: { images: string[] }) => {
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 1,
      spacing: 16,
    },
  });

  return (
    <div className="relative">
      <div ref={sliderRef} className="keen-slider h-[250px] rounded-lg">
        {images.map((image, idx) => (
          <div key={idx} className="keen-slider__slide">
            <img
              src={image}
              alt={`Interest image ${idx + 1}`}
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

const PersonalInterests = () => {
  return (
    <section id="interests" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fadeIn opacity-0" style={{ animationDelay: "0.2s" }}>
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">
            Personal Interests
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {interests.map((interest, idx) => (
            <div
              key={idx}
              className="animate-fadeIn opacity-0"
              style={{ animationDelay: `${0.2 * (idx + 2)}s` }}
            >
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    {interest.icon}
                    <CardTitle>{interest.title}</CardTitle>
                  </div>
                  <CardDescription>{interest.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <InterestSlider images={interest.images} />
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalInterests;
