import React from "react";

export default function Settings(props){
    function premiumUser(){
        alert("You are already a Premium User 💕")
    }

    const [reset, setReset] = React.useState(false)

    function clearData(){
        setReset(true)
        props.onClear()
        
    }


    return (
        <div className={props.className}>
            <div className="settings-backdrop" onClick={props.onClick}></div>
            <div className="settings-container">
                <form onSubmit={props.onSubmit}>
                <div className="darkmode">
                    <div>
                        <label htmlFor = "darktheme">night mode</label>
                        < input type="checkbox" id="darktheme" name="darkmode"/>
                    </div>
                </div>
                <div className="datasavings">
                    <div>
                        <label htmlFor = "datasavings">data saver</label>
                        < input type="checkbox" id="datasavings" name="datasavings"/>
                    </div>
                </div>
                <button>{props.saveText}</button>
                </form>
                <div className="premium" onClick={premiumUser}>Premium <i className="fa fa-dollar"/></div>
                <div className="clear"></div>
            </div>
            <div className="trash">
                <i className="fa fa-trash" />
                <button onClick={clearData} >{reset?"clearing..." : "Clear Data"}</button>
            </div>
        </div>
    )
}