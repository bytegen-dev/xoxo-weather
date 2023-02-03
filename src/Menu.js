import React from "react";

export default function Menu(props){
    return (
        <div className={props.className}>
            <div className="menu-links-holder">
                <i className="fa fa-cloud-download"/>
            </div>
            <div className="hamburger" onClick={props.onClickX}>
                <i className="fa fa-close"/>
            </div>
        </div>
    )
}