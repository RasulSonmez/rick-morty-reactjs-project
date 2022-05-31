import React from "react";
//components
import EpisodesDetail from "./Episodes/EpisodesDetail";
import Sidebar from "./Sidebar";

function Main() {
  return (
    <div className="main">
      <div className="container section">
        <div className="main__content grid section">
          <Sidebar />
          <EpisodesDetail />
        </div>
      </div>
    </div>
  );
}

export default Main;
