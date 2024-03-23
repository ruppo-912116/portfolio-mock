import Image from "next/image";
import React from "react";

export default function Navbar() {
    return (
        <div className={"h-[132px] px-12 flex justify-between items-center bg-transparent"}>
            <Image src={"logo.svg"} width={64} height={64} alt={"logo"}/>
            <div className={"text-lg gap-6 flex items-center"}>
                <div className={"gap-6 tracking-wide flex text-[#6BD8BB]"}>
                    <p>HOME</p>
                    <p>PORTFOLIO</p>
                    <p>PRESS</p>
                    <p>SERVICES</p>
                    <p>HOW THIS WORKS</p>
                </div>
                <button className={"bg-gradient-to-r from-[#61B3D0] to-[#4EACB4] p-4"}>GET CHIPIE</button>
            </div>
        </div>
    )
}