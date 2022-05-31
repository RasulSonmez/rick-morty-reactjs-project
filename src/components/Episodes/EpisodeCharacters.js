import { Link } from "react-router-dom";
//context
import { useMainContext } from "../../context/MainContext";
//components
import SearchBar from "../Filters/SearchBar";
import SortCharacters from "../Filters/SortCharacters";
import EpisodeCharactersSearchResult from "./EpisodeCharactersSearchResult";

function EpisodeCharacters() {
  const { getCharacters, searchInput, loading } = useMainContext();

  return (
    <div className="episodes__filter grid">
      <div className="episodes__filter__top">
        {/* Sort Characters */}
        <SortCharacters />
        {/* Search Characters */}
        <SearchBar />
      </div>

      {/* Show search characters */}
      <div className="episodes__detail__card__wrapper grid">
        {searchInput.length > 1 ? (
          <EpisodeCharactersSearchResult />
        ) : loading ? (
          // show default characters

          getCharacters.map((item) => {
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
                    <span className="episodes__detail__card__button">
                      Detail
                    </span>
                  </div>
                </Link>
              </div>
            );
          })
        ) : (
          <p className="loader"></p>
        )}
      </div>
    </div>
  );
}

export default EpisodeCharacters;
