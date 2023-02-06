import React from "react";

export default function Menu(props){
    // var clear = false



    return (
        <div className={props.className}>
            {
                <div className="menu-links-holder">
                <div className="link active">Get Started</div>
                <div className="link">Sign Up</div>
                <div className="link">Log in</div>
                {/* <div className="link">Log Out</div> */}
                <a target="_blank" rel="noreferrer" href="https://wa.me/+2347035658853" className="link customer-care"><i className="fa fa-comments"/></a>
                {/* <div className="link">Dark Mode</div> */}
                <div className="link download-app">
                    Download App
                </div>
                <div className="link menu-option" onClick={props.onNext}>Options</div>
                <form className="search link">
                    <button>
                    <i className="fa fa-search" />
                    </button>
                    <input name="search" placeholder="Search"/>
                </form>
            </div>
            }
            {/* {
                <div className="menu-links-holder">
                <div className="link active">Home</div>
                <div className="link">Customer Care</div>
                <div className="link">Sign Up</div>
                <div className="link">Log in</div>
                <div className="link">Log Out</div>
                <div className="link">Dark Mode</div>
                <div className="link download-app">
                    Download App
                </div>
                <form className="search link">
                    <button>
                    <i className="fa fa-search" />
                    </button>
                    <input name="search" placeholder="Search"/>
                </form>
                <div className="trash">
                    <i className="fa fa-trash" />
                    <button onClick={clearData} >{reset? "clearing..." : "Clear Data"}</button>
                </div>
            </div>
            } */}
            <div className="hamburger" onClick={props.onClickX}>
                <i className="fa fa-close"/>
            </div>
        </div>
    )
}