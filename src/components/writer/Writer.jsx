import { BgImg, PostIcon, StarIcon, UserIcon } from "../../assets/AllImages";
import { formatNumber } from "../../assets/utils";

const Writer = ({ author }) => {
  return (
    <div className="bg-gray-100 rounded-md px-10 2xl:px-0 p-3 flex flex-col gap-5 max-w-[1511px] mx-auto my-10">
      <div className=" rounded-md max-w-[1491px] overflow-hidden">
        <BgImg />
      </div>

      <div className="flex items-center gap-3 justify-between relative">
        <div className="flex gap-5 2xl:w-[63%] lg:w-[70%]  md:w-[72%] justify-between items-center">
          <img
            className="rounded-md w-[50px] h-[50px] sm:w-[70px] sm:h-[70px]  my-2"
            src={`../../../public/img/authors/${author.img}`}
            alt=""
          />

          <div className="flex lg:items-center lg:justify-between justify-end gap-2 w-full lg:flex-row flex-col">
            <span className="font-bold text-[12px] sm:text-sm md:text-lg">{author.name}</span>

            <div className="flex items-center sm:gap-7 gap-3 flex-wrap sm:flex-nowrap">
              <div className="flex items-center gap-2 text-[12px]sm:text-sm ">
                <StarIcon /> <div className="flex"><span className="hidden sm:block">Rate:</span>{author.rate}</div>
              </div>
              <div className="flex items-center gap-2 text-[12px] sm:text-sm">
                <UserIcon /> <div className="flex"><span className="hidden sm:block">Follower:</span>{formatNumber(author.follower)}</div>
              </div>
              <div className="flex items-center gap-2 text-[12px] sm:text-sm">
                <PostIcon /> <div className="flex"><span className="hidden sm:block">Post:</span>{author.post}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-1 right-0 md:static">
          <button className=" bg-red-400 px-3 py-1 sm:px-4 sm:py-2 rounded-xl text-white font-bold cursor-pointer text-sm sm:text-lg">
            + Follow
          </button>
        </div>
      </div>
    </div>
  );
};

export default Writer;
