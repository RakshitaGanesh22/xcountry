import React, { useEffect, useRef } from "react";
import axios from "axios";
import { useState } from "react";
import CountryCard from "./contryCard";
export default function Country(){
    const [data,updateData]=useState([])
    useEffect(()=>{
     let apiUrl="https://xcountries-backend.azurewebsites.net/all";
     const ApiData=async ()=>{
         try{
        let ApiData=await axios.get(apiUrl);
        console.log(ApiData)
        updateData(ApiData.data);
     }
     catch(err){
        console.error(`Error fetching data: ${err}`);
     }
     }
     ApiData();
     
     
     
    },[])
    console.log(data);
    return(
        <div style={{display:"flex",flexWrap:"wrap"}}>
            {data.map(ele=>{return (<CountryCard  name={ele.name} flgImag={ele.flag} flagAltText={ele.abbr}/>)} )} 
        </div>
    )
}
// changed