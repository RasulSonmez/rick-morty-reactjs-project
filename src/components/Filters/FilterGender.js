import { useEffect, useState } from "react";
import { useMainContext } from "../../context/MainContext";
const genders = [
  { gender: "Male" },
  { gender: "Female" },
  { gender: "unknown" },
  { gender: "Genderless" },
];

function FilterGender() {
  const [gender, setGender] = useState(genders);
  const { filterByGender } = useMainContext();

  const handleChange = (e) => {
    if (e.target.checked) {
      setGender(e.target.value);
      filterByGender(e.target.value);
    } else {
      setGender(gender.filter((id) => id !== e.target.value));
    }
  };

  useEffect(() => {
    filterByGender();
  }, [genders]);

  return (
    <div>
      <aside className="filters__gender">
        <h3>Gender</h3>
        <ul>
          {genders.map((genders, index) => (
            <li key={index}>
              <label className="filters__gender__radio">
                <input
                  type="checkbox"
                  value={genders.gender}
                  onChange={handleChange}
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
