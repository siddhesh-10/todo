import React,{useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';

function InputArea(props) {
    


  return (
      <form>
    <div className="form">
    <input className="title" onChange={props.handleChange} type="text" name="title" value={props.title} placeholder="title" required/>
    <textarea className="content" onChange={props.handleChange} type="text" name="content" value={props.content} placeholder="info." rows={props.isexpand ? "4":"0"} required/>
   
     <div className="button">
     
           <Fab color="primary" aria-label="add" onClick={props.addItem} >
         <AddIcon />
        </Fab>
      
        </div>
        
  </div>
  </form>
  );
}

export default InputArea;