import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
function CharacterDetail() {
  const { id } = useParams();
  const [getCharacterDetail, setGetCharacterDetail] = useState([]);

  const api = `https://rickandmortyapi.com/api/character/${id}`;
  useEffect(() => {
    const getCharacterById = async () => {
      try {
        const characterResults = await axios.get(api);
        setGetCharacterDetail(characterResults);
      } catch (error) {
        console.log(error.message);
      }
    };

    getCharacterById();
  }, [api]);

  return (
    <>
      <div className="character section">
        <div className="character__detail__card ">
          <div className="character__detail__content">
            <h1 className="character__title">
              {getCharacterDetail.data?.name
                ? getCharacterDetail.data?.name
                : "Unknown"}
            </h1>
            <img
              src={
                getCharacterDetail.data?.image
                  ? getCharacterDetail.data?.image
                  : "Unknown"
              }
              alt=""
            />
            <div className="character__detail__card__life">
              {getCharacterDetail.data?.status
                ? getCharacterDetail.data?.status
                : "Unknown"}
            </div>
            <ul>
              <li>
                Gender:
                <span>
                  {getCharacterDetail.data?.gender
                    ? getCharacterDetail.data?.gender
                    : "Unknown"}
                </span>
              </li>

              <li>
                Location:
                <span>
                  {getCharacterDetail.data?.location?.name
                    ? getCharacterDetail.data?.location?.name
                    : "Unknown"}
                </span>
              </li>
              <li>
                Origin:
                <span>
                  {getCharacterDetail.data?.origin?.name
                    ? getCharacterDetail.data?.origin?.name
                    : "Unknown"}
                </span>
              </li>
              <li>
                Species:
                <span>
                  {getCharacterDetail.data?.species
                    ? getCharacterDetail.data?.species
                    : "Unknown"}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Link to="/" className="character__backLink">
        Back To List
      </Link>
    </>
  );
}

export default CharacterDetail;
