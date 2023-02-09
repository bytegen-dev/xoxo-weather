import React from "react";

export default function Login(props){
    const styles = {
        backgroundImage: `linear-gradient(rgb(244, 237, 246), rgba(190, 134, 205, 0.653)), url(${props.backgroundImageLink})`,
        backgroundSize: "cover",
    }
    return (
        <div className={props.className} style={styles}>
            {/* Login */}
            <div className="navbar">
                <div className="hamburger" onClick={props.onClick}>
                    <i className="fa fa-bars"/>
                    <i className="fa fa-close"/>
                </div>
            </div>
            <h2>LOGIN</h2>
            <form onSubmit={props.onNext}>
                <input name="username" type="text" required placeholder="user name"/>
                <input name="password" type="password" required placeholder="password"/>
                <div className="gotoforgotpassword">forgot password?</div>
                <button className="gotoweather">LOGIN</button>
            </form>
        </div>
    )
}