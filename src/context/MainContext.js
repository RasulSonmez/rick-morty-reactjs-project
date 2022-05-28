import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const MainContext = createContext();
// create Provider
export const MainProvider = ({ children }) => {
  const [episodesData, setEpisodesData] = useState({});
  const [getCharacters, setGetCharacters] = useState([]);
  const [total, setTotal] = useState(51);
  const [episodeID, setEpisodeID] = useState(1);

  //api
  const api = {
    base: `https://rickandmortyapi.com/api/episode/${episodeID}`,
  };

  const getEpisodesById = async () => {
    try {
      const episodesResult = await axios.get(`${api.base}`);
      setEpisodesData(episodesResult);

      let episodesCharacters = await Promise.all(
        episodesData.data.characters.map((item) => {
          return axios.get(item);
        })
      );
      setGetCharacters(episodesCharacters);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getEpisodesById();
  }, [episodeID]);

  const values = { episodesData, total, setTotal, setEpisodeID, getCharacters };

  return <MainContext.Provider value={values}>{children}</MainContext.Provider>;
};

export const useMainContext = () => useContext(MainContext);
