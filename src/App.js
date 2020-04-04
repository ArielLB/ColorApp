import React from 'react';
import Palette from './components/Palette'
import PaletteList from './components/PaletteList';
import seedColors from './seedColors'
import {generatePalette} from './helpers/colorHelpers'
import {Route,Switch} from 'react-router-dom'

function App() {
  function findPalette(id){
    return seedColors.find(pal => pal.id === id);
  }
  return (
    <Switch>
      <Route exact path='/' render={()=> <PaletteList palettes={seedColors}/>} />
      <Route exact path='/palette/:id' render={routeProps=>(
        <Palette palette={generatePalette(findPalette(routeProps.match.params.id))} />
      )} />
    </Switch>
  );
}

export default App;
