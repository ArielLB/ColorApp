import React, { useEffect } from 'react';
import {ChromePicker} from 'react-color'
import { Button } from '@material-ui/core';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator'
import { makeStyles } from '@material-ui/core/styles'
import styles from '../style/ColorPickerFormStyles'


const ColorPickerForm = ({currentColor,setCurrentColor,colorsArray,setColorsArray,isPaletteFull}) => {

    const classes = makeStyles(styles)();
    const [newColorName, setNewColorName] = React.useState("");

    useEffect(()=>{
        ValidatorForm.addValidationRule('isColorNameUnique', value=> 
            colorsArray.every(({name}) => name.toLowerCase() !== value.toLowerCase()))
        ValidatorForm.addValidationRule('isColorUnique', () => 
            colorsArray.every(({color}) => color !== currentColor))
    },[colorsArray,currentColor])


    function addNewColor(){
        const newColor = {
            color: currentColor,
            name: newColorName
        }
        setColorsArray([...colorsArray, newColor]);
        setNewColorName('');
    }

    return (
        <div>
          <ChromePicker className={classes.picker} color={currentColor} onChangeComplete={color=>setCurrentColor(color.hex)}/>
          <ValidatorForm onSubmit={addNewColor} instantValidate={false}>
            <TextValidator value={newColorName} 
                           variant='filled'
                           margin="normal"
                           placeholder="Color Name"
                           onChange={e=> setNewColorName(e.target.value)}
                           validators={['required','isColorNameUnique','isColorUnique']}
                           errorMessages={['this field is required','color name must be unique','color already used']}
                           disabled={isPaletteFull}
                           className={classes.colorNameInput}
            />
            <Button 
                variant='contained' 
                color='primary' 
                style={{backgroundColor: isPaletteFull ? 'grey' : currentColor}}
                disabled={isPaletteFull} type='submit'
                className={classes.addColor}
                >{isPaletteFull ? 'Palette Full' : 'ADD COLOR'}    
            </Button>
          </ValidatorForm>
        </div>
    )
}

export default ColorPickerForm
