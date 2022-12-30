import React, { useState } from "react"
import Button from '@mui/material/Button';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import swal from 'sweetalert';
const CreateNote = (props)=>{
    
    console.log(props.newEdit)
    const [note,setNote]=useState({
        title:"",
        content:"",
    });
    const inputEvent =(e)=>{
        const {name,value}=e.target
        setNote((prevData)=>{
            return{
                ...prevData,
                [name]: value,
            }
        })
    }
    console.log(note)
    const addEvent=()=>{
        if(!note.content && !note.title){
            swal({
                title:"Write a note first",
                closeOnClickOutside: false,
              });
        }
        else{
            props.passNote(note)
            setNote({
                title:"",
                content:"",
            });
            props.str.push(note)
        }
    }
    return(
        <>
        <div className="main_note">
            <form>
                <input type='text' name="title" value={note.title} onChange={inputEvent} placeholder="Title" autoComplete="off"/>
                <textarea rows='' column='' name="content" value={note.content} onChange={inputEvent} placeholder="write a note..."></textarea>
                <Button onClick={addEvent}>
                    <AddSharpIcon/>
                </Button>
            </form>
        </div>
        </>
    )
}
export default CreateNote