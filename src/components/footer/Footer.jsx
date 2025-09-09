import { FollowSection } from "./FollowSection.jsx";
import { MainFooterSection } from "./MainFooterSection.jsx";
import { NewComments } from "./NewComments.jsx";

// TODO: Width in px need to be removed
export const Footer = () => {
  return (
    <footer className="flex w-[1920px] h-[483px] items-center">
      <MainFooterSection />
      <NewComments />
      <FollowSection />
    </footer>
  );
};
