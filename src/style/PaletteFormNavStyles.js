import mediaQueries from './mediaQueries'

const drawerWidth = 400;

export default (theme) => ({
    root:{
        display: "flex"
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
      },
      appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      hide: {
        display: 'none',
      },
      navBtns:{
        marginRight: "1rem",
        [mediaQueries.down('xs')]:{
          marginRight: 0
        }
      },
      button: {
          margin: "0 0.5rem",
          [mediaQueries.down('xs')]:{
            margin: "0 0.2rem",
            padding: "0.3rem"
          }
      },
      link: {
        textDecoration: "none"
      }
})