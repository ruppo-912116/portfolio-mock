import Navbar from "@/components/navbar";
import FirstPage from "@/components/FirstPage";
import StepPage, {Props} from "@/components/StepPage";

export default function Home() {

    return (
        <main>
            <Navbar/>
            <FirstPage/>
            <StepPage/>
        </main>
    );
}
