import mediaQueries from './mediaQueries'
import background from '../background.svg'

export default ()=> ({
    root: {
        backgroundColor: "#2050aa",
        backgroundImage: `url(${background})`,
        height: "100vh",
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        overflow: "scroll"
    },
    heading:{
        fontSize: "1.8rem"
    },
    container: {
        width: '50%',
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        flexWrap: 'wrap',
        [mediaQueries.down('xl')]:{
            width: "80%"
        },
        [mediaQueries.down('xs')]:{
            width: "75%"
        }
    },
    nav: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: "center",
        color: 'white',
        "& a" : {
            color: "white"
        }
    },
    palettes: {
        boxSizing: 'border-box',
        width: "100%",
        display: 'grid',
        gridTemplateColumns: "repeat(3, 30%)",
        gridGap: '5%',
        [mediaQueries.down('xs')]:{
            gridTemplateColumns: "repeat(1, 100%)",
            gridGap: '4%'
        },
        [mediaQueries.down('m')]:{
            gridTemplateColumns: "repeat(2, 50%)"
        },
    },
    "@global":{
        ".fade-exit": {
            opacity: 1
        },
        ".fade-exit-active":{
            opacity: 0,
            transition: "opacity 500ms ease-out"
        }
    }
})