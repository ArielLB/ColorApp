import React from 'react'
import MiniPalette from './MiniPalette';
import {makeStyles} from '@material-ui/core/styles'
import styles from '../style/PaletteListStyles'
import { Link } from 'react-router-dom';
import {CSSTransition,TransitionGroup} from 'react-transition-group'
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import CheckIcon from '@material-ui/icons/Check'
import CloseIcon from '@material-ui/icons/Close'
import Avatar from '@material-ui/core/Avatar';
import blue from '@material-ui/core/colors/blue'
import red from '@material-ui/core/colors/red'


const PaletteList = ({palettes,setPalettes,history}) => {

    const classes = makeStyles(styles)();
    const [open,setOpen] = React.useState(false);
    const [deleteId,setDeleteId] = React.useState('');


    function goToPalette(id){
        history.push(`/palette/${id}`);
    }
    function deletePalette(id){
        setPalettes(palettes.filter(p => p.id !== id))
    }

    function confirmDelete(id){
        setOpen(true);
        setDeleteId(id);
    }

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <nav className={classes.nav}>
                    <h1 className={classes.heading}>React Colors</h1>
                    <Link to='/palette/new'>Create Palette</Link>
                </nav>
                    <TransitionGroup className={classes.palettes}>
                  {palettes.map(p=>(
                      <CSSTransition key={p.id} classNames='fade' timeout={500}>
                    <MiniPalette key={p.id} {...p} handleClick={goToPalette} deletePalette={()=>confirmDelete(p.id)}/>
                    </CSSTransition>
                  ))}
                  </TransitionGroup>
            </div>
            <Dialog open={open} onClose={()=>setOpen(false)}>
                <DialogTitle>Delete Palette?</DialogTitle>
                <List>
                    <ListItem button onClick={()=>{
                                                    deletePalette(deleteId)
                                                    setOpen(false)
                                                  }}>
                        <ListItemAvatar>
                            <Avatar style={{backgroundColor: blue[100],color: blue[600]}}>
                                <CheckIcon/>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText>Delete</ListItemText>
                    </ListItem>
                    <ListItem button onClick={()=>setOpen(false)}>
                        <ListItemAvatar>
                            <Avatar style={{backgroundColor: red[100],color: red[600]}}>
                                <CloseIcon/>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText>Cancel</ListItemText>
                    </ListItem>
                </List>
            </Dialog>
        </div>
    )
}

export default PaletteList
