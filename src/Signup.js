import React from "react";

export default function Signup(props){
    const styles = {
        backgroundImage: `linear-gradient(rgb(244, 237, 246), rgba(190, 134, 205, 0.653)), url(${props.backgroundImageLink})`,
        backgroundSize: "cover",
    }
    return (
        <div className={props.className} style={styles}>
            {/* <div className="content"></div> */}
            <div className="returntogetstarted"  onClick={props.onPrev}><i className="fa fa-arrow-left"/></div>
            <h2>Create Account</h2>
            <form onSubmit={props.onNext}>
                <input type="text" required name="username" placeholder="user name"/>
                <input type="email" name="useremail" placeholder="email (optional)"/>
                <input type="password" name="password" placeholder="password" required/>
                <button>Create Account</button>
            </form>
            <div className="gotologin" onClick={props.onNext}>Already have an account? <span>login</span></div>
        </div>
    )
}