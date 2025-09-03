import { FollowSectionPhotos } from "./FollowSectionPhotos";
import { Title } from "../Title";

export const FollowSection = () => {
  return (
    <section className="ml-5 w-[360px] h-[403px]">
      <Title title="Follow On Instagram" />
      <FollowSectionPhotos />
    </section>

    // <div className="ml-5 w-[360px] h-[403px]">
    //  <Title title="Follow On Instagram"/>
    //  <FollowSectionPhotos />
    // </div>
  );
};
