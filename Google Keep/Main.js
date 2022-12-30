import { Grid } from "@mui/material";
import React, { useState,useEffect } from "react";
import CreateNote from "./CreateNote";
import Footer from "./Footer";
import Nav from "./Nav";
import Note from "./Note";
import swal from 'sweetalert';

const Main = () => {
    const [str,setStr]=useState([])
    const [addItem, setAddItem] = useState([])
    const [editId,setEditId] =useState(null)
    const [toggle,setToggle] =useState(false)
    const [newEdit,setNewEdit] = useState([])

    useEffect(() => {
        localStorage.setItem('finalData', JSON.stringify(str));
      }, [str]);
    const addNote = (note) => {
        setAddItem((prevData) => {
            return [...prevData, note]
        })
    }
    const onDelete = (indx) => {
       swal({
        title:"Note Deleted",
        timer:2000,
        icon:"success",
       })
        setAddItem((del) => del.filter((elem,id)=>id !== indx))
    }
    const onEdit = (id)=>{
         setNewEdit (
            addItem.find((elem,indx)=>{
                return id ===indx
            }))
        setToggle(true)
        setEditId(id)
    }
    console.log(str)
    localStorage.setItem("finaldata",JSON.stringify(str))
    return (
        <>
            <Nav />
            <CreateNote passNote={addNote} setEditId={setEditId} newEdit={newEdit} str={str} setStr={setStr}/>
            <Grid container spacing={2} className="Card">
                {
                    addItem.map((val, index) => {
                        return (
                            <Grid xl={3}>
                                <Note key={index} id={index} title={val.title} content={val.content} delete={onDelete} edit={onEdit} />
                            </Grid>
                        )
                    })
                }
            </Grid>
            <Footer />
        </>
    )
}
export default Main