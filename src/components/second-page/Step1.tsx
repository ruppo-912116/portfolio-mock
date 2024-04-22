import {useEffect} from "react";
import {useInView} from "react-intersection-observer";

export default function Step1({onIntersection}) {

    const {ref, inView} = useInView({threshold: 0.5});


    useEffect(() => {
        onIntersection(inView);
    }, [inView, onIntersection]);

    return (
        <div ref={ref} className={"h-full flex flex-col"}>
            <p className={"text-gray-700"}>STEP 1</p>
            <h1 className={"text-2xl"}>Upload & Go</h1>
            <p>Submit your documents (office, PDF, scanned) - our system guides you through anonymization.</p>
        </div>
    );
}