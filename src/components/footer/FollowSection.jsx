import { FollowSectionPhotos } from "./FollowSectionPhotos";

export const FollowSection = () => {
  return (
    <div className="ml-5 w-[360px] h-[403px]">
      <div className="flex items-center gap-2 mb-5">
        <div className="w-[4px] h-[10px] bg-[#F81539] rounded-[12px]"></div>
        <h3 className="text-2xl font-bold ">Follow On Instagram</h3>
      </div>

      <FollowSectionPhotos />
    </div>
  );
};
