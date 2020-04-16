import React, { useState } from 'react'
import ColorBox from './ColorBox'
import Navbar from './Navbar'
import {makeStyles} from '@material-ui/core/styles'
import styles from '../style/PaletteStyles'
import PaletteFooter from './PaletteFooter'



 const Palette = ({palette : {colors, paletteName, emoji, id}}) => {
    
    const classes = makeStyles(styles)();
    const [format,setFormat] = useState('hex');
    const [level,setLevel] = useState(500);

    const colorBoxes = colors[level].map(color => (
        <ColorBox key={color.id} background={color[format]} name={color.name} moreUrl={`/palette/${id}/${color.id}`} showingFullPalette={true}/>
    ))
    return (
        <div className={classes.Palette}>
            <Navbar level={level} setLevel={setLevel} format={format} setFormat={setFormat} hideLevel={false}/>
            <div className={classes.paletteColors}> {colorBoxes}</div>
            <PaletteFooter paletteName={paletteName} emoji={emoji}/>
        </div>
    )
}

export default Palette