import React from "react";
//context
import { useMainContext } from "../../context/MainContext";

function SortCharacters() {
  const { getCharacters, setGetCharacters } = useMainContext();

  //sorted characters
  const sortCharacters = (selectEvent) => {
    const options = {
      "a-z": [...getCharacters].sort((a, b) =>
        a.data.name < b.data.name ? -1 : 1
      ),
      "z-a": [...getCharacters].sort((a, b) =>
        a.data.name < b.data.name ? 1 : -1
      ),
    };
    setGetCharacters(options[selectEvent.target.value]);
  };

  return (
    <div className="episodes__filterAz">
      <select onChange={sortCharacters}>
        <option value="a-z">Sort By:</option>
        <option value="a-z">Name, A to Z</option>
        <option value="z-a">Name, Z to A</option>
      </select>
    </div>
  );
}

export default SortCharacters;
