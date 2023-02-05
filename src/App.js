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

export default function App(){
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
    
    function goToWeather(event){
        event.preventDefault()
        setUiSettings(
            function(prevState){
                return (
                    {...prevState, count: prevState.count + 1, showWeather: true,showLogin: false, showSignUp: false, showGetStarted: false}
                )
            }
        )
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

    function searchforCity(event){
        event.preventDefault()
        console.log("user searched")
    }

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

    React.useEffect(
        function(){
            function gettingPageInfo(){
                const pageInfo = window.location.search
                const gotopage = new URLSearchParams(pageInfo)
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
                    console.log("weather")
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
                                {...prevState, count: prevState.count + 1, showWeather: false, showSignUp : false, showLogin: false, showGetStarted: true}
                            )
                        }
                    )
                }
            }

            window.addEventListener("load", gettingPageInfo)
        }, []

    )

    
    
    return(
        <div className={uiSettings.showMenu? "container show-menu" : "container"}>
            <Preloader className = {uiSettings.showPreloader ? "show preloader type-big" : "preloader type-big yeah"}/>
            
            <Menu className = "menu" onClick = {hamburgerClicked} onClickX = {hamburgerClickedX}/>

            <GettingStarted className = {uiSettings.showGetStarted ? "show gettingstarted type-big" : "gettingstarted type-big"} onClick = {hamburgerClicked} onNext = {goToSignUp} />
            
            <Signup className = {uiSettings.showSignUp ? "show signup type-big" : "signup type-big"} onClick = {hamburgerClicked} onNext = {goToLogin} onPrev = {returnGetStarted}/>
            
            <PreloaderMin className = "preloadermin type-big" onClick = {hamburgerClicked} />
            
            <CustomerCare className = "customer-care type-big" onClick = {hamburgerClicked} />
            
            <Login  className = {uiSettings.showLogin ? "show login type-big" : "login type-big"} onClick = {hamburgerClicked} onNext = {goToWeather}/>
            
            <Weather  className = {uiSettings.showWeather ? "show weather type-big" : "weather type-big"} onClick = {hamburgerClicked} onNext = {gotoSearch}/>

            <Search className = {uiSettings.showSearch ? "show searchpage type-big": "searchpage type-big"} onPrev = {returntoWeather} onSubmit = {searchforCity}/>

            <Backdrop onClick = {hamburgerClickedX} />
        </div>
    )
}