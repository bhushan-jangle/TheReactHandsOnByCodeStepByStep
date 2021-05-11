import React from "react"
import {Link} from "react-router-dom"


function Nav1(){
    return(
      <div>
        <Link to="/">Home</Link><br/>
        <Link to="/about">About</Link><br/>
      </div>
    )
  }

export default Nav1