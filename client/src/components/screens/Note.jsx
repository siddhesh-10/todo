import React, { useState, useEffect, useContext } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import DeleteIcon from "@material-ui/icons/Delete";
import UpdateArea from "./UpdateArea";
function Note(props) {
  const [data, setData] = useState([]);
  const[isexpand,expand]=useState(false);
  const [inote,cnote]=useState({title :"",content :""});
  function update(id,title,content)
  {
     props.upnote(id,title,content);
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <div className="horicon">
      <Popup trigger={<button className="upbtn">
      Update
      </button>} position="right center">
      <div className="popup">
      <UpdateArea title={props.title} content={props.content} id={props.id} updaten={update}/>
      </div>
      </Popup>
      <button className="icon" 
      onClick={()=>{
        props.deletenote(props.id)
        }}><DeleteIcon/>
     </button>
     </div>
    </div>
  );
}

export default Note;
