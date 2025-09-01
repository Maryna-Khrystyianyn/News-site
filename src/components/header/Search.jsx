import { SearchIcon, ThreeDots } from "../../assets/Image";

const Search = () => {
  return (
    <>
      <div className="flex">
        <div>
            <ThreeDots/>
        </div>
        <input type="text" placeholder="Search Anything" className="h-12 w-[400px]" />
        <div>
            <SearchIcon/>
        </div>
      </div>
    </>
  );
};

export default Search;
