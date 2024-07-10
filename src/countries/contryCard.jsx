import * as React from 'react';
export default function CountryCard(props){
    console.log(props.element);
    return(
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"200px", height:"200px",border:"2px solid black",borderRadius:"8px",padding:"10px",margin:"10px",gap:"5px"

        }}>
            <img src={props.element.flag} alt={props.element.abbr} style={{width:"100px",height:"100px"}}/>
            <h2>{props.element.name}</h2>
        </div>
    )
}