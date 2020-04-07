import React from 'react'
import {withStyles} from '@material-ui/styles'
import styles from '../style/PaletteFooterStyle'

const PaletteFooter = ({paletteName,emoji,classes}) => {
    return (
        <footer className={classes.paletteFooter}>
                {paletteName}
                <span className={classes.Emoji}>{emoji}</span>
            </footer>
    )
}

export default withStyles(styles)(PaletteFooter)
