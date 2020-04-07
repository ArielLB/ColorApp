import React from 'react'
import MiniPalette from './MiniPalette';
import {withStyles} from '@material-ui/styles'
import styles from '../style/PaletteListStyles'


const PaletteList = ({palettes,classes,history}) => {
    function goToPalette(id){
        history.push(`/palette/${id}`);
    }
    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <nav className={classes.nav}>
                    <h1>React Colors</h1>
                </nav>
                <div className={classes.palettes}>
                  {palettes.map(p=>(
                    <MiniPalette {...p} handleClick={()=>goToPalette(p.id)}/>
                  ))}
                </div>
            </div>
        </div>
    )
}

export default withStyles(styles)(PaletteList)
