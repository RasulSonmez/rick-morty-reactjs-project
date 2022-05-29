import React from "react";
import FilterGender from "./FilterGender";
import FilterStatus from "./FilterStatus";

function Filters() {
  return (
    <div className="filters grid">
      <h1>Filters</h1>
      <FilterGender />
      <FilterStatus />
    </div>
  );
}

export default Filters;
