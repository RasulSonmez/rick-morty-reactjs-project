import { BiSearch } from "react-icons/bi";
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
    if (searchValue === " ") {
      alert("write something please..");
    }
  };

  return (
    <div className="search">
      <input
        className="search__input"
        type="search"
        placeholder="Search.."
        pattern="[A-Za-z]{3}"
        title="No special characters!"
        onChange={(e) => searchItems(e.target.value)}
      />
      <BiSearch className="search__icon" />
    </div>
  );
}

export default SearchBar;
