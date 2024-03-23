import Image from "next/image";
import {roboto_mono} from "@/app/fonts";

export default function FirstPage() {
    return (
        <div className={"bg-[#F7F7F7] flex flex-row h-screen"}>
            <div className={"w-[45%] pt-[120px]"}>
                <div className={"mx-[100px]"}>
                    <Image src={"chirpy-design.svg"} width={500} height={300} alt={"chirpy design logo"}/>
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

