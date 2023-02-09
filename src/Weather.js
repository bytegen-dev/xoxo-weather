import React from "react";

export default function Weather(props){
    const styles = {
        backgroundImage: `linear-gradient(rgb(244, 237, 246), rgba(190, 134, 205, 0.653)), url(${props.backgroundImageLink})`,
        backgroundSize: "cover",
    }


    return (
        <div className={props.className} style={styles}>
            <div className="navbar">
                <div className="hamburger" onClick={props.onClick}>
                    <i className="fa fa-bars"/>
                    <i className="fa fa-close"/>
                </div>
                <div className="city--name">{props.timehr} : {props.timemin}</div>
                <div className="user--login"><i className="fa fa-user"/></div>
            </div>
            <div className="weather-details">
            <h2>{props.cityName}</h2>
                <div className="weather--condition">
                    <div className="temp">
                        {props.cityTemp}°<span>C</span>
                    </div>
                    <div className="condition">{props.cityCondition} <img src= {`https://openweathermap.org/img/wn/${props.cityImg}@2x.png`} alt="sun"/></div>
                    <div className="date">
                        <span>{props.day}</span><span>{props.month} {props.date} {props.year}</span>
                    </div>
                    <div className="other--data">
                        <div className="humidity">Humidity : {props.cityHumidity}%</div>
                        <div className="wind">Wind : {props.cityWindSpeed}km/h</div>
                    </div>
                </div>

                {/* <div className="about--city">
                    about Lagos
                </div> */}
            </div>
            <div className="favourite">
                <div className="heart">
                    <i className="fa fa-heart"/>
                </div>
                <div className={props.cityDefault ? "is default" : "default"}>
                    <span>Default</span> <div className="setdefault"><i className="fa fa-check"/></div>
                </div>
                    {/* <img src="favourite--empty.png" /> */}
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