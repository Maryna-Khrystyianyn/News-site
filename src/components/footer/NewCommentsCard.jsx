import { useEffect, useState } from "react";

export const NewCommentsCard = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
      .then((res) => res.json())
      .then((data) => setComments(data.slice(0, 5))); // nur 5 Kommentare
  }, []);

  return (
    <div>
      {comments.map((c) => (
        <div key={c.id}>
          <h4 className="font-bold">{c.name}</h4>
          <p>{c.body}</p>
        </div>
      ))}
    </div>
  );
};

// import { Routes, Route } from "react-router-dom";

// export const NewCommentsCard = () => {
//     return (
//         <div>
//             <h4></h4>
//             <p></p>
//         </div>
//      );
// }
