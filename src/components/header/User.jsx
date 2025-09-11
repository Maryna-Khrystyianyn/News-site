import { DownArrow } from "../../assets/Image";

const User = () => {
  const users = [
    {
      name: "Behzad",
      img: "/img/Behzad.png",
    },
  ];

  return (
    <>
      <div className="flex items-center gap-2 lg:ml-5 lg:mr-15 ml-5
        ">
        <img  src={users[0].img} alt="User Bild" className="rounded-[12px]" />
        <h2>{users[0].name}</h2>
        <DownArrow/>
      </div>
    </>
  );
};

export default User;
