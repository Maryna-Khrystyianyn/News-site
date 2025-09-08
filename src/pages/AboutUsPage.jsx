import { MapSection } from "../components/aboutUs/MapSection";
import { TeamSection } from "../components/aboutUs/TeamSection";
import { VideoSection } from "../components/aboutUs/VideoSection";

export const AboutUsPage = () => {
  return (
    <>
      <div className="w-[1512px] m-auto pt-5">
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
      </div>
    </>
  );
};
