
import apiClient from "../services/api-client";
import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
const skeletons=[1,2,3,4,5,6];

const GameGrid = () => {
const {games,error,isLoading}=useGames();

  return (
    <>
     { error && <Text bg={'red'}>{error}</Text>}
      <SimpleGrid columns={{sm:1,md:2,lg:3}} spacing={10} padding={'10px'}>
        {isLoading && skeletons.map(skeleton=> <GameCardSkeleton key={skeleton} />)}
        {games.map((game) => (
          <GameCard key={game.id} game={game}/>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
