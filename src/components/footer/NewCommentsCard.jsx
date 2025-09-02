import { useEffect, useState } from "react";

export const NewCommentsCard = () => {
  const [comments, setComments] = useState([]);

useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
    .then((res) => res.json())
    .then((data) => {
      const limited = data.slice(0, 4).map((comment) => {
        const maxWords = 6; 
        const words = comment.body.split(" ");
        return {
          ...comment,
          body:
            words.length > maxWords
              ? words.slice(0, maxWords).join(" ") + "..."
              : comment.body,
        };
      });
      setComments(limited);
    });
}, []);

  return (
    <div className="ml-5 w-[360px] h-[360px]">
      {comments.map((c) => (
        <div key={c.id} className="w-[360px] h-[75px] bg-gray-100 rounded-[12px] mb-5 justify-center flex flex-col gap-2 pl-3">
          <h4 className="font-semibold text-[16px] h-[19px] text-[#3E3232]">{c.name}</h4>
          <p className="h-[16px] w-[328px] text-[12px] text-[#3E3232]">{c.body}</p>
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
