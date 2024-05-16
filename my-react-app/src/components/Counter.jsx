import { useState } from "react";

function Counter(){
    const [count,setCount] = useState(0);

    return(
        <div>
            <button onClick={()=>{
                setCount(count+1);
            }}>Increase Count</button>
            <br />
            counter:- {count}
            <br />
            <button onClick={()=>{
                setCount(count-1)
            }}>Decrease Count</button>
        </div>
    )
}

export default Counter;