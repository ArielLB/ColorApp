import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Slider from 'rc-slider'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Snackbar from '@material-ui/core/Snackbar'
import CloseIcon from '@material-ui/icons/Close'
import { IconButton } from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import styles from '../style/NavbarStyles'
import 'rc-slider/assets/index.css'


const Navbar = ({level, setLevel, format, setFormat, hideLevel}) => {

    const classes = makeStyles(styles)();
    const [openSnackbar,setOpenSnackbar] = useState(false);
    return (
        <header className={classes.Navbar}>
            <div className={classes.logo}>
                <Link to="/">ColorPicker</Link>
            </div>
            {!hideLevel && (
                  <div>
                  <span>Level: {level}</span>
                  <div className={classes.slider}>
                      <Slider defaultValue={level} min={100} max={900} step={100} onAfterChange={level=>setLevel(level)}/>
                  </div>
              </div>
            )}
            <div className={classes.selectContainer}>
                <Select value={format} onChange={e=>{
                                setFormat(e.target.value);
                                setOpenSnackbar(true);}
                    }>
                    <MenuItem value='hex'>HEX - #FFFFF</MenuItem>
                    <MenuItem value='rgb'>RGB - rgb(255,255,255)</MenuItem>
                    <MenuItem value='rgba'>RGBA - rgba(255,255,255,1.0)</MenuItem>
                </Select>
            </div>
            <Snackbar anchorOrigin={{vertical: 'bottom', horizontal: "left"}}
                open={openSnackbar}
                autoHideDuration={2500}
                onClose={()=>setOpenSnackbar(false)}
                message={<span id="message-id">Format Changed to {format}</span>}
                ContentProps={{
                    "aria-describeby": "message-id"
                }}
                action={[
                    <IconButton onClick={()=>setOpenSnackbar(false)} color='inherit' key='close' aria-label='close'>
                        <CloseIcon />
                    </IconButton>
                ]}>
            </Snackbar>
        </header>
    )
}

export default Navbar