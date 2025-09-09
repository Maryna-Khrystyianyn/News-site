import { Link } from "react-router-dom";
import { domainFromUrl, formatData } from "../assets/utils";

const NewsCardItem = ({ newsItem, isSmall, id }) => {
  const {
    urlToImage,
    url,
    source,
    author,
    title,
    description,
    publishedAt,
    // content
  } = newsItem || {};
  console.log(isSmall);
  const widthItem = isSmall ? "360px" : "744px";
  const directionItem = isSmall ? "flex-col" : "flex-row";
  const heightItem = isSmall ? "420px" : "230px";

  const sourceName = source?.name || domainFromUrl(url) || "Source";
  const published = formatData(publishedAt);
  const text = shortenText(description, 15);

  function shortenText(str, wordLimit) {
    const words = str.split(" ");
    return words.length <= wordLimit
      ? str
      : words.slice(0, wordLimit).join(" ") + "...";
  }

  return (
    <div
      className={`shadow-sm  rounded-[12px] p-[10px] gap-[10px] bg-white`}
      style={{ height: heightItem, width: widthItem }}
   >
      <article className={`flex ${directionItem} gap-3 `}>
        <img
          src={urlToImage}
          alt=""
          className="w-[330px] h-[190px] rounded-2xl"
        />
        <div className="flex flex-col h-[200px] justify-between">
          <Link to={`/${id}`} state={{ newsItem }}>
            <h2 className="font-bold mt-2 mb-2 ">{shortenText(title,10)}</h2>
            <p>{text}</p>
          </Link>

          <div className="bg-gray-100 flex flex-col w-full h-[72px] rounded-[12px]">
            <div className="flex justify-between items-center px-4 py-2">
              <img
                src="../../public/img/unsplash_L2dTmhQzx4Q.png"
                alt=""
                className="w-[44px] h-[44px] rounded-[12px]"
              />
              <div className="flex flex-col ml-2 mr-auto">
                <h3 className="font-bold">{author}</h3>
                <p>{published}</p>
              </div>
              <img src="../../public/img/icon.svg" alt="" />
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default NewsCardItem;
