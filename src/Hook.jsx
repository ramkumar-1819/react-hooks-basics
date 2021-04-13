import React, { Component,useState,useEffect,createContext,useContext } from 'react';
const themes = {
    light: {
      foreground: '#000000',
      background: '#eeeeee',
    },
    dark: {
      foreground: '#ffffff',
      background: '#222222',
    },
  };


const mycontext=createContext(themes)         //creating context initially

export default function Hook(){
    const [count,SetCount]=useState(23);        //useState hook for my age
    const [count1,SetCount1]=useState(13);      //useState hook for my sibling

    const [state,setState]=useState({me:23,sibling:13})  //useState hook with object as value

    const[effect,SetEffect]=useState(0);      //this useState for title 

    
    const theme=useContext(mycontext);         //geting the context created using useContext
    const[style,setStyle]=useState('light')    

    useEffect(()=>{                          //useEffect hook to change the title after every button clicked
        document.title=`You Clicked ${effect} times` 
    })
    const changeColor=()=>{                     //this function is to set color that we used in context 
        setStyle(style==='light'?'dark':'light')
    }
    return(
           <>
           <h1>USESTATE - Using Separate UseState</h1>
           <h3>Today I am {count} years old</h3>
           <h3>I have {count1} Siblings</h3>
           <button onClick={()=>SetCount(prevCount=>prevCount+1)}>Get Older</button>
           <button onClick={()=>SetCount1(prevCount1=>prevCount1+1)}>More Siblings</button>
           
           <h1>USESTATE - Using Object as a state</h1>
           <h3>Today I am {state.me} years old</h3>
           <h3>I have {state.sibling} Siblings</h3>
           <button onClick={()=>setState(prev=>({...prev,me:prev.me+1}))}>GetOlder</button>
           <button onClick={()=>setState(prev=>({...prev,sibling:prev.sibling+1}))}>More Sibling</button>
           
           <h1>USEEFFECT</h1>
           <button onClick={()=>SetEffect(prev=>prev+1)}>Change Title</button>
           
           <h1>USECONTEXT</h1>
           <h3 style={{background:theme[style].background,color:theme[style].foreground}}>Theme</h3>
           <button onClick={changeColor}>Change Style</button>
           </>
    )
}