import { useState, useEffect } from "react";
function Title(){
    const [title, setTitle] = useState('Enter input to change title');
    useEffect(()=>{
       document.title=title;

       return ()=>console.log('logout from UI OR title changed');
    },[title]);
 
    function handleChange(event){
       setTitle(event.target.value);
    }
    return(
        <>
        <p>Change the title by typing in the box below.</p>
        <input type="text" value={title} onChange={handleChange}/>
        </>
    )
}

export default Title;






