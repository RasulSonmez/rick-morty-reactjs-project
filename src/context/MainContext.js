import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const MainContext = createContext();
// create Provider
export const MainProvider = ({ children }) => {
  const [episodesData, setEpisodesData] = useState({});
  const [getCharacters, setGetCharacters] = useState([]);
  const [allCharacters, setAllCharacters] = useState([]);
  const [total, setTotal] = useState(51);
  const [episodeID, setEpisodeID] = useState(1);

  //api
  const api = {
    base: `https://rickandmortyapi.com/api/episode/${episodeID}`,
  };

  //get by episdeos by and characters of episodes
  const getEpisodesById = async () => {
    try {
      const episodesResult = await axios.get(`${api.base}`);
      setEpisodesData(episodesResult);

      let getCharactersByEpisodes = await Promise.all(
        episodesResult.data.characters.map((item) => {
          return axios.get(item);
        })
      );

      setGetCharacters(getCharactersByEpisodes);
      setAllCharacters(getCharactersByEpisodes);
    } catch (error) {
      console.log(error.message);
    }
  };

  //sorted characters
  const sortCharacters = (selectEvent) => {
    const options = {
      "a-z": [...getCharacters].sort((a, b) =>
        a.data.name < b.data.name ? -1 : 1
      ),
      "z-a": [...getCharacters].sort((a, b) =>
        a.data.name < b.data.name ? 1 : -1
      ),
    };
    setGetCharacters(options[selectEvent.target.value]);
  };

  useEffect(() => {
    getEpisodesById();
  }, [episodeID]);

  const values = {
    episodesData,
    total,
    setTotal,
    setEpisodeID,
    getCharacters,
    setGetCharacters,
    sortCharacters,
    allCharacters,
  };

  return <MainContext.Provider value={values}>{children}</MainContext.Provider>;
};

export const useMainContext = () => useContext(MainContext);
