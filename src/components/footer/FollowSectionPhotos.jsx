import { useEffect, useState } from "react";

export const FollowSectionPhotos = () => {
    const [photos, setPhoto] = useState([]);
    
      useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos?albumId=1")
          .then((res) => res.json())
          .then((data) => setPhoto(data.slice(0, 9))); // nur 5 Kommentare
      }, []);
    
      return (
        <div>
          {photos.map((c) => (
            <div key={c.id}>
              <img src={c.thumbnailUrl} alt={c.title} />
            </div>
          ))}
        </div>
      );
}