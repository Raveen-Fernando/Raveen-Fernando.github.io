import React from 'react';
import { ProjectSlideshow, ProjectImage } from './ProjectSlideshow';

interface Interest {
    title: string;
    description: string;
    images: ProjectImage[];
}

/**
 * The original personalInterests array stays the same.
 */
const personalInterests: Interest[] = [
    {
        title: 'Music',
        description: 'Exploring various instruments, genres, and live performances.',
        images: [
            {
                url: '/assets/placeholder.png',
                title: 'Practicing Guitar',
                description: 'Daily routines and chord progressions',
            },
            {
                url: '/assets/placeholder.png',
                title: 'Live Concert',
                description: 'Capturing the energy of a local rock show',
            },
            {
                url: '/assets/placeholder.png',
                title: 'Composing',
                description: 'Experimenting with melodies in a home studio',
            },
            {
                url: '/assets/placeholder.png',
                title: 'Vinyl Collection',
                description: 'A curated collection of classic records',
            },
        ],
    },
    {
        title: 'Combat Sports',
        description: 'Passionate about martial arts and the discipline it instills.',
        images: [
            {
                url: '/assets/Combat Sports/1.JPG',
                title: 'Training Sessions',
                description: 'Daily workouts focusing on technique',
            },
            {
                url: '/assets/placeholder.png',
                title: 'Sparring Practice',
                description: 'Controlled practice fights',
            },
            {
                url: '/assets/placeholder.png',
                title: 'Tournaments',
                description: 'Competitive events and championships',
            },
            {
                url: '/assets/placeholder.png',
                title: 'Strength & Conditioning',
                description: 'Building endurance and core strength',
            },
        ],
    },
    {
        title: 'Cooking',
        description: 'Experimenting in the kitchen to create new and exciting dishes.',
        images: [
            {
                url: '/assets/placeholder.png',
                title: 'Prep Work',
                description: 'Chopping fresh ingredients',
            },
            {
                url: '/assets/placeholder.png',
                title: 'Plating',
                description: 'Aesthetic arrangement of dishes',
            },
            {
                url: '/assets/placeholder.png',
                title: 'International Cuisine',
                description: 'Recipes from around the world',
            },
            {
                url: '/assets/placeholder.png',
                title: 'Dessert',
                description: 'Sweet delights with artistic flair',
            },
        ],
    },
];

/**
 * Slideshows specifically for Music’s new subsections:
 * "Solo performances" and "My band".
 */
const soloPerformancesImages: ProjectImage[] = [
    {
        url: '/assets/placeholder.png',
        title: 'Acoustic Session',
        description: 'Strumming unplugged at a local café',
    },
    {
        url: '/assets/placeholder.png',
        title: 'Open Mic',
        description: 'Performing original songs live',
    },
    {
        url: '/assets/placeholder.png',
        title: 'Small Crowd',
        description: 'An intimate audience in Morgantown',
    },
    {
        url: '/assets/placeholder.png',
        title: 'Street Performance',
        description: 'Busking for passersby',
    },
];

const myBandImages: ProjectImage[] = [
    {
        url: '/assets/placeholder.png',
        title: 'Band Practice',
        description: 'Rehearsing new tracks',
    },
    {
        url: '/assets/placeholder.png',
        title: 'Live Show',
        description: 'Headlining a local festival',
    },
    {
        url: '/assets/placeholder.png',
        title: 'Recording Studio',
        description: 'Laying down vocals and instrumentals',
    },
    {
        url: '/assets/placeholder.png',
        title: 'Stage Presence',
        description: 'Engaging with the crowd',
    },
];

export const PersonalInterestsSection: React.FC = () => {
    return (
        <section id="personal-interests" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className="animate-fadeIn opacity-0"
                    style={{ animationDelay: '0.2s' }}
                >
                    <h2 className="text-4xl font-bold text-primary mb-16 text-center tracking-tight">
                        Personal Interests
                    </h2>
                </div>

                <div className="space-y-20">
                    {personalInterests.map((interest, idx) => {
                        // If this is the "Music" interest, show only the specified subsections
                        if (interest.title === 'Music') {
                            return (
                                <div
                                    key={idx}
                                    className="animate-fadeIn opacity-0"
                                    style={{ animationDelay: `${0.2 * (idx + 2)}s` }}
                                >
                                    {/* MAIN HEADING FOR MUSIC */}
                                    <h3 className="text-2xl font-bold text-center mb-8">Music</h3>

                                    {/* SOLO PERFORMANCES */}
                                    <div className="mt-12">
                                        <h4 className="text-xl font-semibold mb-2 text-center">
                                            Solo performances
                                        </h4>
                                        <p className="text-gray-600 max-w-2xl mx-auto text-center mb-6">
                                            I do gigs around the Morgantown area
                                        </p>
                                        <ProjectSlideshow images={soloPerformancesImages} />
                                    </div>

                                    {/* MY BAND */}
                                    <div className="mt-16">
                                        <h4 className="text-xl font-semibold mb-2 text-center">
                                            My band
                                        </h4>
                                        <p className="text-gray-600 max-w-2xl mx-auto text-center mb-6">
                                            I founded and lead{' '}
                                            <a
                                                href="https://instagram.com/your_band_page"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 underline"
                                            >
                                                The Showerheads
                                            </a>{' '}
                                            with my friends.
                                        </p>
                                        <ProjectSlideshow images={myBandImages} />
                                    </div>

                                    {/* MY PLAYLISTS (3 EMBEDS) */}
                                    <div className="mt-16">
                                        <h4 className="text-xl font-semibold mb-4 text-center">
                                            My playlists
                                        </h4>
                                        <div className="flex flex-wrap justify-center gap-4">
                                            {/* 1st Playlist */}
                                            <iframe
                                                src="https://open.spotify.com/embed/playlist/37i9dQZF1EpxsxasLkDTkk?utm_source=generator"
                                                width="320"
                                                height="380"
                                                frameBorder="0"
                                                allow="encrypted-media"
                                                className="rounded-md"
                                            />
                                            {/* 2nd Playlist */}
                                            <iframe
                                                src="https://open.spotify.com/embed/playlist/6egRcaGlOn5HCuWGOCpoqJ?utm_source=generator"
                                                width="320"
                                                height="380"
                                                frameBorder="0"
                                                allow="encrypted-media"
                                                className="rounded-md"
                                            />
                                            {/* 3rd Playlist */}
                                            <iframe
                                                src="https://open.spotify.com/embed/playlist/26BfH6xkfCMwUgbPyL3ekg?utm_source=generator"
                                                width="320"
                                                height="380"
                                                frameBorder="0"
                                                allow="encrypted-media"
                                                className="rounded-md"
                                            />
                                        </div>
                                    </div>
                                </div>
                            );
                        }

                        // Otherwise, for Combat Sports and Cooking, leave them exactly as is
                        return (
                            <div
                                key={idx}
                                className="animate-fadeIn opacity-0"
                                style={{ animationDelay: `${0.2 * (idx + 2)}s` }}
                            >
                                <div className="text-center mb-4">
                                    <h3 className="text-2xl font-semibold mb-2">
                                        {interest.title}
                                    </h3>
                                    <p className="text-gray-600 max-w-2xl mx-auto">
                                        {interest.description}
                                    </p>
                                </div>
                                <ProjectSlideshow images={interest.images} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
