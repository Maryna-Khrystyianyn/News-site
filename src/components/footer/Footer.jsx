import { FollowSection } from "./FollowSection";
import { MainFooterSection } from "./MainFooterSection";
import { NewComments } from "./NewComments";

export const Footer = () => {
  return (
    <footer className="flex w-[1920px] h-[483px] items-center">
      <MainFooterSection />
      <NewComments />
      <FollowSection />
    </footer>
  );
};
