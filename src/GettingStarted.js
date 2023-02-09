import React from "react";

export default function GettingStarted(props){
    const styles = {
        backgroundImage: `linear-gradient(rgb(244, 237, 246), rgba(190, 134, 205, 0.653)), url(${props.backgroundImageLink})`,
        backgroundSize: "cover",
    }
    return (
        <div className={props.className} style={styles} onClick = {props.onClickX}>
            {/* Getting Started */}
            <div className="navbar">
                <div className="hamburger" onClick={props.onClick}>
                    <i className="fa fa-bars"/>
                    <i className="fa fa-close"/>
                </div>
                <div className="gotologin">Login</div>
            </div>
            <div className="content">
                <h2>Welcome to</h2>
                <h1>XoXo</h1>
                <h3>weather</h3>
                <p>we hope to</p>
                <p>provide you an</p>
                <p><span>X</span>tra <span>O</span>rdinary</p>
                <p><span>X</span>perience <span>O</span>nline 😉</p>
            </div>
            <div className="gotosignup" onClick={props.onNext}>Get Started</div>
        </div>
    )
}