import React from "react";
//context
import { useMainContext } from "../../context/MainContext";

function SearchBar() {
  const { setSearchInput, setFilteredResults, getCharacters, searchInput } =
    useMainContext();

  //search characters
  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = getCharacters.filter((item) => {
        return Object.values(item.data.name)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(getCharacters);
    }
  };

  return (
    <div>
      <input
        className="search"
        type="search"
        placeholder="Search.."
        onChange={(e) => searchItems(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
