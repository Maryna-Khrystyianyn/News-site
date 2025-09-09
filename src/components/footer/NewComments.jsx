import React, { useEffect, useState } from "react";
import Title from "../title/Title";

const NewComents = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      setLoading(true);
      setError(null);
      try {
        // Fetch a larger set and randomly sample `count`
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/comments`
        );
        if (!res.ok) throw new Error(`Server returned ${res.status}`);
        const data = await res.json();
        setComments(data.slice(0, 4));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  function shortenText(str, wordLimit) {
    const words = str.split(" ");
    return words.length <= wordLimit
      ? str
      : words.slice(0, wordLimit).join(" ") + "...";
  }

  return (
    <div className=" mt-7">
      <Title title={"New Comments"} />
      {error && (
        <div className="p-3 bg-red-100 text-red-700 rounded mb-4">
          Error: {error}
        </div>
      )}
      {loading && <div className="text-sm mb-4">Loading…</div>}

      <div className="max-w-[360px] flex flex-wrap gap-5 mt-3">
        {comments.map((comment) => (
          <div  key={comment.id} className="bg-gray-100 rounded-xl w-full p-5">
            <h2 className="font-bold">{comment.name}</h2>
            <p className="text-sm text-gray-600">{shortenText(comment.body,5)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewComents;
