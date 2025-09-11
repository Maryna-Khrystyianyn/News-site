const BigVideoItem = ({videoItem}) => {
    console.log()
  return (
    <div className="relative w-full overflow-hidden pt-12 sm:h-[510px] h-[320px] flex items-end">
      <div className="w-full h-full ">
        <iframe
          width="100%"
          height="100%"
          src={videoItem.videoUrl}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          className="rounded-xl"
        ></iframe>
      </div>

      <div className="bg-white opacity-90 absolute bottom-[10px]  left-[10px] w-[calc(100%_-_20px)] rounded-xl p-3">
        <h2 className="font-bold text-xl">{videoItem.title}</h2>
        <h2 className="sm:block hidden">{videoItem.description}</h2>
      </div>
    </div>
  );
};

export default BigVideoItem;
