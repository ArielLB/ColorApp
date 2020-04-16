import mediaQueries from './mediaQueries'
import chroma from 'chroma-js'

export default ({color}) => ({
    root: {
        width: "20%",
        height: "25%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-5.3px",
        "&:hover svg": {
            color: chroma(color).luminance() >= 0.7 ? 'rgba(0,0,0,0.7)' : 'white',
            transform: "scale(1.5)"
        },
        [mediaQueries.down('l')]:{
            width:"25%",
            height: "20%"
        },
        [mediaQueries.down('m')]:{
            width:"50%",
            height: "10%"
        },
        [mediaQueries.down('s')]:{
            width:"100%",
            height: "5%"
        },
    },
    boxContent: {
        position: "absolute",
        padding: "10px",
        width: "100%",
        height: "100%",
        left: "0px",
        color: chroma(color).luminance() >= 0.7 ? 'rgba(0,0,0,0.7)' : 'white',
        bottom: "0px",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: "12px",
        display: 'flex',
        justifyContent: 'space-between',
    },
    deleteIcon:{
        transition: "all 0.3s ease-in-out",
    }
})