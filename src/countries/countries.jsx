import React, { useEffect, useRef } from "react";
import axios from "axios";
import { useState } from "react";
import CountryCard from "./contryCard";
export default function Country(){
    const dat= useRef([])
    useEffect(()=>{
     let apiUrl="https://xcountries-backend.azurewebsites.net/all";
     const ApiData=async ()=>{
         try{
        let ApiData=await axios.get(apiUrl);
        console.log(ApiData)
        dat.current=ApiData.data;
     }
     catch(err){
        console.error("Error fetching data: ");
     }
     }
     ApiData();
     
     
     
    },[])
    console.log(dat.current);
    return(
        <div style={{display:"flex",flexWrap:"wrap"}}>
            {dat.current.map(ele=>{return (<CountryCard element={ele}/>)} )} 
        </div>
    )
}