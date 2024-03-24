"use client"
import {roboto_mono} from "@/app/fonts";
import {motion} from 'framer-motion';

export default function FirstPage() {

    return (
        <div className={"bg-[#F7F7F7] flex flex-row h-screen"}>
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

