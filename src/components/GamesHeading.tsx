import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App';

interface Props {
  gameQuery: GameQuery;
}

const GamesHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ''} ${
    gameQuery.genre?.name || ''
  } Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl" paddingLeft={8}>
      {heading}
    </Heading>
  );
};

export default GamesHeading;
