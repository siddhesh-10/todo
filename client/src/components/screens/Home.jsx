import React, { useState, useEffect, useContext } from "react";


import { UserContext } from "../../App";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

import InputArea from "./InputArea";

function Home() {

  const [data, setData] = useState([]);
  const[isexpand,expand]=useState(false);
  const [inote,cnote]=useState({title :"",content :""});
  
    const [showCom, setCom] = useState();
    const { state, dispatch } = useContext(UserContext);
    const navigate = useNavigate();
    useEffect(() => {
        fetch('/home', {
            headers: {

                "Authorization": "Bearer " + localStorage.getItem('jwt'),
                
            }
        }).then(res => res.json())
            .then(result => {

               
                console.log("checking ")
                setData(result.notes);
                console.log(data);
            })
    }, []);
  function deletenote(id)
  {
    
    console.log("deleting");
    fetch('/delitem', {
      method: "put",
      headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("jwt")
      },
      body: JSON.stringify({
          id:id
      })
  }).then(res => res.json())
      .then(result => {
          //   console.log(result)
          setData([]);
          setData(result.notes);
          cnote({title:"",content:""});
      }).catch(err => {
          console.log(err)
      })
    
  }
  function upnote(id,title,content)
  {
    
    console.log("updating");
    fetch('/upitem', {
      method: "post",
      headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("jwt")
      },
      body: JSON.stringify({
          id:id,
          title:title,
          content:content
      })
  }).then(res => res.json())
      .then(result => {
          //   console.log(result)
          setData([]);
          setData(result.notes);
          cnote({title:"",content:""});
      }).catch(err => {
          console.log(err)
      })
    
  }
  function addItem(event)
  {
    
    if(inote.title==="" || inote.content==="")
    {
      toast.error("fields cannot be empry");
      return;
    }
    console.log("adding");
    fetch('/additem', {
      method: "put",
      headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("jwt")
      },
      body: JSON.stringify({
          title:inote.title,
          content:inote.content,
      })
  }).then(res => res.json())
      .then(result => {
          //   console.log(result)
          setData([]);
          setData(result.notes);
          cnote({title:"",content:""});
      }).catch(err => {
          console.log(err)
      })
   
  }
  function handleChange(e)
  {
     expand(true);

     if(e.target.name==="title")
     {
       cnote({title : e.target.value , content : inote.content});
     }
     else
     {
      cnote({title : inote.title , content : e.target.value});
     }
    
  }
  return (
    <div>
      <Header />
      <InputArea addItem={addItem}  handleChange={handleChange} title={inote.title} content={inote.content} isexpand={isexpand}/>
        {data.map((props) =>{
         return <Note title={props.title} upnote={upnote} content={props.content}  id={props._id} deletenote={deletenote}/>
          
        })}
       
      <Footer />
    </div>
  );
}

export default Home;
