import React, { createContext, useState, useEffect } from "react";

export const MockAPIContext = createContext();

export const MockAPIProvider = ({ children }) => {
  const recordGameResult = (gameName, result) => {
    // Add logic to record the game result
    console.log(`Game ${gameName} result: ${result}`);
    // This could be extended to update the state or make an API call to record the result
  };
  const initialGames = [
    // Initial list of games that would be stored in a real database
    // ... existing game entries
    {
      name: "Mystic Elements",
      description: "Harness the power of the elements to unlock the secrets of the mystic stones.",
      image: "https://via.placeholder.com/150?text=Mystic+Elements",
    },
    // ... other game entries
  ];

  const [games, setGames] = useState(initialGames);
  const [playedGames, setPlayedGames] = useState([]);
  const [gameOutcome, setGameOutcome] = useState({});

  const [favoriteGames, setFavoriteGames] = useState([]); // State to track the user's favorite games

  const fetchGames = () => {
    // Simulate fetching data from a database
    return games;
  };

  const markGameAsPlayed = (gameName) => {
    // Simulate updating the database by adding the game to the played games list
    if (!playedGames.includes(gameName)) {
      setPlayedGames([...playedGames, gameName]);
    }
  };

  const resetGameOutcome = () => {
    setGameOutcome(null);
  };

  useEffect(() => {
    // Simulate database change effect if needed
  }, [games, playedGames, gameOutcome]);

  const playGame = (gameName) => {
    // Simulate a game play outcome
    const outcome = Math.random() < 0.5 ? "won" : "lost";
    setGameOutcome(outcome);

    // Mark the game as played
    markGameAsPlayed(gameName);
  };

  const addGameToFavorites = (gameName) => {
    if (!favoriteGames.includes(gameName)) {
      setFavoriteGames([...favoriteGames, gameName]);
    }
  };

  const removeGameFromFavorites = (gameName) => {
    setFavoriteGames(favoriteGames.filter((game) => game !== gameName));
  };

  return <MockAPIContext.Provider value={{ games, fetchGames, playedGames, markGameAsPlayed, playGame, gameOutcome, resetGameOutcome, favoriteGames, addGameToFavorites, removeGameFromFavorites }}>{children}</MockAPIContext.Provider>;
};
