



const CarouselNewsItem = ({newsItem, textLength}) => {
    const {
        urlToImage,
       
        title,
        description,
        /* publishedAt, */
        // content
      } = newsItem || {};

      const text = shortenText(description, textLength);

  function shortenText(str, wordLimit) {
    const words = str.split(" ");
    return words.length <= wordLimit
      ? str
      : words.slice(0, wordLimit).join(" ") + "...";
  }

      
  return (
    <div className="grow">
  <div className={`w-full h-[452px] overflow-hidden rounded-2xl flex justify-center relative`}>
    <img className={`w-full h-full object-cover`} src={urlToImage} alt={title} />
    <div className="absolute   opacity-90 bottom-0 h-[117px]  w-[94%]  rounded-xl m-3 bg-gray-200/80 p-4">
      <p className="font-bold">{title}</p>
      <p>{text}</p>
    </div>
  </div>
</div>
  )
}

export default CarouselNewsItem