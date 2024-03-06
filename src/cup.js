import React from "react";

let guest = 0;

export default function Cup(){
    guest = guest+1;
    return <h1>guest re-render two times because it wrap under strictmode #{guest}</h1>    
}