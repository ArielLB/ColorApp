import React, { useState } from 'react'
import ColorBox from './ColorBox'
import Navbar from './Navbar'
import '../style/Palette.css'



 const Palette = ({palette : {colors, paletteName, emoji}}) => {
    const [format,setFormat] = useState('hex');
    const [level,setLevel] = useState(500);
    const colorBoxes = colors[level].map(color => (
        <ColorBox key={color.id} background={color[format]} name={color.name}/>
    ))
    return (
        <div className='Palette'>
           
            <Navbar level={level} setLevel={setLevel} format={format} setFormat={setFormat}/>
            <div className="Palette-colors"> {colorBoxes}</div>
            <footer className='Palette-footer'>
                {paletteName}
                <span className='emoji'>{emoji}</span>
            </footer>
        </div>
    )
}

export default Palette