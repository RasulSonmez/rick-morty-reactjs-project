import React from "react";
import { Link } from "react-router-dom";
import { useMainContext } from "../context/MainContext";

function EpisodesDetail() {
  const { episodesData, getCharacters } = useMainContext();

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
        <div className="episodes__detail__card__wrapper grid">
          {getCharacters.map((item) => (
            <div key={item.data.id} className="episodes__detail__card">
              <div className="episodes__detail__content">
                <img src={item.data.image} alt="" />
                <h1 className="episodes__detail__card__name">
                  {" "}
                  {item.data.name}
                </h1>
                <p>Last Location</p>
                <p className="episodes__detail__card__location">
                  {item.data.location.name
                    ? item.data.location.name
                    : "Unknown"}
                </p>

                <Link
                  to={`${item.data.id}`}
                  className="episodes__detail__card__button"
                  href="#"
                >
                  Detail
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default EpisodesDetail;
