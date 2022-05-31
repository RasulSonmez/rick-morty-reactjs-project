//context
import { useMainContext } from "../../context/MainContext";

function FilterGender({ gender, setGender, genders, statu }) {
  const { setGetCharacters, allCharacters } = useMainContext();

  //filtered by gender
  const filterByGender = (gender) => {
    let filteredByGenderCharacters = allCharacters.filter(
      (item) =>
        (item.data.gender === gender && item.data.status === statu) ||
        item.data.gender === gender
    );
    setGetCharacters(filteredByGenderCharacters);
  };

  //input handle change
  const handleChange = (e) => {
    if (e.target.checked) {
      setGender(e.target.value);
      filterByGender(e.target.value);
    } else {
      setGender(gender.filter((item) => item !== e.target.value));
    }
  };

  return (
    <div>
      <aside className="filters__gender">
        <h3>Gender</h3>
        <ul>
          {/* genders maping */}
          {genders.map((genders, index) => (
            <li key={index}>
              <label className="filters__gender__radio">
                <input
                  type="radio"
                  name="gender"
                  value={genders.gender}
                  onClick={handleChange}
                />
                <span className="filters__gender__radio__text">
                  {genders.gender}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}

export default FilterGender;
