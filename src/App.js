import React from 'react';
import Palette from './components/Palette'
import PaletteList from './components/PaletteList';
import SingleColorPalette from './components/SingleColorPalette'
import seedColors from './seedColors'
import {generatePalette} from './helpers/colorHelpers'
import {Route,Switch} from 'react-router-dom'
import NewPaletteForm from './components/NewPaletteForm';

function App() {
  const [palettes,setPalettes] = React.useState([...seedColors])

  function findPalette(id){
    return palettes.find(pal => pal.id === id);
  }
  function savePalette(newPalette){
    setPalettes([...palettes,newPalette])
  }
  return (
    <Switch>
      <Route exact path="/palette/new" 
        render={(routeProps)=> <NewPaletteForm 
                                  savePalette={savePalette} 
                                  {...routeProps}
                                  palettes={palettes}
                                  />
               }
      />
      <Route exact path='/' render={routeProps => <PaletteList palettes={palettes} {...routeProps}/>} />
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
