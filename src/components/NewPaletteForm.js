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


const drawerWidth = 400;
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
      display: "flex",
      alignItems: "center"
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      height: "calc(100vh - 64px)",//64 is the navbar 
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
    buttons:{
      width:"100%"
    },
    button:{
      width:"50%"
    },
    drewerContainer:{
        width: "90%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
    }
  }));

const NewPaletteForm = ({savePalette,palettes,history,maxColors=20}) => {
    const classes = useStyles();
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

    function randomColor(){
      const allColors = palettes.map(p => p.colors).flat();
      var rand = Math.floor(Math.random() * allColors.length);
      setColorsArray([...colorsArray,allColors[rand]])
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
                     onClick={randomColor} 
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
                  onSortEnd={onSortEnd}/>
        </main>
      </div>
    );
}

export default NewPaletteForm
