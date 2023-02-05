import React from "react";

export default function Search(props){
    return(
        <div className={props.className}>
            <div className="backtoweather" onClick={props.onPrev}><i className="fa fa-arrow-left"/></div>
            <h3>Search</h3>
            <div className="gotohistory"><i className="fa-regular fa-clock"/></div>
            <div className="search-container">
                <form onSubmit={props.onSubmit}>
                    <div className="search-bar">
                    <input placeholder="City"></input>
                    <button><i className="fa fa-search"/></button>
                    </div>
                    <button className="options">advanced <i className="fa fa-gear"/></button>
                </form>
            </div>
            <div className="search-data">
                <h4 className="city--name">XXXX, <span>Nigeria</span></h4>
                <h1>City not Found</h1>
                <div className="weather-details">
                    <div className="weather--condition">
                        <div className="condition">sunny</div>
                        <div className="temp">
                            <span>33°C</span><img src="sunny.png" alt="sun"/>
                        </div>
                        <div className="date">
                            <span>Tuesday</span><span>30 Jun 2023</span>
                        </div>
                    </div>
                    <div className="favourite">
                        <div className="heart">
                            <i className="fa fa-heart"/>
                        </div>
                        <div className="default">
                            <span>Default</span> <div className="setdefault"><i className="fa fa-check"/></div>
                        </div>
                        {/* <img src="favourite--empty.png" /> */}
                    </div>
                    <div className="about--city">
                        about Lagos
                    </div>
                </div>
                <div className="gotosearchend"><i className="fa fa-arrow-down"/></div>
            </div>
        </div>
    )
}