import { SearchIcon, ThreeDots } from "../../assets/Image";

const Search = () => {
  return (
    <>
      <div>
        <div>
            <ThreeDots/>
        </div>
        <input type="text" placeholder="Search Anything" />
        <div>
            <SearchIcon/>
        </div>
      </div>
    </>
  );
};

export default Search;
