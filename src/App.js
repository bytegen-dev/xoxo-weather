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

export default function App(){
    const [uiSettings, setUiSettings] = React.useState({
        showMenu : false,
        showGetStarted : true,
        showSignUp : false,
        showLogin : false,
        showWeather : false,
        showPreloader : false,
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
                    {...prevState, count: prevState.count + 1, showSignUp: true, showGetStarted: true}
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
                        count: prevState.count + 1,
                        showLogin : false,
                        showSignUp : false,
                        showWeather : false,
                        showGetStarted : true,
                    }
                )
            }
        )
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

    
    
    return(
        <div className={uiSettings.showMenu? "container show-menu" : "container"}>
            <Preloader className = {uiSettings.showPreloader ? "show preloader type-big" : "preloader type-big"}/>
            
            <Menu className = "menu" onClick = {hamburgerClicked} onClickX = {hamburgerClickedX}/>

            <GettingStarted className = {uiSettings.showGetStarted ? "show gettingstarted type-big" : "gettingstarted type-big"} onClick = {hamburgerClicked} onNext = {goToSignUp} />
            
            <Signup className = {uiSettings.showSignUp ? "show signup type-big" : "signup type-big"} onClick = {hamburgerClicked} onNext = {goToLogin} onPrev = {returnGetStarted}/>
            
            <PreloaderMin className = "preloadermin type-big" onClick = {hamburgerClicked} />
            
            <CustomerCare className = "customer-care type-big" onClick = {hamburgerClicked} />
            
            <Login  className = {uiSettings.showLogin ? "show login type-big" : "login type-big"} onClick = {hamburgerClicked} onNext = {goToWeather}/>
            
            <Weather  className = {uiSettings.showWeather ? "show weather type-big" : "weather type-big"} onClick = {hamburgerClicked}/>

            <Backdrop onClick = {hamburgerClickedX} />
        </div>
    )
}