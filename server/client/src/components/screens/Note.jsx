import React from "react";

import DeleteIcon from "@material-ui/icons/Delete";
function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button className="icon" 
      onClick={()=>{
        props.deletenote(props.id)
        }}><DeleteIcon/>
     </button>
    </div>
  );
}

export default Note;
