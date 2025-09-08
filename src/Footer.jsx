import { FollowSection } from "../src/components/footer/FollowSection.jsx"
import { MainFooterSection } from "../src/components/footer/MainFooterSection.jsx";
import { NewComments } from "../src/components/footer/NewComments.jsx";

export const Footer = () => {
  return (
    <footer className="flex w-[1920px] h-[483px] items-center">
      <MainFooterSection />
      <NewComments />
      <FollowSection />
    </footer>
  );
};
