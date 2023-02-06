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

    async function clearDataAll(){
        await localStorage.removeItem("visitedBefore")

        setTimeout(
            function(){
                window.location.reload()
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
                            {...prevState, count: prevState.count + 1, showWeather: false, showSignUp : false, showLogin: false, showGetStarted: true}
                        )
                    }
                )
            }

            // window.addEventListener("loadstart", gettingPageInfo)
        }, []
        
        )
        
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

    
    
    return(
        <div className={uiSettings.showMenu? "container show-menu" : "container"}>
            <Preloader className = {uiSettings.showPreloader ? "show preloader type-big" : "preloader type-big yeah"}/>
            
            <Menu className = "menu" onClick = {hamburgerClicked} onClickX = {hamburgerClickedX} onClear = {clearDataAll} onNext = {contextMenu}/>

            <GettingStarted className = {uiSettings.showGetStarted ? "show gettingstarted type-big" : "gettingstarted type-big"} onClick = {hamburgerClicked} onNext = {goToSignUp} />
            
            <Signup className = {uiSettings.showSignUp ? "show signup type-big" : "signup type-big"} onClick = {hamburgerClicked} onNext = {goToLogin} onPrev = {returnGetStarted}/>
            
            <PreloaderMin className = "preloadermin type-big" onClick = {hamburgerClicked} />
            
            <CustomerCare className = "customer-care type-big" onClick = {hamburgerClicked} />
            
            <Login  className = {uiSettings.showLogin ? "show login type-big" : "login type-big"} onClick = {hamburgerClicked} onNext = {goToWeather}/>
            
            <Weather  className = {uiSettings.showWeather ? "show weather type-big" : "weather type-big"} onClick = {hamburgerClicked} onNext = {gotoSearch}/>

            <Search className = {uiSettings.showSearch ? "show searchpage type-big": "searchpage type-big"} onPrev = {returntoWeather} onSubmit = {searchforCity}/>

            <Settings className = {uxSettings.visible ? "show settings type-big" : "settings type-big"} onClick = {contextMenuX} saveText = {uxSettings.saveText} onSubmit = {contextMenuSubmit} onClear = {clearDataAll}/>

            <Backdrop onClick = {hamburgerClickedX} />
        </div>
    )
}