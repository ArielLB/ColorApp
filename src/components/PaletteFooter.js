import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import styles from '../style/PaletteFooterStyle'

const PaletteFooter = ({paletteName,emoji}) => {
    const classes = makeStyles(styles)();
    return (
        <footer className={classes.paletteFooter}>
                {paletteName}
                <span className={classes.Emoji}>{emoji}</span>
            </footer>
    )
}

export default PaletteFooter
