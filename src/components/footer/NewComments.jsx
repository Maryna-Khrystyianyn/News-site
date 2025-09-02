import { NewCommentsCard } from "./NewCommentsCard";

export const NewComments = () => {
  return (
    <>
      <div>
        <div className="flex items-center ml-5 gap-2 mb-5">
          <div className="w-[4px] h-[10px] bg-[#F81539] rounded-[12px]"></div>
          <h3 className="text-2xl font-bold ">New Comments</h3>
        </div>
        <NewCommentsCard />
      </div>
    </>
  );
};
