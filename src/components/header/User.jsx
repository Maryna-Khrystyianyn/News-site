import { DownArrow } from "../../assets/Image";

const User = () => {
  const users = [
    {
      name: "Behzad",
      img: "../../../public/img/image.png",
    },
  ];

  return (
    <>
      <div className="flex items-center gap-2 ml-5 mr-15 ">
        <img  src={users[0].img} alt="User Bild" className="rounded-[12px]" />
        <h2>{users[0].name}</h2>
        <DownArrow/>
      </div>
    </>
  );
};

export default User;
