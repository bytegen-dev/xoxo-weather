import React from "react";

export default function Search(props){
        
    return(
        <div className={props.className}>
            <div className="backtoweather"onChange={props.onChange}  onClick={props.onPrev}><i className="fa fa-arrow-left"/></div>
            <h3>Search</h3>
            <div className="gotohistory"><i className="fa-regular fa-clock"/></div>
            <div className={props.visible ? "show search-container" : "search-container"}>
                <form onSubmit={props.onSubmit}>
                    <div className="search-bar">
                    <input placeholder="City" value={props.cityName} onChange={props.onChange} name = "cityName" required></input>
                    <button><i className="fa fa-search"/></button>
                    </div>
                    {/* <button className="options">advanced <i className="fa fa-gear"/></button> */}
                </form>
            </div>
                <h1>City not Found</h1>
                <div className={props.visible ? "show weather-details" : "weather-details"}>
                    <h2>{props.cityName}</h2>
                    <div className="weather--condition">
                    <div className="temp">
                        {props.cityTemp}°<span>C</span>
                    </div>
                    <div className="condition">{props.cityCondition} <img src= {`https://openweathermap.org/img/wn/${props.cityImg}@2x.png`} alt="sun"/></div>
                        {/* <div className="date">
                            <span>{props.day}</span><span>{props.month} {props.date} {props.year}</span>
                        </div> */}
                        <div className="other--data">
                            <div className="humidity">Humidity : {props.cityHumidity}%</div>
                            <div className="wind">Wind : {props.cityWindSpeed}km/h</div>
                        </div>
                    </div>

                    <div className="favourite">
                        <div className="heart">
                            <i className="fa fa-heart"/>
                        </div>
                        <div className={props.cityDefault ? "is default" : "default"} onClick={props.setDefault}>
                            <span>Default</span> 
                        <div className="setdefault"><i className="fa fa-check"/></div>
                    </div>
                </div>
            </div>
            <div className="gotosearchend"><i className="fa fa-arrow-down"/></div>
        </div>
    )
}