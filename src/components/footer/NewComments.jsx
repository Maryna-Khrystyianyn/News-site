import { NewCommentsCard } from "./NewCommentsCard";
import { Title } from "../Title";

export const NewComments = () => {
  return (
    <>
      <div>
        <div className="flex items-center ml-5 gap-2">
          <Title title="New Comments"/>
        </div>

        <NewCommentsCard />
      </div>
    </>
  );
};
