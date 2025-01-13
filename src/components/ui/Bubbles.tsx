import React, { useEffect, useRef } from 'react';
import './style.scss'; // Make sure your bundler supports importing SCSS

const Bubbles: React.FC = () => {
    // We'll handle the "interactive bubble" positioning with a ref:
    const interactiveRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        let curX = 0;
        let curY = 0;
        let tgX = 0;
        let tgY = 0;

        function move() {
            // Smoothly interpolate toward target
            curX += (tgX - curX) / 20;
            curY += (tgY - curY) / 20;

            if (interactiveRef.current) {
                interactiveRef.current.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
            }

            requestAnimationFrame(move);
        }

        // Listen for mouse movement
        const onMouseMove = (e: MouseEvent) => {
            tgX = e.clientX;
            tgY = e.clientY;
        };

        window.addEventListener('mousemove', onMouseMove);
        move(); // start the animation loop

        // Cleanup on unmount
        return () => {
            window.removeEventListener('mousemove', onMouseMove);
        };
    }, []);

    return (
        <div className="gradient-bg">
            {/* The SVG filter for the goo effect */}
            <svg xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0
                      0 0 1 0 0  0 0 0 18 -8"
                            result="goo"
                        />
                        <feBlend in="SourceGraphic" in2="goo" />
                    </filter>
                </defs>
            </svg>

            <div className="gradients-container">
                <div className="g1"></div>
                <div className="g2"></div>
                <div className="g3"></div>
                <div className="g4"></div>
                <div className="g5"></div>
                {/* This is the mouse-following gradient */}
                <div className="interactive" ref={interactiveRef}></div>
            </div>
        </div>
    );
};

export default Bubbles;
