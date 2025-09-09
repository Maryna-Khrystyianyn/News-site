import FollowSection from "./FollowSection";
import Mapfooter from "./Mapfooter";
import NewComents from "./NewComments";


const Footer = () => {
    return ( <footer  className="flex justify-between max-w-[1511px] my-10 mx-auto">
        <Mapfooter/>
        <NewComents/>
        <FollowSection/>
        

    </footer> );
}
 
export default Footer;