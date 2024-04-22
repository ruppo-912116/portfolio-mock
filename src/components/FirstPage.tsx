"use client"
import {roboto_mono} from "@/app/fonts";
import {motion} from 'framer-motion';
import {useEffect, useRef, useState} from "react";
import Image from "next/image";

export default function FirstPage() {

    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);
    const containerRef = useRef(null);
    const divContainerRef = useRef(null);
    const [mouseDown, setMouseDown] = useState(false);


    const handleMouseMove = (event) => {
        if (!mouseDown) return;
        event.preventDefault();


        const {clientX, clientY} = event;

        const divContainerRect = divContainerRef.current.getBoundingClientRect();

        const currentWidth = clientX - divContainerRect.left;

        let result = 0;

        if (currentWidth > 700) {
            result = 700;
        } else {
            result = currentWidth
        }
        setMouseX(result)
    };

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


    return (
        <div className={" bg-[#F7F7F7] flex flex-row h-screen"} ref={containerRef}>

            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div ref={divContainerRef} className={"relative w-[700px] h-[495px]"}
                     onMouseMove={handleMouseMove}
                     onMouseDown={handleMouseDown}
                >
                    <div className={"absolute"}>
                        <Image src={"/docs/pdf1.png"}
                               width={700}
                               height={495}
                               alt={"pdf2"}
                        />
                    </div>
                    <div className={"overflow-hidden absolute"}
                         style={{width: mouseX + "px"}}
                    >
                        <div className="w-[700px]">
                            <Image src={"/docs/pdf2.png"}
                                   width={700}
                                   height={495}
                                   alt={"pdf2"}
                            />
                        </div>
                    </div>

                    <div className="w-2 bg-[#2395FF] absolute top-0 bottom-0 flex flex-col justify-center"
                         style={{left: mouseX}}>
                        <div
                            onMouseDown={handleMouseDown}
                            className="h-12 w-12 rounded-full bg-[#2395FF] relative -left-5">
                            {""}
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
                    {/* this should appear after sometime */}
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

