import { MapSection } from "./MapSection";
import { VideoSection } from "./VideoSection";

export const AboutUsPage = () => {
    return ( <>
        <section><VideoSection/></section>
        <section className="absolute left-0"> <MapSection/> </section>
        <section><h3>Team</h3></section>
    </> );
}