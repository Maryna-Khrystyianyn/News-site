import { FollowSection } from "./FollowSection";
import { MainFooterSection } from "./MainFooterSection";
import { NewComments } from "./NewComments";

export const Footer = () => {
  return (
    <footer>
      <MainFooterSection />
      <NewComments />
      <FollowSection />
    </footer>
  );
};
