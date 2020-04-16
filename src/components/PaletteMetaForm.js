import React ,{ useEffect } from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator'
import {Picker} from 'emoji-mart'
import 'emoji-mart/css/emoji-mart.css'

const PaletteMetaForm = ({palettes,colorsArray,savePalette,history,setFormShowing}) => {
    const [stage, setStage] = React.useState("form");
    const [newPaletteName,setNewPaletteName] = React.useState("");

    useEffect(()=>{
        ValidatorForm.addValidationRule('isPaletteNameUnique',value =>
            palettes.every(({paletteName})=> paletteName.toLowerCase() !== value.toLowerCase() ))
    },[palettes])
  
    const handleClose = () => {
      setStage(false);
      setFormShowing(false);
    };

    const handleSubmit = emoji => {
        const newPalette = {
            paletteName: newPaletteName, 
            id: newPaletteName.toLowerCase().replace(/ /g,"-"),
            emoji: emoji.native,
            colors: colorsArray
        }
        savePalette(newPalette)
        history.push('/')
    }
  
    return (
        <div>
        <Dialog open={stage === "emoji"} onClose={handleClose}>
             <DialogTitle id="form-dialog-title">Pick an Emoji</DialogTitle>
             <Picker onSelect={emoji => handleSubmit(emoji)}/>
        </Dialog>
        <Dialog open={stage === "form"} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Enter Palette Name</DialogTitle>
          <ValidatorForm onSubmit={()=>setStage('emoji')}>
          <DialogContent>
            <DialogContentText>
              Enter a palette name. the name must be unique.
            </DialogContentText>
            <TextValidator 
                value={newPaletteName} 
                label='Palette Name' 
                fullWidth
                margin='normal'
                onChange={e=> setNewPaletteName(e.target.value)}
                validators={['required','isPaletteNameUnique']}
                errorMessages={['palette name is required','palette name already used']}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button variant='contained' color='primary' type='submit'>
                Save
                </Button>
          </DialogActions>
          </ValidatorForm>
        </Dialog>
        </div>
    );
}

export default PaletteMetaForm
