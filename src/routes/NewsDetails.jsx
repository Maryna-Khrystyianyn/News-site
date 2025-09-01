import { Routes, Route } from "react-router-dom";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { domainFromUrl, formatData } from "../assets/utils";
import Navbar from "../components/navbar/Navbar";
import NavList from "../components/navList/NavList";
import Writer from "../components/writer/Writer";
import { Authors } from "../data/Author";

const NewsDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const newsItem = location.state?.newsItem;
  const published = formatData(newsItem.publishedAt);


  const DetailLinks = [
    {
item:"News"
,
url:"/",
}, 
{
item:(<span className="text-gray-500">{`> ${newsItem.title}`}</span>  ),
url:`/${id}`
} 

]

  if (!newsItem) {
    return (


      <div className="p-4">
        <p>Kein Artikel im State gefunden (z. B. nach Reload).</p>
        <button onClick={() => navigate(-1)}>Zurück</button>
      </div>
    );
  }

  return (
  <section>
    <Navbar/>
    <NavList linkArr={DetailLinks}/>
    <Writer author = {Authors[0]} />
    <div className="flex flex-col gap-5 w-[1072px] m-auto">
  <div className="bg-gray-100 pl-7 w-[1128px] h-[604px] rounded-xl">
    <div>
      <h1 className="mt-5 mb-5 font-bold text-2xl ">{newsItem.title}</h1>
      <img
        className="rounded-xl w-[1072px] h-[598px] mb-3"
        src={newsItem.urlToImage}
        alt="Titelbild"
      />
    </div>
  </div>
  <div className="flex gap-4 mb-3 mt-15 justify-center items-center">
    <a className="flex items-center" href="#">
      <img
        className="m-2 w-[16px]"
        src="../../public/img/CalenderIcon.svg"
        alt=""
      />{" "}
      {published}
    </a>
    <a className="flex items-center" href="#">
      <img
        className="m-2 w-[16px]"
        src="../../public/img/CommentsIcon.svg"
        alt=""
      />{" "}
      Comments: 35
    </a>
    <a className="flex items-center" href="#">
      <img
        className="m-2 w-[16px]"
        src="../../public/img/OrdnerIcon.svg"
        alt=""
      />{" "}
      Category: Sport
    </a>
  </div>
  <h2 className="font-bold">
    Don`t Wait. The Purpose Of Our Lives Is To Be Happy!
  </h2>
  <p>
    {newsItem.description} Upon arrival, your senses will be rewarded with
    the pleasant scent of lemongrass oil used to clean the natural wood
    found throughout the room, creating a relaxing atmosphere within the
    space. A wonderful serenity has taken possession of my entire soul, like
    these sweet mornings of spring which I enjoy with my whole heart. I am
    alone, and feel the charm of existence in this spot, which was created
    for the bliss of souls like mine. I am so happy, my dear friend, so
    absorbed in the exquisite.
  </p>
  <img
    className="m-auto w-[872px] h-[486px]"
    src="../../public/img/01.png"
    alt="Sportbild"
  />
  <h2 className="font-bold">
    Not how long, but how well you have lived is the main thing.
  </h2>
  <p>
    {newsItem.description} Upon arrival, your senses will be rewarded with
    the pleasant scent of lemongrass oil used to clean the natural wood
    found throughout the room, creating a relaxing atmosphere within the
    space. A wonderful serenity has taken possession of my entire soul, like
    these sweet mornings of spring which I enjoy with my whole heart. I am
    alone, and feel the charm of existence in this spot, which was created
    for the bliss of souls like mine. I am so happy, my dear friend, so
    absorbed in the exquisite.
  </p>
</div></section>
    
  );
};

export default NewsDetails;
