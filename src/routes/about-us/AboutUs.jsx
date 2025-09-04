import { Map } from "../../components/map/Map";
import { Video } from "../../components/video/VideoSection";
import AppNavigator from "../../components/app-navigator/AppNavigator";
import { TeamSection } from "../../components/team/TeamSection";

export const AboutUs = () => {
  return (
    <>
      <AppNavigator />
      <section>
        <Video />
      </section>
      <section className="absolute left-0">
        {" "}
        <Map />{" "}
      </section>
      <section>
        <TeamSection />
      </section>
    </>
  );
};
