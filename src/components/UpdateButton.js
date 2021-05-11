import { Button } from "bootstrap"
import React from "react"
import {CommonContext} from "./CommonContext"

function UpdateButton(){

    return(
        <div>
            <CommonContext.Consumer>
                {
                    ({updateColor})=>(
                        <button onClick={()=>{updateColor("yellow")}}>change color</button>
                    )
                }
            </CommonContext.Consumer>
        </div>
    )
}

export default UpdateButton