import { useEffect, useState } from "react";

export const NewCommentsCard = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    fetch("https://jsonplaceholder.typicode.com/comments?postId=1", { signal })
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
      })
      .catch((err) => {
        // fetch abgebrochen? -> ignorieren
        if (err.name !== "AbortError") {
          console.error(err);
        }
      });

    return () => controller.abort();
  }, []);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const limited = data.slice(0, 4).map((comment) => {
  //         const maxWords = 6;
  //         const words = comment.body.split(" ");
  //         return {
  //           ...comment,
  //           body:
  //             words.length > maxWords
  //               ? words.slice(0, maxWords).join(" ") + "..."
  //               : comment.body,
  //         };
  //       });
  //       setComments(limited);
  //     });
  // }, []);

  return (
    <div className="ml-5 w-[360px] h-[360px]">
      {comments.map((c) => (
        <div
          key={c.id}
          className="w-full h-[75px] bg-gray-100 rounded-[12px] mb-6 justify-center flex flex-col gap-3 pl-3"
        >
          <h4 className="font-semibold text-[16px] h-[19px] text-[#3E3232]">
            {c.name}
          </h4>
          <p className="h-[16px] w-[328px] text-[12px] text-[#3E3232]">
            {c.body}
          </p>
        </div>
      ))}
    </div>
  );
};
