import React from "react"
import {CommonContext} from "./CommonContext"

class Main extends React.Component{

    render(){
    return(
        <div>
            <CommonContext.Consumer>
                {
                    ({color})=>(
                        <h3 style={{backgroundColor:color}}>Main Page</h3>
                    )
                }
            </CommonContext.Consumer>
        </div>
    )}
}

export default Main