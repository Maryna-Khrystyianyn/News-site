import FollowSection from "./FollowSection";
import Mapfooter from "./Mapfooter";
import NewComents from "./NewComments";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-gray-100 via-white to-white">
      <div className="flex justify-between gap-4 max-w-[1511px] px-10 2xl:px-0 my-10 mx-auto">
      <div className="2xl:w-[50%] xl:w-[75%] w-full">
        {" "}
        <Mapfooter />
      </div>
      <div className="hidden 2xl:block">
        {" "}
        <NewComents />{" "}
      </div>
      <div className="hidden xl:block">
        {" "}
        <FollowSection />{" "}
      </div>
</div>
    </footer>
  );
};

export default Footer;
