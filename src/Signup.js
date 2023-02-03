import React from "react";

export default function Signup(props){
    return (
        <div className={props.className}>
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