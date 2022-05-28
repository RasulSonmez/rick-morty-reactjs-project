import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
function CharacterDetail() {
  let [getCharacterDetail, setGetCharacterDetail] = useState([]);
  const { id } = useParams();
  let api = `https://rickandmortyapi.com/api/character/${id}`;
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

  console.log(getCharacterDetail);

  return (
    <>
      <div className="character section">
        <div className="character__detail__card ">
          <div className="character__detail__content">
            <h1 className="character__title">
              {getCharacterDetail.data
                ? getCharacterDetail.data.name
                : "Unknown"}
            </h1>
            <img
              src={
                getCharacterDetail.data
                  ? getCharacterDetail.data.image
                  : "Unknown"
              }
              alt=""
            />
            <div className="character__detail__card__life">
              {getCharacterDetail.data
                ? getCharacterDetail.data.status
                : "Unknown"}
            </div>
            <ul>
              <li>
                Gender:
                <span>
                  {getCharacterDetail.data
                    ? getCharacterDetail.data.gender
                    : "Unknown"}
                </span>
              </li>

              <li>
                Location:
                <span>
                  {getCharacterDetail.data
                    ? getCharacterDetail.data.locaiton
                    : "Unknown"}
                </span>
              </li>
              <li>
                Origin:
                <span>
                  {getCharacterDetail.data
                    ? getCharacterDetail.data.origin
                    : "Unknown"}
                </span>
              </li>
              <li>
                Species:
                <span> Human</span>
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
