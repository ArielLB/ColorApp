import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import { Button } from '@material-ui/core'
import DraggableColorList from './DraggableColorList'
import {arrayMove} from 'react-sortable-hoc'
import PaletteFormNav from './PaletteFormNav'
import ColorPickerForm from './ColorPickerForm'
import styles from '../style/NewPaletteFormStyles'
import seedColors from '../seedColors'


const NewPaletteForm = ({savePalette,palettes,history,maxColors=20}) => {
    const classes = makeStyles(styles)();
    const [open, setOpen] = React.useState(false);
    const [currentColor,setCurrentColor] = React.useState('teal');
    const [colorsArray,setColorsArray] = React.useState([]);
    
    const isPaletteFull = colorsArray.length >= maxColors;
  
   
    const handleDrawerClose = () => {
      setOpen(false);
    };


    function deleteColor(colorName){
        setColorsArray(colorsArray.filter(color => color.name !== colorName))
    }

    const onSortEnd = ({oldIndex,newIndex}) => {
        setColorsArray(arrayMove(colorsArray,oldIndex,newIndex))
    }

    function clearColors(){
      setColorsArray([]);
    }

    function addRandomColor(){
      let emptyData = (!palettes || palettes.length === 0) ? true : false 
      const allColors = emptyData ? seedColors.map(p => p.colors).flat() : palettes.map(p => p.colors).flat(); 
      let rand;
      let randomColor;
      let found = true;
      while(found){
        rand = Math.floor(Math.random() * allColors.length);
        randomColor = allColors[rand];
        found = allColors.includes(randomColor.name)
      }
      setColorsArray([...colorsArray,randomColor])
    }

    return (
      <div className={classes.root}>
        <PaletteFormNav open={open}
                        setOpen={setOpen} 
                        palettes={palettes} 
                        colorsArray={colorsArray}
                        savePalette={savePalette}
                        history={history}/>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <div className={classes.drewerContainer}>
          <Typography variant='h4' gutterBottom>
              Design Your Palette
          </Typography>
          <div className={classes.buttons}>
             <Button className={classes.button} 
                     variant='contained' 
                     color='secondary' 
                     onClick={clearColors}>Clear Palette</Button>
             <Button className={classes.button} 
                     variant='contained' 
                     color='primary' 
                     onClick={addRandomColor} 
                     disabled={isPaletteFull}>Random Color</Button>
          </div>
          <ColorPickerForm currentColor={currentColor} 
                           setCurrentColor={setCurrentColor} 
                           isPaletteFull={isPaletteFull}
                           colorsArray={colorsArray}
                           setColorsArray={setColorsArray}/>
          
          </div> 
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
              <DraggableColorList 
                  colorsArray={colorsArray} 
                  deleteColor={deleteColor} 
                  axis="xy"
                  distance={20} 
                  onSortEnd={onSortEnd}/>
        </main>
      </div>
    );
}

export default NewPaletteForm
