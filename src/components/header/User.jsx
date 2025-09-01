const User = () => {
  const users = [
    {
      name: "Behzad",
      img: "../../../public/img/image.png",
    },
  ];

  return (
    <>
      <div>
        <img src={users[0].img} alt="User Bild" />
        <h2>{users[0].name}</h2>
      </div>
    </>
  );
};

export default User;
