import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const [episodesData, setEpisodesData] = useState({});
  const [getCharacters, setGetCharacters] = useState([]);
  const [allCharacters, setAllCharacters] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [totalEpisodes, setTotalEpisodes] = useState(51);
  const [episodeID, setEpisodeID] = useState(1);

  //api
  const api = {
    base: `https://rickandmortyapi.com/api/episode/${episodeID}`,
  };

  //fetch chapters and their characters
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

  useEffect(() => {
    getEpisodesById();
  }, [episodeID]);

  const values = {
    episodesData,
    totalEpisodes,
    setTotalEpisodes,
    setEpisodeID,
    getCharacters,
    setGetCharacters,
    allCharacters,
    filteredResults,
    setFilteredResults,
    searchInput,
    setSearchInput,
  };

  return <MainContext.Provider value={values}>{children}</MainContext.Provider>;
};

export const useMainContext = () => useContext(MainContext);
