import { SearchIcon, ThreeDots } from "../../assets/Image";

const Search = () => {
  return (
    <>
      <div className="flex h-12 w-full justify-around items-center bg-gray-100 rounded-[12px]">
        <div className="pl-2
        ">
          <ThreeDots />
        </div>
        <input type="text" placeholder="Search Anything" className="w-full sm:pl-3"/>
        <div className="sm:pr-2">
          <SearchIcon />
        </div>
      </div>
    </>
  );
};

export default Search;
