import React from "react";
import { useEffect, useState } from "react";
import { useMainContext } from "../../context/MainContext";

const status = [{ statu: "Alive" }, { statu: "Dead" }, { statu: "Unknown" }];

function FilterStatus() {
  const [statu, setStatu] = useState(status);
  const { filterBystatu } = useMainContext();

  const handleChange = (e) => {
    if (e.target.checked) {
      setStatu(e.target.value);
      filterBystatu(e.target.value);
    } else {
      setStatu(statu.filter((id) => id !== e.target.value));
    }
  };

  useEffect(() => {
    filterBystatu();
  }, [status]);
  return (
    <div>
      <aside className="filters__status">
        <h3>Status</h3>
        <ul>
          {status.map((status, index) => (
            <li key={index}>
              <label className="filters__status__radio">
                <input
                  type="checkbox"
                  value={status.statu}
                  onChange={handleChange}
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
