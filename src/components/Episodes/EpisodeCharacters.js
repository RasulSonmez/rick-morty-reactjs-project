import React from "react";
import { Link } from "react-router-dom";
import { useMainContext } from "../../context/MainContext";

function EpisodeCharacters() {
  const { getCharacters } = useMainContext();

  return (
    <div>
      <div className="episodes__detail__card__wrapper grid">
        {getCharacters.map((item) => (
          <div key={item.data.id}>
            <Link to={`${item.data.id}`} className="episodes__detail__card">
              <div className="episodes__detail__content">
                <div className="episodes__detail__content__top">
                  <h1 className="episodes__detail__card__name">
                    {" "}
                    {item.data?.name ? item.data.name : "Unknown"}
                  </h1>
                  <p className="episodes__detail__card__status">
                    {item.data?.status ? item.data?.status : "Unknown"}
                  </p>
                </div>

                <img
                  src={item.data?.image ? item.data.image : "Unknown"}
                  alt={item.data?.name ? item.data.name : "Unknown"}
                />

                <p className="episodes__detail__card__location">
                  Last Location <br />
                  {item.data?.location?.name
                    ? item.data?.location?.name
                    : "Unknown"}
                </p>

                <span className="episodes__detail__card__button">Detail</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EpisodeCharacters;
