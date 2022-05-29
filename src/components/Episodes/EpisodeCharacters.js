import React from "react";
import { Link } from "react-router-dom";
import { useMainContext } from "../../context/MainContext";

function EpisodeCharacters() {
  const { getCharacters, sortPlayers } = useMainContext();

  return (
    <div>
      <div className="episodes__filter__top">
        <div className="episodes__filterAz">
          <select onChange={sortPlayers}>
            <option value="a-z">Sort By:</option>
            <option value="a-z">Name, A to Z</option>
            <option value="z-a">Name, Z to A</option>
          </select>
        </div>
        <div>
          <input
            className="search"
            type="search"
            name=""
            id=""
            placeholder="Search.."
          />
        </div>
      </div>

      <div className="episodes__detail__card__wrapper grid">
        {getCharacters ? (
          getCharacters.map((item) => (
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
          ))
        ) : (
          <p>No Characters Found :/</p>
        )}
      </div>
    </div>
  );
}

export default EpisodeCharacters;
