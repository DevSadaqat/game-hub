import './App.css';
import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem pl="2" area={'nav'}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem pl="2" area={'aside'}>
          Aside
        </GridItem>
      </Show>
      <GridItem pl="2" area={'main'}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
