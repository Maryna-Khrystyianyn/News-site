import { DownArrow } from "../../assets/AllImages";
import Navbar from "../../components/navbar/Navbar";
import NavList from "../../components/navList/NavList";

const Categories = () => {
    const CategorieLinks = [
        {
  item:(
    <span className="flex items-center">
        News <DownArrow/>
    </span>
  ),
  url:"/",
}, 
{
  item:"Categories",
  url:"/categories"
} 

]
    return ( <div>
        <Navbar/>
        <NavList linkArr={CategorieLinks}/>
        </div> );
}
 
export default Categories;