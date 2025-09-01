import Navbar from "../../components/navbar/Navbar";
import NavList from "../../components/navList/NavList";

const Pages = () => {
    const PagesLinks = [
        {
  item:"News"
  ,
  url:"/",
}, 
{
  item:(<span className="text-gray-500">{`> Pages`}</span>  ),
  url:"/pages"
} 

]

    return (<div>
        <Navbar/>
        <NavList linkArr={PagesLinks}/></div>  );
}
 
export default Pages;