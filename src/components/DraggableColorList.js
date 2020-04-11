import React from 'react'
import {SortableContainer} from 'react-sortable-hoc'
import DraggableColorBox from './DraggableColorBox'
 
const DraggableColorList = ({colorsArray,deleteColor}) => {
    return (
        <div style={{height: "100%"}}>
            {colorsArray.map((color,i) => 
                (<DraggableColorBox 
                    index={i}
                    color={color.color} 
                    name={color.name} 
                    key={color.name}
                    deleteColor={()=>deleteColor(color.name)}>
                </DraggableColorBox>))}
        </div>
    )
}

export default SortableContainer(DraggableColorList)
