// import { useState,useEffect } from "react";
// function Fetch(){
//     let [country, setCountry] = useState([]);


//     async function fetchData(){
//         try {
//             let res = await fetch('https://reqres.in/api/users');
//             let data = await res.json();
//             setCountry(data);
//             console.log(data);
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     useEffect(()=>{
//         fetchData();
//     },[] );
// }

// export default Fetch;

import { useState, useEffect } from "react";

function Fetch() {
    const [country, setCountry] = useState([]);

    async function fetchData() {
        try {
            const res = await fetch('https://reqres.in/api/users');
            const data = await res.json();
            setCountry(data.data);  
            console.log(data.data);
        } catch (error) {
            console.error("Failed to fetch data:", error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []); // fetchData does not depend on any external variables

    return (
        <div>
            {country.map((ele)=>(
                <div key={ele.id}>
                   <img src={ele.avatar} alt="" />
                   
                </div>
            ))}
        </div>
    );
}

export default Fetch;
