import { Authors } from "../../data/Author";
import AuthorCard from "../authorCard/AuthorCard";
import Title from "../title/Title";

const Team = () => {
  return (
    <div className="flex flex-col w-[1512px] mx-auto gap-5 ">
      <Title title="Mega News Team" />
      <div className=" flex bg-gray-100 justify-between p-2  rounded-md">
      {Authors.map((author) => (
        <AuthorCard key={author.id} author={author} />
      ))}
    </div>
    </div>
  );
};

export default Team;
