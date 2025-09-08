import AboutInformation from "../../components/aboutInformation/AboutInformation";
import AboutMedia from "../../components/aboutMedia/AboutMedia";
import CategoryCarousel from "../../components/categoryCarousel/CategoryCarousel";
import Navbar from "../../components/navbar/Navbar";
import NavList from "../../components/navList/NavList";
import Team from "../../components/team/Team";

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
        <CategoryCarousel />
     
        <AboutMedia/>
        <AboutInformation/>
        <Team/>
        

    </div>  );
}
 
export default AboutUs;