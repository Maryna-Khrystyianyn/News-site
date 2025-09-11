export const VideoSection = () => {
  return (
    <>
      <div className="bg-gray-100 w-[80%] h-[604px] rounded-[12px] flex flex-col justify-center mb-10 m-auto">
        <div>
          <h1 className="text-[36px] font-medium ml-[32px] mb-8">
            We pay attention to your needs and do the best design.
          </h1>
        </div>
        <div className="flex justify-around">
          <p className="w-[641px] h-[406px] leading-[34px]  text-[#3E3232] text-[18px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
            purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris
            rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed
            euismod nisi porta lorem mollis. Morbi tristique senectus et netus.
            Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien
            faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper
            velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum
            varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris
            a diam maecenas sed enim. Velit ut tortor pretium viverra
            suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non
            nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis
            scelerisque fermentum. Odio ut enim blandit volutpat maecenas
            volutpat. Ornare lectus sit amet est placerat in egestas erat.
          </p>
          {/* </div>
        <div> */}
          <iframe
            width="744"
            height="444"
            src="https://www.youtube.com/embed/SqcY0GlETPk?si=DInMTcFpCqoT6KFA"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="rounded-[12px]"></iframe>
        </div>
      </div>
    </>
  );
};
