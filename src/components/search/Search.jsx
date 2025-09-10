import { DreiPunkteMenu, Lupe } from "../../assets/AllImages";

const Search = () => {
  return (
    <div className="flex justify-between bg-gray-100 w-full rounded-md p-2">
      <div className="flex"> <DreiPunkteMenu />

      <input type="text" placeholder="Search Anything" /></div>
     
      <Lupe />
    </div>
  );
};

export default Search;
