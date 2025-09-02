import React, { useEffect, useState } from "react";
import Title from "../title/Title";

const FollowSection = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      setLoading(true);
      setError(null);
      try {
        // Fetch a larger set and randomly sample `count`
        const res = await fetch(
          `https://picsum.photos/v2/list?page=1&limit=100`
        );
        if (!res.ok) throw new Error(`Server returned ${res.status}`);
        const data = await res.json();
        // Shuffle and take `count`
        const shuffled = data.sort(() => 0.5 - Math.random());
        setImages(shuffled.slice(0, 9));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <div className=" mt-7">
      <Title title={"Follow on Instagram"}/>
      {error && (
        <div className="p-3 bg-red-100 text-red-700 rounded mb-4">
          Error: {error}
        </div>
      )}
      {loading && <div className="text-sm mb-4">Loading…</div>}

      <div className="max-w-[360px] flex flex-wrap gap-5 mt-3">
        {images.map((img) => (
          <article
            key={img.id}
            className=""
          >
            <img
              src={`https://picsum.photos/id/${img.id}/100/100`}
              alt={`Photo by ${img.author}`}
              className=" aspect-square rounded-xl"
            />
           
              
        
          </article>
        ))}
      </div>
    </div>
  );
};

export default FollowSection;
