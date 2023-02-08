import React from "react";
import Preloader from "./Preloader";
import GettingStarted from "./GettingStarted";
import Signup from "./Signup";
import PreloaderMin from "./Preloader-min";
import CustomerCare from "./CustomerCare";
import Login from "./Login";
import Weather from "./Weather";
import Menu from "./Menu";
import Backdrop from "./Backdrop";
import Search from "./Search";
import queryString from "query-string";
import Settings from "./Settings";

export default function App(){
    // console.clear()
    const [uiSettings, setUiSettings] = React.useState({
        showMenu : false,
        showGetStarted : true,
        showSignUp : false,
        showLogin : false,
        showWeather : false,
        showPreloader : false,
        showSearch : false,
        count: 0
    })

    const [browserSet, setBrowserSet] = React.useState({
        isLoggedIn : false
    })
    

    function hamburgerClicked(){
        console.log("hamburger-clicked")
        setUiSettings(
            function(prevState){
                return (
                    {...prevState, showMenu: !prevState.showMenu}
                )
            }
        )
    }

    function goToSignUp(){
        setUiSettings(
            function(prevState){
                return (
                    {...prevState, showSignUp: true, showGetStarted: false}
                )
            }
        )
    }
    
    function goToLogin(event){
        event.preventDefault()
        setUiSettings(
            function(prevState){
                return (
                    {...prevState, count: prevState.count + 1, showLogin: true, showSignUp: false, showGetStarted: false}
                    )
                }
                )
            }
    const [wwt, setWWt] = React.useState(
                {
                    main: {
                        temp: "",
                        humidity: "",
                    },
                    
                    wind: {
                        speed: "",
                    },
        
                    weather:[
                        "description",
                        "icon"
                    ],
        
                    count: 0
                }
    )
            
    async function goToWeather(event){
        event.preventDefault()
        // const apiKey = "ea4ed7d5e39d7c2705453e9b56a2fdd0"
        const apiKey = "7fdcfe0794387359bd6a79824cbca277"

        const city = "lagos"
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
        // fetch(apiUrl)
        try{
            const res = await fetch(apiUrl)
            const data = await res.json()
            await setWWt(data)
            
            await setWeatherData(
                function(prevState){
                    return (
                        {
                            ...prevState,
                            cityName : "Lagos",
                            cityTemp : (parseInt(wwt.main.temp) - 273.15).toFixed(2),
                            cityHumidity : wwt.main.humidity,
                            cityWindSpeed : wwt.wind.speed,
                            cityCondition: wwt.weather[0].description,
                            cityImg: wwt.weather[0].icon,
                            // count: prevState.count + 1
                            // count: 1
                        }
                    )
                }
            )

            setUiSettings(
                function(prevState){
                    return (
                        {...prevState, count: prevState.count + 1, showWeather: true,showLogin: false, showSignUp: false, showGetStarted: false}
                    )
                }
            )
        } catch(error){
            alert(error)
        }
        async function fetchData(){
            // .then(res => res.json())
            // .then(data => setWWt(data))
            // .catch(error => console.error(error))



        }

        fetchData()


    }
    
    function hamburgerClickedX(){
        console.log("hamburger-closed")
        setUiSettings(
            function(prevState){
                return (
                    {...prevState, showMenu: false}
                )
            }
        )
    }
    
    function returnGetStarted(){
        setUiSettings(
            function(prevState){
                return (
                    {
                        ...prevState,
                        showLogin : false,
                        showSignUp : false,
                        showWeather : false,
                        showGetStarted : true,
                    }
                )
            }
        )
    }
    
    function gotoSearch(){
        setUiSettings(
            function(prevState){
                return (
                    {...prevState, showSearch : true}
                )
            }
        )
    }

    function returntoWeather(){
        setUiSettings(
            function(prevState){
                return (
                    {...prevState, showSearch : false}
                )
            }
        )
    }

    const [defaultCityData, setDefaultCityData] = React.useState({
        // cityAvailable: true,
        // cityDefault: true,
        cityName : "Lagos",
        cityTemp : "45",
        cityWindSpeed : "3.6",
        cityLongitude : "1200",
        cityLatitude : "110",
        cityImg : "",
        cityHumidity: "66",
        cityCondition: "sunny"
    })

    console.log(defaultCityData)

    React.useEffect(
        function(){
            setDefaultCityData(
                (prevState)=>{
                    return ({...prevState})
                }
            )
        }, []
    )

    const [weatherData, setWeatherData] = React.useState(
        {
            cityAvailable: true,
            cityDefault: true,
            cityName : "Lagos",
            cityTemp : "45",
            cityWindSpeed : "3.6",
            cityLongitude : "1200",
            cityLatitude : "110",
            cityImg : "",
            cityHumidity: "66",
            cityCondition: "sunny",
            count: 0
        }
        )
        
    const [searchWeatherData, setSearchWeatherData] = React.useState(
        {
            cityAvailable: true,
            cityDefault: false,
            cityName : "",
            cityTemp : "Nan",
            cityWindSpeed : "Nan",
            cityLongitude : "Nan",
            cityLatitude : "Nan",
            cityImg : "Nan",
            visible: false,
            cityHumidity: "Nan",
            cityCondition: "Nan"
        }
        )
        
    

// wwt.main.humidity, wwt.wind.speed, wwt.main.temp, wwt.weather

    function setDefault(){
        
        if(searchWeatherData.cityDefault === false){
            localStorage.setItem("defaultCity", weatherData.cityName)
            setWeatherData(
                function(){
                    return ({
                        ...searchWeatherData, cityDefault : true
                    })
                }
            )
            setSearchWeatherData(
                function(prevState){
                    return(
                        {
                            ...prevState,
                            cityDefault: true
                        }
                    )
                }
            )
        } else {
            localStorage.setItem("defaultCity", defaultCityData.cityName)
            setSearchWeatherData(
                function(prevState){
                    return(
                        {
                            ...prevState,
                            cityDefault: false
                        }
                    )
                }
            )
        }


    }

    function searchSaving(event){
        setSearchWeatherData(
            function(prevState){
                return(
                    {
                        ...prevState,
                        cityName: event.target.value
                    }
                )
            }
        )

        console.log(searchWeatherData.cityName)
    }

    function searchforCity(event){
        event.preventDefault()
        console.log("user searched")
        setSearchWeatherData(
            function(prevState){
                return (
                    {
                        ...prevState,
                        cityAvailable: true,
                        cityTemp: "33.4",
                        cityHumidity: "66",
                        cityWindSpeed: "2.4",
                        cityLongitude: "140",
                        cityLatitude: "2400",
                        cityImg: "",
                        cityDefault: false,
                        cityCondition: "sunny",
                        visible: true
                    }
                )
            }
        )
    }


    async function clearDataAll(){
        await localStorage.removeItem("visitedBefore")
        // window.location.search
        // new URLSearchParams(window.location.search).delete()

        setTimeout(
            function(){
                window.open("https://xo-weather.netlify.app", "_self")
            }, 1000
            )
    }

    const [uxSettings, setUxSettings] = React.useState({
        darkMode: false,
        visible: false,
        dataSaving: false,
        premiumAcct:false,
        saveText: "Save"
    })

    const [todayDate, setTodayDate] = React.useState(
        {
            day: "Monday",
            date: "1",
            month: "January",
            year: "2023"
        }
    )
        
    React.useEffect(
        function(){

            // async function getData(){
            // }
            const dateInfo =  new Date()
            let timehr = dateInfo.getHours()
            let timemin = dateInfo.getMinutes()
            let day = dateInfo.getDay()
            const date = dateInfo.getDate()
            let month = dateInfo.getMonth()
            const year = dateInfo.getFullYear()

            if(day === 0){
                day = "Sunday"
            } else if(day === 1){
                day = "Monday"
            } else if(day === 2){
                day = "Tuesday"
            } else if(day === 3){
                day = "Wednesday"
            } else if(day === 4){
                day = "Thursday"
            } else if(day === 5){
                day = "Friday"
            } else if(day === 6){
                day = "Saturday"
            }

            if(month === 0){
                month = "January"
            } else if(month === 1){
                month = "February"
            } else if(month === 2){
                month = "March"
            } else if(month === 3){
                month = "April"
            } else if(month === 4){
                month = "May"
            } else if(month === 5){
                month = "June"
            } else if(month === 6){
                month = "July"
            } else if(month === 7){
                month = "August"
            } else if(month === 8){
                month = "September"
            } else if(month === 9){
                month = "October"
            } else if(month === 10){
                month = "November"
            } else if(month === 11){
                month = "December"
            }

            console.log(
                day, date, month, year, timehr, timemin
            )

            setTodayDate(
                function(prevState){
                    return(
                        {
                            ...prevState,
                            day: day,
                            date: date,
                            month: month,
                            year: year,
                            hour: timehr,
                            min: timemin
                        }
                    )
                }
            )

            // window.addEventListener("load", getData)

        }, [uiSettings]
    )

    function contextMenu(event){
        event.preventDefault()
        setUxSettings(
            function(prevState){
                return(
                    {...prevState, visible : true, saveText : "Save"}
                )
            }
        )
    }

    function contextMenuX(){
        // event.preventDefault()
        setUxSettings(
            function(prevState){
                return(
                    {...prevState, visible : false}
                )
            }
        )
    }

    function contextMenuSubmit(event){
        event.preventDefault()
        setUxSettings(
                function(prevState){
                    return(
                        {...prevState, saveText: "Saving"}
                    )
                }
        )

        setTimeout(
            contextMenuX, 1000
        )

        // setUxSettings(
        //     function(prevState){
        //         return(
        //             {...prevState, visible : false}
        //         )
        //     }
        // )
    }

    window.addEventListener(
        "contextmenu", contextMenu
    )

    React.useEffect(
        function(){
            setUiSettings(
                function (prevState){
                    return (
                        {
                            ...prevState, showPreloader: true
                        }
                    )
                }
                    
            )
            setTimeout(
                function(){
                    setUiSettings(
                        function(prevState){
                            return (
                                {
                                    ...prevState, showPreloader: false
                                }
                                )
                            }
                            )
                        }, 1000
            )
        }, [uiSettings.count]
    )

    console.log(browserSet)
    
    
    React.useEffect(
            function(){
                const hasLoggedIn = localStorage.getItem("visitedBefore")
                if (hasLoggedIn){
                    setBrowserSet(
                        {isLoggedIn : true}
                        )
                        setUiSettings(
                            function(prevState){
                                return (
                                    {...prevState, count: prevState.count + 1, showWeather: false, showSignUp : false, showLogin: true, showGetStarted: false}
                                )
                            }
                        )
                    } else {
                localStorage.setItem("visitedBefore", true)
                setUiSettings(
                    function(prevState){
                        return (
                            {...prevState, count: prevState.count + 1, showWeather: false, showSignUp : false, showLogin: false, showGetStarted: true}
                        )
                    }
                )
            }
            
            if (hasLoggedIn){
                console.log("weather")
            }
        }, []
    )

    
    
    React.useEffect(
        function(){
            // const pageInfo = window.location.search
            // const gotopage = new URLSearchParams(pageInfo)
            // gotopage.get("container")
            const query = queryString.parse(window.location.search)
            const container = query.container

            if (container === "login"){
                console.log("go to login")
                setUiSettings(
                    function(prevState){
                        return (
                            {...prevState, count: prevState.count + 1, showLogin: true, showSignUp: false, showGetStarted: false}
                        )
                    }
                )
                
            } else if (container === "signup"){
                console.log("signup")
                setUiSettings(
                    function(prevState){
                        return (
                            {...prevState, count: prevState.count + 1, showSignUp: true, showLogin: false, showGetStarted: false}
                        )
                    }
                )
            } else if (container === "weather"){
                console.log("weather")
                setUiSettings(
                    function(prevState){
                        return (
                            {...prevState, count: prevState.count + 1, showWeather: true, showSignUp : false, showLogin: false, showGetStarted: false}
                        )
                    }
                )
            } else if (container === "search"){
                console.log("search")
                setUiSettings(
                    function(prevState){
                        return (
                            {...prevState, count: prevState.count + 1, showWeather: true, showSearch:true, showSignUp : false, showLogin: false, showGetStarted: false}
                        )
                    }
                )
            } else{
                console.log("default")
                setUiSettings(
                    function(prevState){
                        return (
                            {...prevState, count: prevState.count + 1}
                        )
                    }
                )
            }

            // window.addEventListener("loadstart", gettingPageInfo)
        }, []
    )
    return(
        <div className={uiSettings.showMenu? "container show-menu" : "container"}>
            <Preloader className = {uiSettings.showPreloader ? "show preloader type-big" : "preloader type-big yeah"}/>
            
            <Menu className = "menu" onClick = {hamburgerClicked} onClickX = {hamburgerClickedX} onClear = {clearDataAll} onNext = {contextMenu}/>

            <GettingStarted className = {uiSettings.showGetStarted ? "show gettingstarted type-big" : "gettingstarted type-big"} onClick = {hamburgerClicked} onNext = {goToSignUp} />
            
            <Signup className = {uiSettings.showSignUp ? "show signup type-big" : "signup type-big"} onClick = {hamburgerClicked} onNext = {goToLogin} onPrev = {returnGetStarted}/>
            
            <PreloaderMin className = "preloadermin type-big" onClick = {hamburgerClicked} />
            
            <CustomerCare className = "customer-care type-big" onClick = {hamburgerClicked} />
            
            <Login  className = {uiSettings.showLogin ? "show login type-big" : "login type-big"} onClick = {hamburgerClicked} onNext = {goToWeather}/>
            
            <Weather
            timehr={todayDate.hour}
            timemin={todayDate.min}
            day={todayDate.day}
            date={todayDate.date}
            month={todayDate.month}
            year={todayDate.year}





            cityImg={weatherData.cityImg}
            cityName={weatherData.cityName}
            cityTemp={weatherData.cityTemp}
            cityWindSpeed={weatherData.cityWindSpeed}
            cityLatitude={weatherData.cityLatitude}
            cityLongitude={weatherData.cityLongitude}
            cityAvailable={weatherData.cityAvailable}
            cityCondition={weatherData.cityCondition}
            cityDefault={weatherData.cityDefault}
            cityHumidity={weatherData.cityHumidity}
            className = {uiSettings.showWeather ? "show weather type-big" : "weather type-big"} onClick = {hamburgerClicked} onNext = {gotoSearch}/>

            <Search
            visible={searchWeatherData.visible}
            cityName={searchWeatherData.cityName}
            cityTemp={searchWeatherData.cityTemp}
            cityWindSpeed={searchWeatherData.cityWindSpeed}
            cityLatitude={searchWeatherData.cityLatitude}
            cityLongitude={searchWeatherData.cityLongitude}
            cityAvailable={searchWeatherData.cityAvailable}
            cityCondition={searchWeatherData.cityCondition}
            cityDefault={searchWeatherData.cityDefault}
            cityHumidity={searchWeatherData.cityHumidity}
            className = {uiSettings.showSearch ? "show searchpage type-big": "searchpage type-big"} onPrev = {returntoWeather} onSubmit = {searchforCity}  onChange = {searchSaving} setDefault={setDefault}/>

            <Settings className = {uxSettings.visible ? "show settings type-big" : "settings type-big"} onClick = {contextMenuX} saveText = {uxSettings.saveText} onSubmit = {contextMenuSubmit} onClear = {clearDataAll}/>

            <Backdrop onClick = {hamburgerClickedX} />
        </div>
    )
}