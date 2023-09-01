import React, { Suspense } from 'react';
import './App.css';
import { Grid, GridItem, Show, HStack } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import { useState } from 'react';
import { Genre } from './hooks/useGenres';
import { Platform } from './hooks/useGames';
const PlatformSelector = React.lazy(
  () => import('./components/PlatformSelector')
);
const SortSelector = React.lazy(() => import('./components/SortSelector'));
const GenreList = React.lazy(() => import('./components/GenreList'));
import GamesHeading from './components/GamesHeading';

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr',
      }}
    >
      <GridItem pl="2" area={'nav'}>
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem pl="2" area={'aside'} paddingX={5}>
          <Suspense fallback={<div>Loading...</div>}>
            <GenreList
              selectedGenre={gameQuery.genre}
              onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            />
          </Suspense>
        </GridItem>
      </Show>
      <GridItem pl="2" area={'main'}>
        <GamesHeading gameQuery={gameQuery} />
        <HStack spacing={5} paddingLeft={9}>
          <Suspense fallback={<div>Loading...</div>}>
            <PlatformSelector
              onSelectedPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
              selectedPlatform={gameQuery.platform}
            />
            <SortSelector
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
              sortOrder={gameQuery.sortOrder}
            />
          </Suspense>
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
