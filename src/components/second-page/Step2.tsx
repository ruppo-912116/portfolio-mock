import {useEffect} from "react";
import {useInView} from "react-intersection-observer";

export default function Step2({onIntersection}) {

    const { ref, inView } = useInView({threshold: 0.5});

    useEffect(() => {
        onIntersection(inView);
    }, [inView, onIntersection]);

    return (
        <div ref={ref} className={"h-full flex flex-col"}>
            <p className={"text-gray-700"}>STEP 2</p>
            <h1 className={"text-2xl"}>Refine & Collaborate</h1>
            <p>Review, adjust, and work together to achieve perfect anonymization. Our AI learns from your feedback.</p>
        </div>
    );
}