import React from "react";
import { useMainContext } from "../../context/MainContext";
import EpisodeCharacters from "./EpisodeCharacters";

function EpisodesDetail() {
  const { episodesData } = useMainContext();

  return (
    <>
      <div className="episodes__detail">
        <div className="episodes__detail__top">
          <h1 className="episodes__detail__title">
            Episode name :{" "}
            <span className="episodes__detail__text">
              {" "}
              {episodesData.data ? episodesData.data.name : "Unknown"}
            </span>
          </h1>
          <h3>
            Air Date:{" "}
            <span className="episodes__detail__text">
              {" "}
              {episodesData.data ? episodesData.data.air_date : "Unknown"}
            </span>{" "}
          </h3>
          <h3>
            Episode:{" "}
            <span className="episodes__detail__text">
              {" "}
              {episodesData.data ? episodesData.data.episode : "Unknown"}
            </span>{" "}
          </h3>
        </div>
        {/* get character by episodes */}
        {<EpisodeCharacters />}
      </div>
    </>
  );
}

export default EpisodesDetail;
