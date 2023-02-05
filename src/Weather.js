import React from "react";

export default function Weather(props){
    return (
        <div className={props.className}>
            <div className="navbar">
                <div className="hamburger" onClick={props.onClick}>
                    <i className="fa fa-bars"/>
                    <i className="fa fa-close"/>
                </div>
                <div className="city--name">xoxo</div>
                <div className="user--login"><i className="fa fa-user"/></div>
            </div>
            <h2>Lagos</h2>
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
            <div className="searchforcity" onClick={props.onNext}>
                <div className="ripple">
                <i className="fa fa-search" />

                </div>
            </div>
            {/* Weather */}
        </div>
    )
}