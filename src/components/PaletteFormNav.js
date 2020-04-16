import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos'
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import PaletteMetaForm from './PaletteMetaForm'
import styles from '../style/PaletteFormNavStyles'


const PaletteFormNav = ({open,setOpen,colorsArray,palettes,savePalette,history}) => {

    const [formShowing,setFormShowing] = React.useState(false);
    const classes = makeStyles(styles)();
    
    const handleDrawerOpen = () => {
        setOpen(true);
      };

    return (
        <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          color='default'
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <AddToPhotosIcon/>
            </IconButton>
            <Typography variant="h6" noWrap>
              Create A Palette
            </Typography>
          </Toolbar>
          <div className={classes.navBtns}>
             <Link className={classes.link} to='/'>
                  <Button className={classes.button} variant='contained' color='secondary'>GO BACK</Button>
                </Link>
             <Button className={classes.button} variant="contained" color="primary" onClick={()=>setFormShowing(true)}>
                Save Palette
             </Button>
             </div>
        </AppBar>
        {formShowing && 
         (<PaletteMetaForm colorsArray={colorsArray} palettes={palettes} savePalette={savePalette} history={history} setFormShowing={setFormShowing}/>
        )}
        </div>
    )
}

export default PaletteFormNav
