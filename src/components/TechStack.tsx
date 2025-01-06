import React from 'react';
import Fusion from '/assets/Logos/fusion.svg';
import Solidworks from '/assets/Logos/solidworks.svg';
import XFLR from '/assets/Logos/xflr.svg';
import Mach3 from '/assets/Logos/mach3.svg';
import Matlab from '/assets/Logos/matlab.svg';
import { SiAutocad } from 'react-icons/si';

const techLogos = [
    {
        id: 1,
        component: <SiAutocad className="w-2 h-2 md:w-16 md:h-16" />,
    },
    {
        id: 2,
        component: (
            <div className="w-9 h-9 md:w-36 md:h-36 aspect-square">
                <img
                    src={Fusion}
                    alt="Fusion 360"
                    className="w-full h-full object-contain"
                />
            </div>
        ),
    },
    {
        id: 3,
        component: (
            <div className="w-9 h-9 md:w-36 md:h-36 aspect-square">
                <img
                    src={Matlab}
                    alt="MATLAB"
                    className="w-full h-full object-contain"
                />
            </div>
        ),
    },
    {
        id: 4,
        component: (
            <div className="w-9 h-9 md:w-36 md:h-36 aspect-square">
                <img
                    src={Solidworks}
                    alt="Solidworks"
                    className="w-full h-full object-contain"
                />
            </div>
        ),
    },
    {
        id: 5,
        component: (
            <div className="w-9 h-9 md:w-36 md:h-36 aspect-square">
                <img
                    src={XFLR}
                    alt="XFLR5"
                    className="w-full h-full object-contain"
                />
            </div>
        ),
    },
    {
        id: 6,
        component: (
            <div className="w-9 h-9 md:w-24 md:h-24 aspect-square">
                <img
                    src={Mach3}
                    alt="Mach3"
                    className="w-full h-full object-contain"
                />
            </div>
        ),
    },
];

const TechStack = () => {
    return (
        <div className="w-full overflow-x-auto py-8">
            <div className="flex justify-center gap-10 md:gap-14 px-4 min-w-max">
                {techLogos.map((logo) => (
                    <div key={logo.id} className="flex items-center">
                        {logo.component}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechStack;
