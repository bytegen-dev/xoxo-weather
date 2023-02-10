import React from "react";

export default function CustomerCare(props){
    const formal = document.getElementById("formal")

    const [buttonVisible, setButtonVisible] = React.useState(false)

    function buttonVisibility(){
        if(formal.checkValidity()){
            setButtonVisible(true)
        } else{
            setButtonVisible(false)
        }
    }


    return (
        <div className={props.className}>
            <div onClick={props.onPrev} className="back"><i className="fa fa-arrow-left" /></div>
            <div className="message">
            <h2>Leave a Message</h2>
                <form id="formal" onSubmit={props.onNext} onInput={buttonVisibility}>

                    <input name="name" type="text" placeholder="name" value={props.name} onChange={props.onChange} required/>

                    <input name="email" type="email" placeholder="email" value={props.email} onChange={props.onChange} required />
                    
                    <textarea name="message" type="text" placeholder="your message" value={props.message} onChange={props.onChange} required />
                    
                    <div>
                    <input onChange={props.onChange} name="bookmeeting" type="checkbox" id="book" checked={props.bookmeeting}/>
                    <label htmlFor="book">Book an online meeting?</label>
                    </div>
                    
                    <button className={buttonVisible ? "show done" : "done"}>{props.messageSending ? "Please Wait" : "Done"}</button>
                </form>
            </div>
            <div className={props.senderVisible ? " show okay" : "okay"}>
                <div className="okay-container">
                    <div onClick={props.onSendXX} className="goback">Back</div>
                    <p>Your Message has been parsed and is ready to be sent</p>
                    <p>Click the button below to Send</p>
                    <a onClick={props.onSendX} href={ props.linkToSend} rel="noreferrer" target="_blank">Send</a>
                </div>
            </div>
            <div className="copyrt">© 2023 XoXo™ weather ⛅</div>
        </div>
    )
}