import React, { useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Button } from '@material-ui/core';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator'
import { Link } from 'react-router-dom';

const drawerWidth = 400;
const useStyles = makeStyles((theme) => ({
    root:{
        display: "flex"
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        flexDirection: "row",
        justifyContent: "space-between"
      },
      appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      hide: {
        display: 'none',
      },
      navBtns:{

      }
}))

const PaletteFormNav = ({open,setOpen,colorsArray,palettes,savePalette,history}) => {

    const classes = useStyles();
    const [newPaletteName,setNewPaletteName] = React.useState("");

    useEffect(()=>{
        ValidatorForm.addValidationRule('isPaletteNameUnique',value =>
            palettes.every(({paletteName})=> paletteName.toLowerCase() !== value.toLowerCase() ))
    },[palettes])

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
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Create A Palette
            </Typography>
          </Toolbar>
          <div className={classes.navBtns}>
            <ValidatorForm onSubmit={()=>{
                const newPalette = {
                    paletteName: newPaletteName, 
                    id: newPaletteName.toLowerCase().replace(/ /g,"-"),
                    //emoji
                    colors: colorsArray
                }
                savePalette(newPalette)
                history.push('/')
             }}>
            <TextValidator 
                value={newPaletteName} 
                label='Palette Name' 
                onChange={e=> setNewPaletteName(e.target.value)}
                validators={['required','isPaletteNameUnique']}
                errorMessages={['palette name is required','palette name already used']}
            />
            <Button variant='contained' color='primary' type='submit'>
                Save Palette
                </Button>
             </ValidatorForm>
             <Link to='/'>
                  <Button variant='contained' color='secondary'>GO BACK</Button>
                </Link>
             </div>
        </AppBar>
        </div>
    )
}

export default PaletteFormNav
