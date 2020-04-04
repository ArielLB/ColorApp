import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import 'rc-slider/assets/index.css'
import Slider from 'rc-slider'
import '../style/Navbar.css'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Snackbar from '@material-ui/core/Snackbar'
import CloseIcon from '@material-ui/icons/Close'
import { IconButton } from '@material-ui/core'

const Navbar = ({level, setLevel, format, setFormat}) => {
    const [openSnackbar,setOpenSnackbar] = useState(false);
    return (
        <header className='Navbar'>
            <div className="logo">
                <Link to="/">ColorPicker</Link>
            </div>
            <div className="slider-container">
                <span>Level: {level}</span>
                <div className="slider">
                    <Slider defaultValue={level} min={100} max={900} step={100} onAfterChange={level=>setLevel(level)}/>
                </div>
            </div>
            <div className="select-container">
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