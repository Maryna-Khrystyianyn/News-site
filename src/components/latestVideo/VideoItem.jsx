const VideoItem = ({ video }) => {
  function shortenText(str, wordLimit) {
    const words = str.split(" ");
    return words.length <= wordLimit
      ? str
      : words.slice(0, wordLimit).join(" ") + "...";
  }

  return (
    <div className="pt-12">
      <div className="w-[500px] h-[210px] bg-white p-3   flex items-center justify-between gap-5 rounded-xl">
        <div>
          <a href={video.videoUrl}>
            <img
              className="w-[180px] h-[180px] object-cover rounded-xl"
              src={video.img}
              alt="video"
            />
          </a>
        </div>
        <div className="w-[300px] h-[180px] overflow-hidden">
          <h2 className="font-bold text-xl py-2">{video.title}</h2>
          <p>{shortenText(video.description, 20)}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
