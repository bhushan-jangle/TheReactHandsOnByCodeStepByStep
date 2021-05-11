import React from "react"
import {withRouter} from "react-router-dom"

function User(props){
    console.log(props.match.params.id);
    return(
        <div>
            <p>user id : {props.match.params.id}</p><br/>
            <p>user name : {props.match.params.name}</p>
        </div>
    )
}
export default withRouter(User)

