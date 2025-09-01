import { SearchIcon, ThreeDots } from "../../assets/Image";

const Search = () => {
  return (
    <>
      <div className="flex h-12 w-[400px] justify-around items-center bg-gray-100 rounded-[12px]">
        <div>
          <ThreeDots />
        </div>
        <input type="text" placeholder="Search Anything" className="w-[300px]"/>
        <div>
          <SearchIcon />
        </div>
      </div>
    </>
  );
};

export default Search;
