import { DreiPunkteMenu, Lupe } from "../../assets/AllImages";

const Search = () => {
  return (
    <div className="flex bg-gray-100 rounded-md p-2">
      <DreiPunkteMenu />

      <input type="text" placeholder="Search Anything" />
      <Lupe />
    </div>
  );
};

export default Search;
