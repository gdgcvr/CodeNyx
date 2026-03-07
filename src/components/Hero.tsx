import React from 'react';
import ColorBends from './ColorBends';

const Hero = () => {
    return (
        <section id="home" className="w-full h-screen relative bg-black overflow-hidden">
            {/* 
                We are isolating the ColorBends component here to ensure WebGL 
                initializes and renders correctly without any React/DOM interference.
            */}
            <ColorBends
                colors={["#FF4400", "#FFFFFF", "#333333"]}
                rotation={0}
                speed={0.15}
                scale={2.5}
                frequency={0.8}
                warpStrength={1.5}
                mouseInfluence={1.2}
                parallax={0.5}
                noise={0.1}
                transparent={false} // Set to false temporarily so we can see the canvas bounds easily
                autoRotate={0.05}
                className="w-full h-full"
            />
        </section>
    );
};

export default Hero;
