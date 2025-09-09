import Navbar from "../../components/navbar/Navbar";
import NavList from "../../components/navList/NavList";

const ContactUs = () => {
  const ContactLinks = [
    {
      item: "News",
      url: "/",
    },
    {
      item: <span className="text-gray-500">{`> Contact Us`}</span>,
      url: "/contact",
    },
  ];
  return (
    <div>
      <Navbar />
      <NavList linkArr={ContactLinks}/>
    </div>
  );
};

export default ContactUs;
