import { domainFromUrl, formatData } from "../assets/utils";
const NewsCardItem = ({ newsItem, id }) => {
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

  const sourceName = source?.name || domainFromUrl(url) || "Source";
  const published = formatData(publishedAt);

  return (
    <div>
      <article className="">
        <div>
          <img src={urlToImage} alt="" />
        </div>
        <div>
          <div>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>

          <div>
            <div>
              <img src="../../public/img/unsplash_L2dTmhQzx4Q.png" alt="" />
              <div>
                <h3>{author}</h3>
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
