import React from "react";
import { Link } from "react-router-dom";
//context
import { useMainContext } from "../../context/MainContext";
import Alert from "../Alert/Alert";

function EpisodeCharactersSearchResult() {
  const { filteredResults } = useMainContext();
  return (
    <>
      {filteredResults.length < 1 ? (
        <Alert />
      ) : (
        filteredResults.map((item) => {
          return (
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
          );
        })
      )}
    </>
  );
}

export default EpisodeCharactersSearchResult;
