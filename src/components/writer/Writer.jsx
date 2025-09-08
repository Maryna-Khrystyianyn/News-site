import { FollowerIcon, PostIcon, StarIcon } from "../../assets/Image";
import Header from "../header/Header";
import Navigator from "../header/Navigator";
// mt entfernen zeile 8 =========================================================
const Writer = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-[1512px] h-[260px] bg-gray-100 rounded-[12px] mb-20 mt-15"> 
        <img
          src="/img/TitleImage.svg"
          alt="Purple Gaaxy"
          className="w-[1491px] h-[150px] rounded-[12px]"
        />
        <div className="flex justify-between items-center w-[1491px] mt-3">
          <div className="flex items-center gap-3">
            <img
              src="/img/author1.svg"
              alt="Picture of the auhor"
            />
            <h3>Louis Hoebregts</h3>
          </div>
          <div className="flex items-center gap-15">
            <div className="flex items-center gap-2">
              <StarIcon />
              <p>Rate: 4.2</p>
            </div>
            <div className="flex items-center gap-2">
              <FollowerIcon />
              <p>Followers: 1.2K</p>
            </div>
            <div className="flex items-center gap-2">
              <PostIcon />
              <p>Post: 29</p>
            </div>
          </div>
          <button className="flex items-center gap-2 bg-[#F81539BF] w-[105px] h-[40px] rounded-[12px] text-white justify-center">
            <span className="text-2xl">+</span>
            <span className="font-bold">Follow</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Writer;
