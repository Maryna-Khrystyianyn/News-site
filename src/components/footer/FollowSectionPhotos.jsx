import { useEffect, useState } from "react";
import { createClient } from "pexels";

const API_KEY_Photo = import.meta.env.VITE_PHOTO_API_KEY;
const client = createClient(API_KEY_Photo);

// All requests made with the client will be authenticated

export const FollowSectionPhotos = () => {
  const [photos, setPhoto] = useState([]);

  useEffect(() => {
    client.photos.curated({ per_page: 9 }).then((result) => {
      setPhoto(result.photos); // result contains { page, per_page, photos }
    });
  }, []);

  return (
    <div>
      {photos.map((c) => (
        <div key={c.id}>
          <img src={c.src.medium} alt={c.alt} />
        </div>
      ))}
    </div>
  );
};
