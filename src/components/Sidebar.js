import React from "react";
//components
import EpisodeList from "./Episodes/EpisodeList";
import Filters from "./Filters/Filters";

function Sidebar() {
  return (
    <aside>
      <EpisodeList />
      <div>
        <Filters />
      </div>
    </aside>
  );
}

export default Sidebar;
