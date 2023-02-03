import React from "react";

export default function Backdrop(props){
    return (
        <div className="backdrop" onClick={props.onClick}></div>
    )
}