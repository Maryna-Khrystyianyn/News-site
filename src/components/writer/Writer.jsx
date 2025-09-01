import { FollowerIcon, PostIcon, StarIcon } from "../../assets/Image";
import Header from "../header/Header";
import Navigator from "../header/Navigator";


const Writer = () => {
  return (
    <>
        <div>
            <img src="../../../public/img/TitleImage.svg" alt="Purple Gaaxy" />
            <div>
                <div>
                    <img src="../../../public/img/author1.svg" alt="Picture of the auhor" />
                    <h3>Louis Hoebregts</h3>
                </div>
                <div>
                    <div>
                        <StarIcon />
                        <p>Rate: 4.2</p>
                    </div>
                    <div>
                        <FollowerIcon />
                        <p>Followers: 1.2K</p>
                    </div>
                    <div>
                        <PostIcon />
                        <p>Post: 29</p>
                    </div>
                </div>
                <button>
                    <span>+</span>
                    <span>Follow</span>
                </button>
            </div>
        </div>
    </>
  );
};

export default Writer;
