"use client"

import Image from "next/image";
import {useState} from "react";
import Step1 from "@/components/second-page/Step1";
import Step2 from "@/components/second-page/Step2";
import Step3 from "@/components/second-page/Step3";


export interface Props {
    image: string;
    stepNo: number;
    title: string;
    description: string;
}

export default function StepPage() {

    const [activeStep, setActiveStep] = useState(null);

    const handleStepIntersection = (stepNumber, inView) => {
        if (inView) {
            setActiveStep(stepNumber);
        }
    };

    return (
        <div className={"bg-gradient-to-b from-blue-100 to-red-100 flex items-center justify-center h-screen"}>
            <div className={"flex justify-between items-center gap-6 p-4 relative"}>
                <div className={"bg-[#ffffff] rounded-md p-4 absolute w-[613px]"}>
                    <Image
                        src={`/steps/step${activeStep}.png`}
                        alt={`Step ${activeStep}`}
                        width={0}
                        height={0}
                        sizes={"100vw"}
                        style={{width: '100%', height: '100%'}}
                        className={"!w-full !h-full"}/>
                </div>
                <div
                    className={"h-[400px] overflow-y-scroll w-full pl-[640px] z-10"}
                    style={{
                        msOverflowStyle: 'none',
                        scrollbarWidth: 'none'
                    }}>
                    <Step1 onIntersection={(inView) => handleStepIntersection(1, inView)}/>
                    <Step2 onIntersection={(inView) => handleStepIntersection(2, inView)}/>
                    <Step3 onIntersection={(inView) => handleStepIntersection(3, inView)}/>
                </div>
            </div>
        </div>
    );
}