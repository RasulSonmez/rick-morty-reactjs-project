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

  //get by episdeos by and characters of episodes
  const getEpisodesById = async () => {
    try {
      const episodesResult = await axios.get(`${api.base}`);
      setEpisodesData(episodesResult);
      let episodesCharacters = await Promise.all(
        episodesData.data.characters.map((item) => {
          console.log(item);
          return axios.get(item);
        })
      );
      setGetCharacters(episodesCharacters);
    } catch (error) {
      console.log(error.message);
    }
  };

  //filtered by gender
  const filterByGender = (gender) => {
    if (gender) {
      let filteredByGenderCharacters = getCharacters.filter(
        (item) => item.data.gender === gender
      );
      setGetCharacters(filteredByGenderCharacters);
    } else return null;
  };

  //filtered by statu
  const filterBystatu = (statu) => {
    if (statu) {
      let filteredByStatuCharacters = getCharacters.filter(
        (item) => item.data.status === statu
      );

      setGetCharacters(filteredByStatuCharacters);
    } else {
      return null;
    }
  };

  //sorted characters
  const sortPlayers = (selectEvent) => {
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
    filterByGender,
    filterBystatu,
    sortPlayers,
  };

  return <MainContext.Provider value={values}>{children}</MainContext.Provider>;
};

export const useMainContext = () => useContext(MainContext);
