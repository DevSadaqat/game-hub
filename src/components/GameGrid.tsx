import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames, { Platform } from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import { Genre } from '../hooks/useGenres';
import { GameQuery } from '../App';

interface Prop {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Prop) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error ? (
        <Text>{error}</Text>
      ) : (
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          spacing={5}
          padding={10}
        >
          {isLoading && skeletons.map((skl) => <GameCardSkeleton key={skl} />)}
          {data.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </SimpleGrid>
      )}
    </>
  );
};

export default GameGrid;
