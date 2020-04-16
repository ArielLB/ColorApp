import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import ColorBox from './ColorBox'
import Navbar from './Navbar'
import PaletteFooter from './PaletteFooter';
import {makeStyles} from '@material-ui/core/styles'
import styles from '../style/PaletteStyles'


const SingleColorPalette = ({palette,colorId}) => {

    const classes = makeStyles(styles)();
    const [format,setFormat] = useState('hex');
    const {paletteName , emoji, id} = palette;
    
    function gatherShades(palette,colorToFilterBy){
        //return all shades of a given color
        let shades=[]
        let allColors = palette.colors
        for(let key in allColors){
            shades = shades.concat(allColors[key].filter(color => color.id === colorToFilterBy))
        }
        return shades.slice(1); 
    }

    const shades = gatherShades(palette,colorId)
    const colorBoxes = shades.map(color => (
        <ColorBox key={color.name} name={color.name} background={color[format]} showingFullPalette={false}/>
    ))
    return (
        <div className={classes.Palette}>
            <Navbar format={format} setFormat={setFormat} hideLevel={true}/>
            <div className={classes.paletteColors}>
                {colorBoxes}
                <div className={classes.goBack}>
                    <Link to={`/palette/${id}`} className={classes.backButton}>GO BACK</Link>
                </div>
            </div>
            <PaletteFooter paletteName={paletteName} emoji={emoji}/>
        </div>
    )
}

export default SingleColorPalette
