import React from "react"
import {useEffect, useRef} from "react"

//get prev props value
function PrevProps(props){

    let preval = useRef();

    useEffect(()=>{
        preval.current = props.value;
    })
    let lastVal = preval.current;
    return(
        <div>
            <h3>
               current value : {props.value}
            </h3>
            <h2>
               previous value :  {lastVal}
            </h2>
        </div>
    )
}

export default PrevProps