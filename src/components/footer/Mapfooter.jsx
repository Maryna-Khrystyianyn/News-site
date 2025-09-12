import { Link } from "react-router-dom";
import { MailIcon } from "../../assets/AllImages";
import Title from "../title/Title";

const Mapfooter = () => {
  return (
    <div className="bg-gray-100 rounded-r-xl xl:max-w-[948px] flex flex-col p-[20px]  my-10 ">
      <div className="flex gap-10 justify-end">
        <div className="w-[70%px] flex flex-col justify-between pb-1">
          <div>
            <Title title="Mega News" />
            <p className="text-gray-600 my-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
              assumenda sed, reprehenderit quae distinctio deleniti inventore
              praesentium quam sit hic mollitia ipsum unde ipsam minus.
              Reprehenderit sequi rem, saepe enim soluta neque tempora, nemo
              laboriosam dolorum nesciunt voluptates similique eos itaque minima
              odio perspiciatis fugit, exercitationem optio aperiam nisi ea!
            </p>
          </div>

          <div>
            <Title title={"Newsletters"} />
            <div className="bg-white flex justify-between rounded-md p-3 items-center my-3">
              <input type="text" placeholder="Write Your Email" />
              <MailIcon />
            </div>
          </div>
        </div>
        <div className="w-[183px] flex flex-col ">
          <Title title={"Categories"} />
          <div className="flex flex-col my-3 gap-3 text-sm text-gray-600 mb-5">
            <Link>Culture</Link>
            <Link>Fashion</Link>
            <Link>Featured</Link>
            <Link>Food</Link>
            <Link>Healthy Living</Link>
            <Link>Technology</Link>
          </div>
          <Title title={"Social Network"} />
          <div className="my-5 flex justify-between gap-3">
            <button className="bg-gradient-to-r from-[#F45C9F] to-[#FF7563] rounded-xl w-35 flex items-center justify-center gap-2 py-2 text-white">
              <img src="../../../public/img/instaicon.png" alt="insta icon" />
              Instagramm
            </button>
            <button className="bg-gradient-to-r from-[#2CA5E0] to-[#67C9F5] rounded-xl flex items-center justify-center w-10">
              <img
                src="../../../public/img/twittericon.png"
                alt="twitter icon"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="flex bg-gray-200 p-3 rounded-r-xl gap-50 justify-end text-sm text-gray-600 ml-[-20px]">
        <p>Privacy Policy | Terms & Conditions</p>
        <p>All Copyright (c) 2022 Reserved</p>
      </div>
    </div>
  );
};

export default Mapfooter;
