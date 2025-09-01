import { DownArrow } from "../../assets/AllImages";
import Navbar from "../../components/navbar/Navbar";
import NavList from "../../components/navList/NavList";

const Categories = () => {
    const CategorieLinks = [
        {
  item:"News"
  ,
  url:"/",
}, 
{
  item:(<span className="text-gray-500">{`> Categories`}</span>  ),
  url:"/categories"
} 

]
    return ( <div>
        <Navbar/>
        <NavList linkArr={CategorieLinks}/>
        </div> );
}
 
export default Categories;