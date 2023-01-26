import React,{useState} from "react";

function UpdateArea(props) {
    const [inote,cnote]=useState({title :props.title,content :props.content});
    function handleChange(e)
    {
      
       if(e.target.name==="title")
       {
         cnote({title : e.target.value , content : inote.content});
       }
       else
       {
        cnote({title : inote.title , content : e.target.value});
       }
      
    }
    function submit()
    {
        props.updaten(props.id,inote.title,inote.content);
    }

  return (
    <div>
    
    <input className="titleu" onChange={handleChange} type="text" name="title" value={inote.title} placeholder="title" required/>
    <textarea className="contentu" onChange={handleChange} type="text" name="content" value={inote.content} rows={7} cols={5} required/>
    <button onClick={submit}>Update</button>
  </div>
  );
}

export default UpdateArea;