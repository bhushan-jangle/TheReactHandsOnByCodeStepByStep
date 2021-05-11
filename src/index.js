import React, { Component, createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom"

//ep 4 functional component
function MyComponent(props){
  return(
    <div>
      <p>{props.id}</p>
      <p>{props.name}</p>
    </div>
  )
}
const element = <MyComponent id="1" name="Bhushan" />

//ep 5 class component
class MyClassComponent extends Component{
  constructor(props){
    super(props);
    console.log(this.props.name);
  }

  render(){
    return(
      <div>
        <p>{this.props.id}</p>
        <p>{this.props.name}</p>
      </div>
    );
  }
}
const Celement = <MyClassComponent id="2" name="Rohit" />

//Ep 6 - state in class component Ex-1
class StateClassComponent extends Component{

  state={ 
    count :0
  }
  INCCounter =() =>{
    this.setState({
      count:this.state.count+1
    })
    
    //alert("button clicked "+this.count +"times");
  }

  render(){
    return(
      <div>
        <button onClick={this.INCCounter}> click me </button>
        <p>click counter : {this.state.count}</p>
      </div>
    )
  }
}

//Ep 6 - state in class component Ex-2
class CharCount extends Component{
  
  state={
    counter:0
  }

  chrCountFn = ()=>{
    this.setState({
      counter:this.state.counter+1
    })
  }

  render(){
    return(
      <div>
        <input type="text" onChange={this.chrCountFn}/>
        <p>Total char : {this.state.counter}</p>
      </div>
    )
  }
}

//EP 7 - communication between component ex-1
class Employee extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <h3>Employee details</h3>
        <p>EMP Id : {this.props.id}</p>
        <p>Name : {this.props.name}</p>
        <p>Salary :{this.props.salary}</p>
        <SalaryDetails Basic={this.props.Basic} HRA={this.props.HRA} SpecialAllowance={this.props.SpecialAllowance}/>
      </div>
    )
  }
}

class SalaryDetails extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <h3>Salary details</h3>
        <p>Basic : {this.props.Basic}</p>
        <p>HRA : {this.props.HRA}</p>
        <p>SpecialAllowance : {this.props.SpecialAllowance}</p>
      </div>
    )
  }
}

const EmpElement = <Employee id="3" name="ram" salary="10000" Basic="8000" HRA="1000" SpecialAllowance="1000"/>

//EP 7 - communication between component ex-2
class Employee1 extends Component{
  constructor(props){
    super(props);
    this.state={
      updateSalary:null
    }
  }

  getUpdatedSalary = (salary) =>{
    this.setState({
      updateSalary: salary
    })
  }

  render(){
    return(
      <div>
        <h3>Employee details</h3>
        <p>EMP Id : {this.props.id}</p>
        <p>Name : {this.props.name}</p>
        <p>Salary :{this.props.salary}</p>
        <p>Updated Salary :{this.state.updateSalary}</p>
        <SalaryDetails1 Basic={this.props.Basic} HRA={this.props.HRA} SpecialAllowance={this.props.SpecialAllowance}
         onSalaryChanged={this.getUpdatedSalary}/>
      </div>
    )
  }
}

class SalaryDetails1 extends Component{
  constructor(props){
    super(props);
    this.state={
      Basic :this.props.Basic,
      HRA : this.props.HRA,
      SpecialAllowance : this.props.SpecialAllowance
    }
  }

  updateSalary = ()=>{
     let salary = parseInt(this.refs.Basic.value) + parseInt(this.refs.HRA.value) + parseInt(this.refs.SpecialAllowance.value);
     this.props.onSalaryChanged(salary);
  }

  render(){
    return(
      <div>
        <h3>Salary details</h3>
        <label >Basic :</label>  <input type="text" ref="Basic" defaultValue={this.props.Basic}/>
        <label >HRA :</label>  <input type="text" ref="HRA" defaultValue={this.props.HRA}/>
        <label >SpecialAllowance :</label>  <input type="text" ref="SpecialAllowance" defaultValue={this.props.SpecialAllowance}/>
        <button onClick={this.updateSalary}>submit</button>
      </div>
    )
  }
}

const EmpElement1 = <Employee1 id="3" name="ram" salary="10000" Basic="8000" HRA="1000" SpecialAllowance="1000"/>

//EP-8 component communication using context
const employeeContext = React.createContext();
class Employee2 extends Component{
  constructor(props){
    super(props);
    this.state={
      Id:1,
      name:"Kappa",
      dept:"CSE",
      salary:"20000"
    }
  }

  render(){
    return(
      <div>
        <p>Employee</p>
        <p>{this.state.Id}</p>
        <p>{this.state.name}</p>
        <employeeContext.Provider value={this.state}>
          <Department2></Department2>
        </employeeContext.Provider>
      </div>
    )
  }
} 

class Department2 extends Component{
  static context = employeeContext;
  
  render(){
    return(
      <div>
        <p>department</p>
        <p>{this.context.Id}</p>
        <Salary2 />
      </div>
    )
  }
}

class Salary2 extends Component{
  static context = employeeContext;
  render(){
    return(
      <div>
        <p>salary</p>
        <p>salary : {this.context.sal}</p>
      </div>
    )
  }
}

//Ep-9 Interaction between React Components
const employee9Context = createContext(
  {
    data:'',
    changeEmployeeInfo: () =>{

    }
  }
);
class App9 extends Component{
  constructor(props){
    super(props);
    this.state={
      data:{
        id:101,
        name:"Rahul",
        dept:"IT",
        salary:10000
      },
      changeEmployeeInfo : this.updateEmployeeInfo
    }
  }
  
  updateEmployeeInfo(){
    this.setState(
      {
        data:{id:102}
      })
  }
  render(){
    return(
      <div>
        <p>App9 Component</p>
        <p>Emp id : {this.state.data.id}</p>
        <employee9Context.Provider value={this.state}>
          <Employee9></Employee9>
        </employee9Context.Provider>
      </div>
    )
  }
}

class Employee9 extends Component{
  static context = employee9Context;
  render(){
    return(
      <div>
        <p>Employee9 Component</p>
        <p>emp id : {this.context.data.id}</p>
        <button onClick={this.context.changeEmployeeInfo}>change id</button>
      </div>
    )
  }
}

// EP -10 Iterating through Lists in React

const employees = [
  {
  id :"1",
  name : "Bhushan"
  },
  {
    id :"2",
    name : "Rohit"
  },
  {
    id :"3",
    name : "Shivam"
  }
]

function DisplayEmp10(props){
  return(
    <div>
      <p>emp id : {props.data.id}</p>
      <p>emp name : {props.data.name}</p>
    </div>
  )
}

function Employee10(props){

  const empList = props.employees;

  const empElement = empList.map((emp)=>
    <DisplayEmp10 key ={emp.id} data = {emp}/>
  );

  return(
    <div> {empElement}</div>
   
  )
}

const element10 = <Employee10 empData={employees} />

ReactDOM.render(
  <React.StrictMode>
    {/* {element}
    {Celement} */}
    {/* <StateClassComponent/> */}
    {/* <CharCount/> */}
    {/* {EmpElement} */}
    {/* {EmpElement1} */}
    {/* <Employee2/> */}
    {/* <App9/> */}
    {/* {element10} */}
    {/* <App data ="Nikku"/> */}
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
