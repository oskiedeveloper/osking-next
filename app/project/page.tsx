'use client';
import { useEffect } from 'react';
import { gsap } from 'gsap';

const Project = () => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            // GSAP animations here
            console.clear();
            gsap.registerPlugin(ScrollTrigger);
            gsap.to('#container', {
                "--target": "0%",
                ease: "none",
                scrollTrigger: {
                    trigger: "#container",
                }
            });
        }
    }, []);

    return(
        <div id="container">
            <h1>lorem ipsum dolor</h1>
        </div>
    );
};

export default Project;