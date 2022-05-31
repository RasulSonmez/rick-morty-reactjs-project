import React from "react";
//context
import { useMainContext } from "../../context/MainContext";

function FilterStatus({ statu, setStatu, status, gender }) {
  const { setGetCharacters, allCharacters } = useMainContext();

  //filtered by statu
  const filterByStatu = (statu) => {
    let filteredByStatuCharacters = allCharacters;
    if (statu !== null && gender !== null && gender.length !== 4) {
      filteredByStatuCharacters = allCharacters.filter(
        (item) => item.data.status === statu && item.data.gender === gender
      );
      setGetCharacters(filteredByStatuCharacters);
    } else if (statu !== null) {
      filteredByStatuCharacters = allCharacters.filter(
        (item) => item.data.status === statu
      );
      setGetCharacters(filteredByStatuCharacters);
    }
  };

  //input handle change
  const handleChange = (e) => {
    if (e.target) {
      setStatu(e.target.value);
      filterByStatu(e.target.value);
    } else {
      setStatu(statu.filter((item) => item === e.target.value));
    }
  };

  return (
    <div>
      <aside className="filters__status">
        <h3>Status</h3>
        <ul>
          {status.map((status, index) => (
            <li key={index}>
              <label className="filters__status__radio">
                <input
                  type="radio"
                  name="status"
                  value={status.statu}
                  onClick={handleChange}
                />
                <span className="filters__status__radio__text">
                  {status.statu}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}

export default FilterStatus;
