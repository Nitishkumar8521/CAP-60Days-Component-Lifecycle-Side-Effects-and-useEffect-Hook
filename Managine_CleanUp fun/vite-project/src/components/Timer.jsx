import { useEffect, useState } from "react";

function Timer(){
    const [count,setCount] = useState(100);
    
    useEffect(()=>{
     let id = setInterval(()=>{
        setCount((prev)=>{
            return prev+1;
        });
     },1000);
    console.log('Mount phase');
     return ()=>{
        clearInterval(id);
        console.log('cleanUp function called unMount phase');
     }
    },[])

    return(
        <div>
            <p>{count}</p>
        </div>
    )
}
export default Timer;