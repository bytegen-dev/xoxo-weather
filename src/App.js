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
                    
                    data: {
                        weather: [
                            "nan",
                            "nan"
                        ],
    
                        main: {
                            
                        },

                        wind: {

                        }
                    }
                }
    )
    
    

    React.useEffect(
        function(){

            const fetchData = async () =>{
                const apiKey = "7fdcfe0794387359bd6a79824cbca277"
                const city = localStorage.getItem("defaultCity")
                const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
                const response = await fetch(apiUrl);
                const data = await response.json();
                setWWt(function(prevState){
                    return({
                        ...prevState,
                        data: data
                    })
                });
                // console.log(wwt)
            }

            fetchData()


        }, []
    )

    
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

    // console.log(defaultCityData)

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
            cityName : localStorage.getItem("defaultCity"),
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
        
    
        const [backgroundImage, setBackgroundImage] = React.useState({
            // link: `https://api.unsplash.com/photos/random?query=${localStorage.getItem("defaultCity")}&client_id=SZpCTwjHoLGW-SYW9MR0Jr3ITClDIafoYXgJo6YvRCM`,
            link: `https://source.unsplash.com/1600x900/?city,${localStorage.getItem("defaultCity")}`,
            alt: "backgroundimg",
            // link: `https://cors-anywhere.herokuapp.com/https://api.unsplash.com/photos/random?query=${localStorage.getItem("defaultCity")}&client_id=SZpCTwjHoLGW-SYW9MR0Jr3ITClDIafoYXgJo6YvRCM`
        })

        function newBgImg(){
            const bgImage = `url("https://source.unsplash.com/1600x900/?city,${localStorage.getItem("defaultCity")}")`;
            document.querySelector(".type-big").getElementsByClassName.backgroundImage = bgImage
        }

// wwt.main.humidity, wwt.wind.speed, wwt.main.temp, wwt.weather

    function setDefault(){
        
        if(searchWeatherData.cityDefault === false){
            localStorage.setItem("defaultCity", weatherData.cityName)
            setWWt(ppt)
                setWeatherData(
                    function(){
                        return ({
                            ...searchWeatherData, cityDefault : true
                        })
                    }
                    
                    )
                    
                    setBackgroundImage(
                        function(prevState){
                            return({
                        link: `https://source.unsplash.com/1600x900/?city,${localStorage.getItem("defaultCity")}`,

                    })
                }
            )

            newBgImg()

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

    
    const [ppt, setPpt] = React.useState(
        {
            
            data:{
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
                cod: ""
            },

            count: 0
        }
    )

    const [invalidCity, setInvalidCity] = React.useState(
        {
            visible: false
        }
    )
    
    function searchforCity(event){
        event.preventDefault()
        
        // const apiKey = "7fdcfe0794387359bd6a79824cbca277"
        // const city = searchWeatherData.cityName
        // const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

        // fetch(apiUrl)
        // .then(res => res.json())
        // .then(data => setPpt(data))
        // try{
            //     const res = await fetch(apiUrl)
        //     const data = await res.json()
        //     setWWt(data)
        // console.log(ppt)

        const fetchData = async () =>{
            const apiKey = "7fdcfe0794387359bd6a79824cbca277"
            const city = searchWeatherData.cityName
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
            const response = await fetch(apiUrl);
            const data = await response.json();
            if (data.cod === "404") {
                console.log("invalid")
                    setSearchWeatherData(
                        function(prevState){
                        return (
                            {
                                ...prevState,
                                visible: false
                            }
                        )
                    }

                    )
                    setInvalidCity(function(prevState){
                        return(
                            {...prevState, visible: true}
                            )
                        })
                        return
                    } else{
                        setPpt(
                            function(prevState){
                                return({
                                    ...prevState, data: data,
                                })
                            }
                        );
                        setInvalidCity(function(prevState){
                            return(
                                {...prevState, visible: false}
                    )
                })
                console.log("ppt", ppt)
                setSearchWeatherData(
                    function(prevState){
                    return (
                        {
                            ...prevState,
                            cityAvailable: true,
                            cityTemp : (parseInt(ppt.data.main.temp) - 273.15).toFixed(2),
                            cityHumidity : ppt.data.main.humidity,
                            cityWindSpeed : ppt.data.wind.speed,
                            cityCondition: ppt.data.weather[0].description,
                            cityImg: ppt.data.weather[0].icon,
                            cityDefault: false,
                            visible: true
                        }
                    )
                }
            )
            }
            // console.log(ppt)
        }
        
        fetchData()


        console.log("user searched")
    }

    function searchSaving(event){
        // searchforCity()
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
        


        // console.log(searchWeatherData.cityName)
    }

    // const backgroundImage = `https://api.unsplash.com/photos/random?query=${city}&client_id=YOUR_UNSPLASH_API_KEY`;



    async function clearDataAll(){
        await localStorage.removeItem("visitedBefore")
        await localStorage.setItem("defaultCity", "lagos")
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
    
    function goToWeather(event){
        event.preventDefault()
        setUiSettings(
            function(prevState){
                return (
                    {...prevState, count: prevState.count + 1, showWeather: true,showLogin: false, showSignUp: false, showGetStarted: false}
                )
            }
        )
        
        // const apiKey = "ea4ed7d5e39d7c2705453e9b56a2fdd0"
        
        // fetchData()

        // } catch(error){
        //     alert("poor/no internet connection 💔")
        // }

        // fetchData()


    }

    function invalidCityHide(){
        setInvalidCity(
            function(prevState){
                return (
                    {...prevState, visible: false}
                )
            }
        )
    }
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

            // console.log(
            //     day, date, month, year, timehr, timemin
            // )

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

    // React.useEffect(
    //     function(){
    //         // const city = "new york";
    //         const bgImage = `url("https://source.unsplash.com/1600x900/?city,${localStorage.getItem("defaultCity")}")`;
    //         document.querySelector(".type-big").style.backgroundImage = `linear-gradient(rgb(244, 237, 246), rgba(190, 134, 205, 0.653)), ${bgImage}`
    //         console.log("done")
    //     }, []
    // )

    return(
        <div className={uiSettings.showMenu? "container show-menu" : "container"}>
            <Preloader className = {uiSettings.showPreloader ? "show preloader type-big" : "preloader type-big yeah"}/>
            
            <Menu className = "menu" onClick = {hamburgerClicked} onClickX = {hamburgerClickedX} onClear = {clearDataAll} onNext = {contextMenu} backgroundImageLink={backgroundImage.link}
            backgroundImageAlt={backgroundImage.alt}/>

            <GettingStarted className = {uiSettings.showGetStarted ? "show gettingstarted type-big" : "gettingstarted type-big"} onClick = {hamburgerClicked} onNext = {goToSignUp} backgroundImageLink={backgroundImage.link}
            backgroundImageAlt={backgroundImage.alt}/>
            
            <Signup className = {uiSettings.showSignUp ? "show signup type-big" : "signup type-big"} onClick = {hamburgerClicked} onNext = {goToLogin} onPrev = {returnGetStarted}backgroundImageLink={backgroundImage.link}
            backgroundImageAlt={backgroundImage.alt}/>
            
            <PreloaderMin className = "preloadermin type-big" onClick = {hamburgerClicked} />
            
            <CustomerCare className = "customer-care type-big" onClick = {hamburgerClicked} backgroundImageLink={backgroundImage.link}
            backgroundImageAlt={backgroundImage.alt}/>
            
            <Login  className = {uiSettings.showLogin ? "show login type-big" : "login type-big"} onClick = {hamburgerClicked} onNext = {goToWeather}backgroundImageLink={backgroundImage.link}
            backgroundImageAlt={backgroundImage.alt}/>
            
            <Weather
            timehr={todayDate.hour}
            timemin={todayDate.min}
            day={todayDate.day}
            date={todayDate.date}
            month={todayDate.month}
            year={todayDate.year}
            
            


            backgroundImageLink={backgroundImage.link}
            backgroundImageAlt={backgroundImage.alt}

            cityImg={wwt.data.weather[0].icon}
            cityName={weatherData.cityName}
            cityTemp={(parseInt(wwt.data.main.temp) - 273.15).toFixed(2)}
            cityWindSpeed={wwt.data.wind.speed}
            cityLatitude={weatherData.cityLatitude}
            cityLongitude={weatherData.cityLongitude}
            cityAvailable={weatherData.cityAvailable}
            cityCondition={wwt.data.weather[0].description}
            cityDefault={weatherData.cityDefault}
            cityHumidity={wwt.data.main.humidity}
            className = {uiSettings.showWeather ? "show weather type-big" : "weather type-big"} onClick = {hamburgerClicked} onNext = {gotoSearch}/>

            <Search
            inValidCityHide= {invalidCityHide}
            invalidvisible= {invalidCity.visible}
            visible={searchWeatherData.visible}
            cityName={searchWeatherData.cityName}
            cityImg={ppt.data.weather[0].icon}
            cityTemp={(parseInt(ppt.data.main.temp) - 273.15).toFixed(2)}
            cityWindSpeed={ppt.data.wind.speed}
            cityLatitude={searchWeatherData.cityLatitude}
            cityLongitude={searchWeatherData.cityLongitude}
            cityAvailable={searchWeatherData.cityAvailable}
            cityCondition={ppt.data.weather[0].description}
            cityDefault={searchWeatherData.cityDefault}
            cityHumidity={ppt.data.main.humidity}
            className = {uiSettings.showSearch ? "show searchpage type-big": "searchpage type-big"} onPrev = {returntoWeather} onSubmit = {searchforCity}  onChange = {searchSaving} setDefault={setDefault}/>

            <Settings className = {uxSettings.visible ? "show settings type-big" : "settings type-big"} onClick = {contextMenuX} saveText = {uxSettings.saveText} onSubmit = {contextMenuSubmit} onClear = {clearDataAll}/>

            <Backdrop onClick = {hamburgerClickedX} />
        </div>
    )
}