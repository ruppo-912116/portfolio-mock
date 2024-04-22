"use client";
import styles from "../css/photo-collage.module.css";
import useWindowSize from "@/hooks/useWindowSize";
import Image from "next/image";

export default function PhotoCollage() {

    const {width} = useWindowSize();

    // create multiple rectangular boxes with varying width and height
    function generateRandomHeightAndWidth() {
        const min = 1000;
        const max = 1200;
        return Math.floor(Math.random() * (max - min) + min);
    }

    function generateRandomHexColor() {
        // Create an array of all hexadecimal characters
        const hexChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

        // Start with '#' to represent the hex code format
        let hexCode = '#';

        // Generate 6 random hex characters
        for (let i = 0; i < 6; i++) {
            const randomIndex = Math.floor(Math.random() * hexChars.length);
            hexCode += hexChars[randomIndex];
        }
        return hexCode;
    }

    // return (
    //     <>
    //         <div className={"flex justify-start"}>
    //             {[1, 2, 3].map(item => {
    //                 return (
    //                     <div
    //                         key={item}
    //                         style=
    //                             {{
    //                                 height: `${generateRandomHeightAndWidth()}px`,
    //                                 width: `${generateRandomHeightAndWidth()}px`,
    //                                 background: `${generateRandomHexColor()}`
    //                             }}
    //                     ></div>
    //                 );
    //             })}
    //         </div>
    //         <div className={"flex justify-start"}>
    //             {[1, 2, 3].map(item => {
    //                 return (
    //                     <div
    //                         key={item}
    //                         style=
    //                             {{
    //                                 height: `${generateRandomHeightAndWidth()}px`,
    //                                 width: `${generateRandomHeightAndWidth()}px`,
    //                                 background: `${generateRandomHexColor()}`
    //                             }}
    //                     ></div>
    //                 );
    //             })}
    //         </div>
    //
    //     </>
    // )

    const Rectangle = () => (
        <div style=
                 {{
                     height: `${generateRandomHeightAndWidth()}px`,
                     width: "100%",
                     flexGrow: 1,
                     background: `${generateRandomHexColor()}`
                 }}/>
    );

    function getImageContainerScale(noOfColumns: number) {
        if (typeof width != "number") return "100%";
        const percentage = ((width / noOfColumns) / width) * 100;
        return `${Math.ceil(percentage)}%`;
    }

    function ImageWrapper(props: any) {
        return (
            <div className={"relative w-[100%] h-[100%]"}>
                {props.children}
            </div>
        )
    }


    return (
        <div className={styles.gallery}>
            <div className={styles.column} style={{width: getImageContainerScale(3), overflow: "hidden"}}>
                <div className={styles.photo}>
                    <Image src={"/photography/photo1.jpg"}
                           quality={60}
                           width={0}
                           height={0}
                           sizes={"100vw"}
                           style={{width: '100%', height: 'auto'}}
                           alt={"alt"}/>

                    <Image src={"/photography/photo2.jpg"}
                           quality={60}
                           width={0}
                           height={0}
                           sizes={"100vw"}
                           style={{width: '100%', height: 'auto'}}
                           alt={"alt"}/>

                    <Image src={"/photography/photo3.jpg"}
                           quality={60}
                           width={0}
                           height={0}
                           sizes={"100vw"}
                           style={{width: '100%', height: 'auto'}}
                           alt={"alt"}/>
                </div>
            </div>

            <div className={styles.column} style={{width: getImageContainerScale(3)}}>
                <div className={styles.photo}>
                    <Image src={"/photography/photo4.jpg"}
                           quality={60}
                           width={0}
                           height={0}
                           sizes={"100vw"}
                           style={{width: '100%', height: 'auto'}}
                           alt={"alt"}/>

                    <Image src={"/photography/photo5.jpg"}
                           quality={60}
                           width={0}
                           height={0}
                           sizes={"100vw"}
                           style={{width: '100%', height: 'auto'}}
                           alt={"alt"}/>

                    <Image src={"/photography/photo6.jpg"}
                           quality={60}
                           width={0}
                           height={0}
                           sizes={"100vw"}
                           style={{width: '100%', height: 'auto'}}
                           alt={"alt"}/>
                </div>
            </div>


            <div className={styles.column} style={{width: getImageContainerScale(3)}}>
                <div className={styles.photo}>
                    <Image src={"/photography/photo7.jpg"}
                           quality={60}
                           width={0}
                           height={0}
                           sizes={"100vw"}
                           style={{width: '100%', height: 'auto'}}
                           alt={"alt"}/>

                    <Image src={"/photography/photo3.jpg"}
                           quality={60}
                           width={0}
                           height={0}
                           sizes={"100vw"}
                           style={{width: '100%', height: 'auto'}}
                           alt={"alt"}/>

                    <Image src={"/photography/photo1.jpg"}
                           quality={60}
                           width={0}
                           height={0}
                           sizes={"100vw"}
                           style={{width: '100%', height: 'auto'}}
                           alt={"alt"}/>
                </div>
            </div>

        </div>
    );
}