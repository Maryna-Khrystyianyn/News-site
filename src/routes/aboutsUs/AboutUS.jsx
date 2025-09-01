import Navbar from "../../components/navbar/Navbar";
import NavList from "../../components/navList/NavList";

const AboutUs = () => {

    const AboutLinks = [
        {
          item: "News",
          url: "/",
        },
        {
          item: <span className="text-gray-500">{`> About Us`}</span>,
          url: "/about",
        },
      ];
    return (<div>
        <Navbar/>
        <NavList linkArr={AboutLinks}/>

    </div>  );
}
 
export default AboutUs;