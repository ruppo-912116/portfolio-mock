"use client"
import Image from "next/image";
import React from "react";
import {useRouter} from "next/navigation";

export default function Navbar() {
    const router = useRouter();


    return (
        <div className={"h-[132px] px-12 flex justify-between absolute top-0 left-0 w-full z-2 items-center"}>
            <Image src={"logo.svg"} width={90} height={90} alt={"logo"}/>
            <div className={"text-lg gap-6 flex items-center"}>
                <div className={"gap-6 tracking-wide flex text-[#6BD8BB]"}>
                    <p>HOME</p>
                    <p>PORTFOLIO</p>
                    <p className={"cursor-pointer"} onClick={() => router.push("/collage")}>COLLAGE</p>
                    <p>SERVICES</p>
                    <p>HOW THIS WORKS</p>
                </div>
                <button className={"bg-gradient-to-r from-[#61B3D0] to-[#4EACB4] p-4"}>GET CHIPIE</button>
            </div>
        </div>
    )
}