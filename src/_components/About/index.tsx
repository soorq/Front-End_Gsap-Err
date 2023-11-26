'use client';
import gsap from 'gsap';
import React from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const AboutComponent: React.FC = () => {
    const parent = React.useRef<HTMLDivElement | null>(null);

    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: parent.current,
                markers: true,
                start: '50% 50%',
                end: '150% 50%',
                scrub: 2,
                pin: true,
            },
        });
        tl.to(
            '#center',
            {
                height: '100vh',
            },
            'a'
        )
            .to(
                '#top-el',
                {
                    top: '-50%',
                },
                'a'
            )
            .to(
                '#bottom',
                {
                    bottom: '-50%',
                },
                'a'
            )
            .to(
                '#top-title',
                {
                    top: '60%',
                },
                'a'
            )
            .to(
                '#bottom-title',
                {
                    bottom: '-30%',
                },
                'a'
            )
            .to(
                '#center-h1',
                {
                    top: '-30%',
                },
                'a'
            )
            .to('#content', {
                delay: -0.2,
                marginTop: '0%',
            });

        ScrollTrigger.refresh();
    }, []);

    return (
        <div
            ref={parent}
            className="relative w-full h-screen overflow-hidden bg-cyan-500"
            id="parent"
        >
            <div
                id="top-el"
                className="absolute top-0 w-full h-[50dvh] bg-black z-10 overflow-hidden"
            >
                <h1
                    id="top-title"
                    className="text-[22vw] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bottom-[50%]"
                >
                    GRAVITY
                </h1>
            </div>
            <div
                id="center"
                className="relative w-full h-screen overflow-hidden transition-all origin-center bg-white ease-cubic-bezier"
            >
                <div
                    className="mt-[100vh] flex flex-col justify-center items-center w-full h-screen text-black gap-[4vh]"
                    id="content"
                >
                    <h4 className="text-[1vw]" id="center-h1">
                        GRAVITY
                    </h4>
                    <h3 className="w-1/5 text-[3vw] text-center">
                        <i>Browse</i> the work that define a <i>movement</i> and
                        created a craft.
                    </h3>
                    <div className="flex items-center justify-center w-[7vw] h-[2vw] rounded-full bg-white text-black">
                        <h5>ENTER GALLERY</h5>
                    </div>
                    <h2 className="text-[20vw]">(17)</h2>
                </div>
            </div>
            <div
                id="bottom"
                className="absolute bottom-0 w-full h-[50vh] bg-black overflow-hidden"
            >
                <h1
                    id="bottom-title"
                    className="text-[220px] absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-50%] bottom-[50%]"
                >
                    GRAVITY
                </h1>
            </div>
        </div>
    );
};

export default AboutComponent;
