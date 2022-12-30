import React from "react";
import Button from '@mui/material/Button';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import BorderColorIcon from '@mui/icons-material/BorderColor';

const Note =(props)=>{

    const deleteNote = () =>{
        props.delete(props.id)
    }
    const editNote =()=>{
        props.edit(props.id)
    }
    return(
        <>
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <div className="buttons">
            <Button onClick={deleteNote}>
            <DeleteOutlineIcon/>
            </Button>
            <Button onClick={editNote}>
            <BorderColorIcon/>
            </Button>
            </div>
        </div>
        </>
    )
}
export default Note