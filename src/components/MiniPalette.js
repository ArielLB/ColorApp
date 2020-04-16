import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import styles from '../style/MiniPaletteStyles'
import DeleteIcon from '@material-ui/icons/Delete'


const MiniPalette = ({id,paletteName,emoji,colors,handleClick,deletePalette}) => {

   const classes = makeStyles(styles)();
   const miniColorBoxes = colors.map(color=> (
       <div className={classes.miniColor} style={{backgroundColor : color.color}} key={color.name}/>
   ))
    return (
        <div className={classes.root} onClick={()=>handleClick(id)}>
            <DeleteIcon className={classes.deleteIcon} onClick={e => {e.stopPropagation()
                                                                        deletePalette(id)
                                                                     }}/>
            <div className={classes.colors}>
                {miniColorBoxes}
            </div>
            <h5 className={classes.title}>{paletteName}
                <span className={classes.emoji}>{emoji}</span>
            </h5>
        </div>
    )
}

export default MiniPalette
