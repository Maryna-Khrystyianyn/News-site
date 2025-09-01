import { BgImg, PostIcon, StarIcon, UserIcon } from "../../assets/AllImages";
import { formatNumber } from "../../assets/utils";

const Writer = ({author}) => {
  return (
    <div className="bg-gray-100 rounded-md p-3 flex flex-col gap-5 max-w-[1511px] mx-auto my-10">
      <div className=" rounded-md max-w-[1491px] overflow-hidden" >
        <BgImg/>
      </div>
      <div className="flex items-center gap-3 justify-between">
        <div className="flex items-center gap-3">
            <img className="rounded-md" src={`../../../public/img/authors/${author.img}`} alt="" />
            <span className="font-bold">{author.name}</span>
        </div>
        <div className="flex items-center gap-7">
            <div className="flex items-center gap-2"> <StarIcon/> {`Rate:${author.rate}`} </div>
            <div className="flex items-center gap-2"> <UserIcon/> {`Follower: ${formatNumber(author.follower)}`} </div>
            <div className="flex items-center gap-2"> <PostIcon/> {`Post:${author.post}`} </div>
        </div>
        <div>
            <button className="bg-red-400 px-4 py-2 rounded-xl text-white font-bold"> + Follow</button>
        </div>
      </div>
    </div>
  );
};

export default Writer;
