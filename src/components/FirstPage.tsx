"use client"
import {roboto_mono} from "@/app/fonts";
import {motion} from 'framer-motion';
import {useEffect, useRef, useState} from "react";
import Image from "next/image";

import "../css/global.css";


export default function FirstPage() {

    const containerRef = useRef(null);
    const divContainerRef = useRef(null);
    const [mouseDown, setMouseDown] = useState(false);


    const imageContainerRef = useRef(null);


    const handleMouseDown = (event) => {
        event.preventDefault();
        console.log("mouse down")
        setMouseDown(true);
    };

    const handleMouseUp = (event) => {
        event.preventDefault()
        setMouseDown(false);
    };

    useEffect(() => {

        document.addEventListener("mouseup", handleMouseUp);

        return () => {
            document.removeEventListener("mouseup", handleMouseUp);
        };
    }, []);


    const handleIntersection = (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
            imageContainerRef.current.classList.add('slide-in'); // Add animation class once
        }
    };


    // Animate only when the image container is seen on the viewport
    useEffect(() => {
        if (imageContainerRef?.current !== null) {
            const observer = new IntersectionObserver(handleIntersection);
            observer.observe(imageContainerRef.current as Element);
            return () => observer.disconnect();
        }
    }, [imageContainerRef]);


    return (
        <div className={" bg-[#F7F7F7] flex flex-row h-screen"} ref={containerRef}>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div ref={divContainerRef} className={"relative w-[300px] h-[400px]"}
                >
                    <div className={"absolute"}>
                        <Image src={"/docs/manoj.png"}
                               width={300}
                               height={400}
                               alt={"pdf2"}
                        />
                    </div>

                    <div
                        ref={imageContainerRef}
                        className={"absolute overflow-hidden"}
                    >
                        <div className="w-[300px]">
                            <Image src={"/docs/manoj_a.png"}
                                   width={300}
                                   height={400}
                                   alt={"pdf2"}
                            />
                        </div>
                    </div>

                </div>
            </div>


            <div className={"w-[45%] pt-[120px]"}>
                <div className={"mx-[100px] mt-16"}>
                    <motion.img
                        src={"/chirpy-design.svg"}
                        className={"w-[400px] h-[250px]"}
                        alt={"design"}
                        initial={{x: -100, opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        whileInView="visible"
                        viewport={{once: true}}
                        transition={{duration: 1}}>
                    </motion.img>

                    <p className={`${roboto_mono.className} w-[300px] mt-4`}>A design studio for mighty small businesses
                        who are ready to
                        brand up.</p>
                </div>
            </div>

            {/*TODO: add carousel here*/}
            <div className={"bg-indigo-500 w-[55%]"}>
                <img className={"w-full h-full"} src="/carousel/picture4.jpg" alt="pic1"/>
            </div>
        </div>
    );
}

