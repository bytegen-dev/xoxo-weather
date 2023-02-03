import React from "react";

export default function Preloader(props){
    return (
        <div className={props.className}>
            <div className="preloader-circle"></div>
            {/* <div className="getting-data"></div> */}
        </div>
    )
}