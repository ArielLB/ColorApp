import React, { useState } from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import { Link } from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles'
import styles from '../style/ColorBoxStyles'


const ColorBox = ({background,name, moreUrl, showingFullPalette}) => {
    
    const classes = makeStyles(styles({showingFullPalette,background}))();
    const [copied,setCopied] = useState(false);
    const changeCopyStateTemp = () =>{
            setCopied(true);
            setTimeout(()=> setCopied(false),1500);
        };
    
    return (
        <CopyToClipboard text={background} onCopy={changeCopyStateTemp}>
        <div style={{background}} className={classes.colorBox}>
            <div style={{background}} className={`${classes.copyOverlay} ${copied && classes.showOverlay}`}></div>
            <div className={`${classes.copyMessage} ${copied && classes.showMessage}`}>
                <h1>Copied!</h1>
                <p className={classes.copyText}>{background}</p>
            </div>
           <div>
               <div className={classes.boxContent}>
                    <span className={classes.colorName}>{name}</span>
               </div>
               <button className={classes.copyButton}>Copy</button>
           </div>
           {showingFullPalette && (<Link to={moreUrl} onClick={e => e.stopPropagation()}>{/*stops doing effects from the parent - copied animation*/}
                <span className={classes.seeMore}>MORE</span>
           </Link>)}
           
        </div>
        </CopyToClipboard>
    )
}

export default ColorBox
