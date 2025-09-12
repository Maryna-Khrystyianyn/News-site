import FollowSection from "./FollowSection";
import Mapfooter from "./Mapfooter";
import NewComents from "./NewComments";


const Footer = () => {
    return ( <footer  className="flex justify-between max-w-[1511px] my-10 mx-auto">
        <div className="2xl:w-[50%] xl:w-[75%] w-full"> <Mapfooter/></div>
       <div className="hidden 2xl:block"> <NewComents/>  </div> 
       <div className="hidden xl:block" >  <FollowSection/> </div>
        

    </footer> );
}
 
export default Footer;