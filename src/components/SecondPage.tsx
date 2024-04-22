import Image from "next/image";

export interface Props {
    image: string;
    key: number;
    title: string;
    description: string;
}

export default function SecondPage(props: Props) {

    const data: Props = {
        image: "",
        key: 2,
        title: "Upload & Go",
        description: "Submit your documents (office, PDF, scanned) - our system guides you through anonymization."
    }


    return (
        <div className={"bg-gradient-to-b from-blue-100 to-red-100 h-screen"}>
            <div className={"flex justify-between items-center h-full"}>
                <div className={"bg-[#ffffff] rounded-md p-4"}>
                    <Image src={"/steps/step1.png"} alt={`Step ${data.key}`} width={0} height={0} className={"!w-full !h-full"} />
                </div>
                <div className={"h-full w-full"}>
                    <p>STEP {data.key}</p>
                    <h1>{data.title}</h1>
                    <p>{data.description}</p>
                </div>
            </div>
        </div>
    )
}