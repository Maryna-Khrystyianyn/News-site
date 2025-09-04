import { FollowSectionPhotos } from "./FollowSectionPhotos";
import { Headline } from "../headline/Headline";

export const FollowSection = () => {
  return (
    <section className="ml-5 w-[360px] h-[403px]">
      <Headline title="Follow On Instagram" />
      <FollowSectionPhotos />
    </section>

    // <div className="ml-5 w-[360px] h-[403px]">
    //  <Title title="Follow On Instagram"/>
    //  <FollowSectionPhotos />
    // </div>
  );
};
