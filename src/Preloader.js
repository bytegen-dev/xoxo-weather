import React from "react";

export default function Preloader(props){
    const [identity,setIdentity] = React.useState(true)

    React.useEffect(
        function(){
            setTimeout(
                function(){
                    setIdentity(false)
                }
            )
        }
    )


    return (
        <div className={identity?"priority preloader type-big":props.className}>
            <div className="preloader-circle"></div>
            {/* <div className="getting-data"></div> */}
        </div>
    )
}