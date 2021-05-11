import React, { Component,forwardRef,useEffect } from "react"
import { Fragment } from "react"
import StudentChild from "./StudentChild"
import "./Style.css"
function Student1(props){
    //const lStyle = {backgroundColor:}
    return(
        <div>
            <p>Hello {props.name}</p>
        </div>
    )
}

function Student2(props){
    return(
        <div>
            <div>
                <h3>Student Component</h3>
                <button onClick={props.data}>Call parent function</button>
            </div>
            <div>
            <StudentChild data ={props.data}/>
            </div>
        </div>
    )
}



class Student3 extends Component{
    //const lStyle = {backgroundColor:}
    componentWillUnmount(){
        console.log("componentWillUnmount from Student");
      }
    render(){
        return(
            <div>
                <p>Hello Student</p>
            </div>
        )
    }
}

//hooks - useEffect with specific data (props)
function Student4 (props){
    useEffect(()=>{
        console.log("useEffect for count 1");
      },[props.count1])
    
      useEffect(()=>{
        console.log("useEffect for count 2");
      },[props.count2])
    return(
        <div>
            <p>{props.count1}</p>
            <p>{props.count2}</p>
            {console.log("return student")}
        </div>
    )
}

function Student5(props){
    return(
        <React.Fragment>
            <td>{props.data.name}</td>
            <td>{props.data.rollno}</td>
            <td>{props.data.branch}</td>
        </React.Fragment>
    )
}

//lifting up
function Student6(props){
    let email = "abc@gmail.com"
    const students =[
        {
          name:"Bhushan",
          rollno:"41",
          branch:"IT"
        },
        {
          name:"Rohit",
          rollno:"42",
          branch:"CSE"
        },
        {
          name:"Shivam",
          rollno:"43",
          branch:"CSE"
        }
      ]
    return(
        <>
            <h3>Name : {props.data}</h3>
            <button onClick={()=>props.call(students)}>Send data child to parent</button>
        </>
    )
}

//forwardRef
function Student(props,ref) {
    return(
        <div>
            <input type="text" ref={ref}/>
        </div>
    )
}

export default forwardRef(Student) 