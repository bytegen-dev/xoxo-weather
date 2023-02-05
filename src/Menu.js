import React from "react";

export default function Menu(props){
    // var clear = false

    const [reset, setReset] = React.useState(false)

    function clearData(){
        setReset(true)
        props.onClear()
        // setTimeout(
        //     function(){
        //         // location.reload()
        //         console.log("failed to clear data")
        //         setReset(false)
        //     }, 2000
        // )
    }

    return (
        <div className={props.className}>
            <div className="menu-links-holder">
                <div className="link active">Home</div>
                <div className="link">Customer Care</div>
                <div className="link">Sign Up</div>
                <div className="link">Log in</div>
                <div className="link">Log Out</div>
                <div className="link">Dark Mode</div>
                <div className="link download-app">
                    {/* <div>D</div> */}Download App
                </div>
                {/* <i className="fa fa-cloud-download"/> */}
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
            <div className="hamburger" onClick={props.onClickX}>
                <i className="fa fa-close"/>
            </div>
        </div>
    )
}