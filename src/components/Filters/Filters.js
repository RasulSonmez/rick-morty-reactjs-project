import { useState } from "react";
//components
import FilterGender from "./FilterGender";
import FilterStatus from "./FilterStatus";

function Filters() {
  //statu and genders array
  const status = [{ statu: "Alive" }, { statu: "Dead" }, { statu: "Unknown" }];
  const genders = [
    { gender: "Male" },
    { gender: "Female" },
    { gender: "unknown" },
    { gender: "Genderless" },
  ];
  const [gender, setGender] = useState(genders);
  const [statu, setStatu] = useState(status);

  return (
    <div className="filters grid">
      <h1>Filters</h1>

      <FilterGender
        gender={gender}
        setGender={setGender}
        genders={genders}
        statu={statu}
      />
      <FilterStatus
        statu={statu}
        setStatu={setStatu}
        status={status}
        gender={gender}
      />
    </div>
  );
}

export default Filters;
