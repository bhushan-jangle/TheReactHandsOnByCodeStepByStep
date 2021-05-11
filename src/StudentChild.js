import React from "react"

function StudentChild(props){
    return(
        <div>
            <h3>StudentChild Component</h3>
            <button onClick={props.data}>Call parent function</button>
        </div>
    )
}

export default StudentChild