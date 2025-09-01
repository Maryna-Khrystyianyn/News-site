import { DownArrow } from "../../assets/AllImages";

const User = () => {
  return (
    <div className="flex items-center gap-2">
      <img className="rounded-md "   src="../../../public/img/unsplash_L2dTmhQzx4Q.png" alt="user foto" />
      <p className="font-bold">Behzad</p>
      <DownArrow />
    </div>


  );
};

export default User;
