import { MapSection } from "./MapSection";
import { TeamSection } from "./TeamSection";
import { VideoSection } from "./VideoSection";

export const AboutUsPage = () => {
  return (
    <>
      <Header />
      <Navigator />
      <section>
        <VideoSection />
      </section>
      <section className="absolute left-0">
        {" "}
        <MapSection />{" "}
      </section>
      <section>
        <TeamSection />
      </section>
      <div className="absolute left-0 mt-60">
        <Footer />
      </div>
    </>
  );
};
