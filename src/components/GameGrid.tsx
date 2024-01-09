
import apiClient from "../services/api-client";
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
const {games,error}=useGames();

  return (
    <>
     { error && <Text bg={'red'}>{error}</Text>}
      <SimpleGrid columns={{sm:1,md:2,lg:3}} spacing={10} padding={'10px'}>
        {games.map((game) => (
          <GameCard key={game.id} game={game}/>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
