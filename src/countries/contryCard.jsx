import * as React from 'react';
export default function CountryCard(props){
    const name=props.name;
    const imgs=props.flgImag;
    const abbr=props.flagAltText;
    console.log(props);
    return(
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"200px", height:"200px",border:"2px solid black",borderRadius:"8px",padding:"10px",margin:"10px",gap:"5px"

        }}>
            <img src={imgs} alt={abbr} style={{width:"100px",height:"100px"}}/>
            <h2>{name}</h2>
        </div>
    )
}