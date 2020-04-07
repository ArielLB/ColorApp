import React from 'react';
import Palette from './components/Palette'
import PaletteList from './components/PaletteList';
import SingleColorPalette from './components/SingleColorPalette'
import seedColors from './seedColors'
import {generatePalette} from './helpers/colorHelpers'
import {Route,Switch} from 'react-router-dom'

function App() {
  function findPalette(id){
    return seedColors.find(pal => pal.id === id);
  }
  return (
    <Switch>
      <Route exact path='/' render={routeProps => <PaletteList palettes={seedColors} {...routeProps}/>} />
      <Route exact path='/palette/:id' render={routeProps=>(
        <Palette palette={generatePalette(findPalette(routeProps.match.params.id))} />
      )} />
      <Route exact path='/palette/:paletteId/:colorId' render={routeProps=>(
        <SingleColorPalette palette={generatePalette(findPalette(routeProps.match.params.paletteId))}
                            colorId={routeProps.match.params.colorId} />
      )}/>
    </Switch>
  );
}

export default App;
