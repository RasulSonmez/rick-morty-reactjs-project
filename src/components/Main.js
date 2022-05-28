import React from "react";
import EpisodesDetail from "./EpisodesDetail";
import Footer from "./Layout/Footer";

import Sidebar from "./Sidebar";

function Main() {
  return (
    <div className="main container section">
      <div className="main__content grid section">
        <Sidebar />
        <EpisodesDetail />
      </div>
    </div>
  );
}

export default Main;
