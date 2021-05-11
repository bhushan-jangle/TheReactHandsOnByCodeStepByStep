import React, { Component, useState, useEffect, createRef } from "react"
import Student from "./Student"
import "./Style.css"
import style from "./style.module.css"
import { Button, Alert, Table, Input } from "react-bootstrap"
import { PureComponent, useMemo, useRef } from "react"
import { BrowserRouter, Link, Route, Switch } from "react-router-dom"
import Home1 from "./Home1"
import About1 from "./About1"
import Nav1 from "./Nav1"
import User from "./User"
import PrevProps from "./PrevProps"
import {CommonContext} from "./components/CommonContext"
import Main from "./components/Main"
import UpdateButton from "./components/UpdateButton"

//functional component
function App1() {
  const [data, setData] = useState(0);
  function Update1() {
    setData(data + 1)
  }
  return (
    <div>
      <p>{data}</p>
      <button onClick={Update1}>change</button>
    </div>
  )
}

//class component using state
class App4 extends React.Component {
  constructor() {
    super();
    this.state = {
      data: 1
    }
  }

  Update = () => {
    this.setState({ data: this.state.data + 1 });
  }

  render() {
    return (
      <div>
        <p>{this.state.data}</p>
        <button onClick={this.Update}>change</button>
      </div>
    )
  }
}

class App3 extends React.Component {
  render() {
    return (
      <div>
        <p>{this.state.data}</p>
        <button onClick={this.Update}>change</button>
      </div>
    )
  }

}

//change counter by using function
function App5() {
  const [data, setData] = useState(0)
  function update() {
    setData(data + 1);
  }

  return (
    <>
      <Student name={data} />
      <button onClick={() => { setData(data + 1) }}>Click Me!!!</button>
    </>
  )
}

//change string by using class
class App6 extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Nikku"
    }
  }

  Change = () => {
    this.setState({ name: "Nayan" });
  }

  render() {
    return (
      <div>
        <p>Hello {this.state.name}</p>
        <button onClick={this.Change}>Update</button>
      </div>
    );
  }
}

//conditional show result
function App7() {
  const [data, setData] = useState('');
  const [print, setPrint] = useState(false);
  function GetValue(val) {
    //console.log(val.target.value)
    setData(val.target.value);
    setPrint(false)
  }

  return (
    <div>
      <input type="text" onChange={GetValue} />
      <button onClick={() => { setPrint(true) }}>Get</button>
      <p>{print ? data : ""}</p>
    </div>
  )
}

//Jsx element hiding
function App8() {
  const [status, setStatus] = useState(false)
  return (
    <div>
      { status ? <p>Hello Walkie</p> : ""}
      {/* <button onClick={()=>setStatus(true)}>Show</button>
      <button onClick={()=>setStatus(false)}>Hide</button> */}
      <button onClick={() => setStatus(!status)}>change</button>
    </div>
  )
}

//counter ex by using function
function App9() {
  const [name, setName] = useState(0)
  function update() {
    setName(name + 1);
  }
  return (
    <div>
      <p>{name}</p>
      <button onClick={() => { update() }}>change</button>
    </div>
  )
}

//counter ex by using class
class App10 extends Component {
  constructor() {
    super();
    this.state = {
      name: 0
    }
  }
  render() {
    return (
      <div>
        <p>{this.state.name}</p>
        <button onClick={() => { this.setState({ name: this.state.name + 1 }) }}>clicked me</button>
      </div>
    )
  }
}

//form handling
function App11() {
  const [name, setName] = useState("");
  const [movie, setMovie] = useState("");
  const [tnc, setTnc] = useState(false);
  function getFormData(e) {
    console.log(name, movie, tnc);
    e.preventDefault();

  }
  return (
    <div>
      <form onSubmit={getFormData}>
        Name : <input type="text" onChange={(e) => setName(e.target.value)} /><br /><br />
        Select Movie : <select type="text" onChange={(e) => setMovie(e.target.value)}>
          <option >Select Movie</option>
          <option >Titanic</option>
          <option >Batman</option>
          <option >Spiderman</option>
        </select><br /><br />
        <input type="checkbox" onChange={(e) => setTnc(e.target.checked)} /><span>Agreed to terms and condition</span><br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

//conditional rendering
function App12() {
  const [status, setStatus] = useState(3);
  //let status =3; //valid
  return (
    <div>
      {status == 1 ? <h1>Hello Nayan</h1> : status == 2 ? <h1>Hello Nikku</h1> : <h1> Hello Sanu</h1>}
    </div>
  )
}

//pass a function from parent to child component
function App13() {
  function ShowMsg() {
    alert("Hello from App");
    console.log("Hello from App");
  }
  return (
    <div>
      <Student data={ShowMsg} />
    </div>
  )
}

//constructor life cycle
class App14 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data
    }
  }
  render() {
    return (
      <div>Hello {this.state.data}</div>
    )
  }
}

//componentDidMount method

class App15 extends Component {

  constructor() {
    super();
    console.log("Constructor");
    this.state = {
      name: "Nikku"
    }
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  render() {
    return (
      <div>
        <h5></h5>
        <h3>Component Did Mount Method :</h3>
        <p>name is {this.state.name}</p>
        {console.log("Render")}
        <button onClick={() => { this.setState({ name: "Nayana" }) }}>Update</button>
      </div>
    )
  }
}

class App16 extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    }
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate called", this.state.counter);
    if (this.state.counter > 5) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <div>
        <h3>Should Component update {this.state.counter}</h3>
        <button onClick={() => this.setState({ counter: this.state.counter + 1 })}>Update</button>
      </div>
    )
  }
}

//component will unmount method

class App17 extends Component {
  constructor() {
    super();
    this.state = {
      show: true
    }
  }
  componentWillUnmount() {
    console.log("componentWillUnmount from App");
  }
  render() {
    return (
      <div>
        <h3>Component will unmount</h3>
        {this.state.show ? <Student /> : ""}
        <button onClick={() => this.setState({ show: !this.state.show })}>Toggle</button>
      </div>
    )
  }
}

//hooks - useState
function App18() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>Hook useState</h3>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)} >update</button>
    </div>
  )
}

//hooks - useEffect (useEffect called when state is change)
function App19() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("useEffect called");
  });
  return (
    <div>
      <h3>Hook useEffect {count}</h3>
      <button onClick={() => { setCount(count + 1) }}>update</button>
    </div>
  )
}

//hooks - useEffect with specific state 
function App20() {

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(100);

  useEffect(() => {
    console.log("useEffect for count 1");
  }, [count1])

  useEffect(() => {
    console.log("useEffect for count 2");
  }, [count2])


  return (
    <div>
      <p>useEffect with specific state </p>
      <p>{count1}</p>
      <p>{count2}</p>
      <button onClick={() => { setCount1(count1 + 1) }}>update count1 </button><br />
      <button onClick={() => { setCount2(count2 + 1) }}>update count2 </button>
    </div>
  )
}

//hooks - useEffect with specific data (props)
function App21() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(100);

  return (
    <div>
      <Student count1={count1} count2={count2} />
      <p>useEffect with specific specific data (props) </p>
      {/* <p>{count1}</p>
      <p>{count2}</p> */}
      <button onClick={() => { setCount1(count1 + 1) }}>update count1 </button><br />
      <button onClick={() => { setCount2(count2 + 1) }}>update count2 </button>
      {console.log("return App")}
    </div>
  )
}

//style types in jsx
function App22() {

  return (
    <div>
      <h2 className="first">css type -1</h2>
      <h2 style={{ backgroundColor: "black", color: "azure" }}>css type -2</h2>
      <h2 className={style.first}>css type -3</h2>
    </div>
  )
}

//bootstrap 
function App23() {
  return (
    <div style={{ textAlign: "center" }}>
      <Button onClick={() => { alert("Hello") }}> click me !!!</Button><br />
      <Button variant="success">Success</Button>{' '}
      <Alert variant="warning">
        This is a "warning" alert—check it out!
    </Alert>
    </div>

  )
}

//handle array with list using map function
//why use map instead of for loop
//for loop is not support in return block but map support

//array ex
function App24() {
  const students = ['bhushan', 'rohit', 'shivam']

  return (
    <div>
      <h3>Map function</h3>
      {students.map((student) =>
        <h2>Name : {student}</h2>
      )}
    </div>
  )
}

//list ex with table
function App25() {
  const students = [
    { name: "Bhushan", id: "123", mobile: 8600983368 },
    { name: "Rohit", id: "124", mobile: 8596857485 },
    { name: "Shivam", id: "125", mobile: 4586958475 }
  ]

  return (
    <div>
      <h3>Table with bootstrap</h3>
      <Table striped bordered hover >
        <tbody>
          <tr>
            <td>SR.NO.</td>
            <td>ID</td>
            <td>Name</td>
            <td>Contact</td>
          </tr>
          {students.map((student, key) =>
            student.id === "124" ?
              <tr key={key}>
                <td>{key}</td>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.mobile}</td>
              </tr> : ""
          )}
        </tbody>
      </Table>
    </div>
  )
}

//bootstrap nested table using map
function App26() {

  const students = [
    {
      name: "Bhushan", mail: "bhushan@gmail.com", address:
        [{ HN: "10", state: "Maharashtra", pin: "443101" },
        { HN: "14", state: "Maharashtra", pin: "443101" },
        { HN: "18", state: "Maharashtra", pin: "443101" },
        { HN: "16", state: "Maharashtra", pin: "443101" }]
    },
    {
      name: "Shivam", mail: "shivam@gmail.com", address:
        [{ HN: "110", state: "Madhya Pradesh", pin: "443101" },
        { HN: "120", state: "Madhya Pradesh", pin: "443101" },
        { HN: "130", state: "Madhya Pradesh", pin: "443101" },
        { HN: "140", state: "Madhya Pradesh", pin: "443101" }]
    },
    {
      name: "Rohit", mail: "rohit@gmail.com", address:
        [{ HN: "17", state: "Maharashtra", pin: "443101" },
        { HN: "15", state: "Maharashtra", pin: "443101" },
        { HN: "19", state: "Maharashtra", pin: "443101" },
        { HN: "12", state: "Maharashtra", pin: "443101" }]
    }
  ]

  return (
    <div>
      <Table striped hover bordered>
        <tbody>
          <tr>
            <td>Sr.No</td>
            <td>Name</td>
            <td>Mail</td>
            <td>Address</td>
          </tr>
          {students.map((item, i) =>
            <tr key={i}>
              <td>{i}</td>
              <td>{item.name}</td>
              <td>{item.mail}</td>
              <td>
                <Table striped hover bordered>
                  <tbody>
                    {item.address.map((data, j) =>
                      <tr key={j}>
                        <td>{data.HN}</td>
                        <td>{data.state}</td>
                        <td>{data.pin}</td>
                      </tr>
                    )}
                  </tbody>
                </Table>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  )
}

function App27() {
  const students = [
    {
      name: "Bhushan",
      rollno: "41",
      branch: "IT"
    },
    {
      name: "Rohit",
      rollno: "42",
      branch: "CSE"
    },
    {
      name: "Shivam",
      rollno: "43",
      branch: "CSE"
    }
  ]
  return (
    <div>
      {students.map((item) =>
        <Student data={item} />
        // <h2>{item.name}</h2>
      )}
    </div>
  )
}

//fragment in react
//we can not use div tag in tr of table tag console show warning
//for this we used <> </> or <Fragment></Fragment> instead of div tag

function App28() {
  const students = [
    {
      name: "Bhushan",
      rollno: "41",
      branch: "IT"
    }]
  return (
    <>
      <Table>
        <tbody>
          {students.map((item, i) =>
            <tr key={i}>
              <Student data={item} />
            </tr>
          )}
        </tbody>
      </Table>
    </>
  )
}

//send data from child to parent component- 
//lifting state up (state == data, var, let, const)
function App29() {
  let name = "Bhushan";
  function getdata(ldata) {
    alert(ldata);
    console.log(ldata);
  }
  return (
    <>
      <Student data={name} call={getdata} />
    </>
  )
}

//pure component 
// help to avoid rerendering when state is not change
//for Component it is rerenderring even state is same
//for PureComponent it is rerender when state is change
class App30 extends PureComponent {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }
  render() {

    return (
      <div>
        {console.log("Check rerenderring")}
        <h3>Pure component {this.state.count}</h3>
        <button onClick={() => { this.setState({ count: this.state.count }) }}>change</button>
      </div>
    )
  }
}

//useMemo - help to save unnecessary function calls
function App31() {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(10);

  // function getValue(){
  //   console.log("getValue called");
  //   return count*5;
  // }

  //add above code in useMemo
  //this will save unnecessary called
  const useMemoConst = useMemo(function getValue() {
    console.log("getValue called");
    return count * 5;
  }, [count])

  return (
    <div>
      <h3>useMemo Example</h3>
      <h4>Count : {count}</h4>
      <h4>Item : {item}</h4>
      {/* <h4>{getValue()}</h4> */}
      <h4>{useMemoConst}</h4>
      <button onClick={() => setCount(count + 1)}>Count+1</button>
      <button onClick={() => setItem(item * 10)}>Item*10</button>
    </div>
  )
}

//Ref in React (only for class)
//Ref help to update DOM (adding style, hiding DOM Element)
//React says it is bad habit to update DOM (Don't use Ref)
class App32 extends Component {
  constructor() {
    super();
    this.inputRef = createRef();
  }

  updateDOM() {
    this.inputRef.current.style.backgroundColor = "Red";
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <button onClick={() => this.updateDOM()}>chnage style</button>
      </div>
    )
  }
}

//useRef in React (same as Ref but only for function)
function App33() {
  let inputRef = useRef(null);

  function UpdateDom() {
    inputRef.current.style.backgroundColor = "blue";
    inputRef.current.value = "10000"
  }
  return (
    <div>
      <input type="text" ref={inputRef} />
      <Button onClick={() => UpdateDom()}>update</Button>
    </div>
  )
}

//forwardRef in react (used when pass useRef to child component)
function App34() {
  let inputRef = useRef(null);
  function updateDom() {
    inputRef.current.value = "142"
  }
  return (
    <div>
      <Student ref={inputRef} />
      <button onClick={updateDom}>update</button>
    </div>
  )
}

//controlled component - a component which is controlled by State
function App35() {
  const [val, setVal] = useState("");
  const [item, setItem] = useState("");
  return (
    <div>
      <h3>Contolled Component</h3>
      <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
      <span>{val}</span>
      <input type="text" value={item} onChange={(e) => setItem(e.target.value)} />
      <span>{item}</span>

    </div>
  )
}

//uncontrolled component - a component which is not contolled by state
//but it can be controlled by ref or id

//a component controlled by state and ref is a still uncontrolled component
function App36() {
  let inputRef1 = useRef(null);
  let inputRef2 = useRef(null);
  let inputRef3 = useRef(null);

  function getVal(e) {
    e.preventDefault();
    console.log(inputRef1.current.value);
    console.log(inputRef2.current.value);
    console.log(document.getElementById("input3").value);
  }

  return (
    <div>
      <form onSubmit={getVal}>
        <input type="text" ref={inputRef1} /><br /><br />
        <input type="text" ref={inputRef2} /><br /><br />
        <input type="text" id="input3" /><br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

//HOC - Higher Order Component
//HOC is a component which is accept component and return component
//when we have to need same component with differnet properties
function App37() {

  return (
    <div>
      {/* <Counter/> */}
      < HOCRed cmp={Counter} />
      < HOCGreen cmp={Counter} />
      < HOCBlue cmp={Counter} />
    </div>
  )
}

function HOCRed(props) {

  return <h3 style={{ backgroundColor: "red", width: "100px" }}><props.cmp /></h3>
}

function HOCGreen(props) {

  return <h3 style={{ backgroundColor: "green", width: "100px" }}><props.cmp /></h3>
}

function HOCBlue(props) {

  return <h3 style={{ backgroundColor: "blue", width: "100px" }}><props.cmp /></h3>
}

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>++</button>
    </div>
  )
}

//Routing React - used to open different pages by dofferent link
//need to import react router
function App38() {

  return (
    <div>
      <BrowserRouter>
        <Link to="/home">Home</Link><br />
        <Link to="/about">About</Link>

        <Route path="/home"><Home /></Route>
        <Route path="/about"><About /></Route>
      </BrowserRouter>
    </div>
  )
}

function Home() {
  return (
    <div>
      <h3>Hemo page</h3>
      {console.log("Home")}
    </div>
  )
}

function About() {
  return (
    <div>
      <h3>About Page</h3>
      {console.log("About")}
    </div>
  )
}

//routing in separate files
function App39() {

  return (
    <div>
      <Nav1 />
      <Switch>
        <Route path="/about"><About1 /></Route>
        <Route path="/" exact="true"><Home1 /></Route>
        <Route path="*"><PageNotFound /></Route>
      </Switch>
    </div>
  )
}

function PageNotFound() {
  return (
    <div>
      <h3>Page Not Found</h3>
    </div>
  )
}

//dynamic routing
function App40() {
  const users = [
    { id: "1", name: "Bhushan", age: "24" },
    { id: "2", name: "Rohit", age: "25" },
    { id: "3", name: "Shivam", age: "23" },
    { id: "6", name: "RohitP", age: "24" }
  ]
  return (
    <div>
      <BrowserRouter>
        {users.map((item) =>

          <Link to={"/user/" + item.id + "/" + item.name}>
            <h5>{item.name}</h5>
          </Link>
        )}
        <Route path="/user/:id/:name"><User /></Route>
      </BrowserRouter>
    </div>
  )
}

//API Call - Get Method  and Delete Method
function App41() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData()
  }, []);

  function getData(){
    fetch("https://jsonplaceholder.typicode.com/todos").then((result) => {
      result.json().then((resp) => {
        // console.log(resp);
        setData(resp);
      })
    })
  }

  function deleteData(id){
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`,{
      method:"DELETE"
    }).then((result)=>{
      result.json().then((resp)=>{
        console.log(resp);
        //for get current updated result
        getData();
      })
    })
  }
  return (
    <div style={{ textAlign: "center" }}>
      
      {data.map((items) =>

        <div>
          {/* {console.log(items.completed)} */}
          <hr />
          <p>UserID : {items.userId}</p>
          <p>ID : {items.id}</p>
          <p>Title : {items.title}</p>
          <button onClick={()=>deleteData(items.id)}>Delete</button>
          <hr />
        </div>
      )}
    </div>
  )
}

//API Call - POST method, PUT method
function App42() {
  const [
    { name, setName },
    { email, setEmail },
    { address, setAddress }
  ] = useState("");


  function saveData(){
    let data = {name,email,address}
    fetch("",{
      method:"POST",
      headers:{
        "Accept" :"application/json",
        "Content-Type" : "application/json"
      },
      body:JSON.stringify(data)
    }).then((result)=>{
      result.json().then((resp)=>{
        console.log(resp);
      })
    })
  }
  
  function updateData(){
    let data = {name,email,address}
    fetch(`https://jsonplaceholder.typicode.com/posts/1`,
    {method:"PUT",
      headers:{
        "Accept":"application/json",
        "Content-Type":"application/json"
      },
      body:JSON.stringify(data)
    }).then((result)=>{
        result.json().then((resp)=>{
          //setData(resp)
        })
    })
  }

  return (
    <div>
      
      <input type="text" name="name" value={name} onChange={(e) => e.target.value} />
      <input type="text" name="email" value={email} onChange={(e) => e.target.value} />
      <input type="text" name="address" value={address} onChange={(e) => e.target.value} />
      <button type="button" onClick={saveData}>submit</button>
      <button onClick={()=>updateData()}>Delete</button>

    </div>
  )
}

//API Call - PUT method, 
function App43() {
  const [
    { name, setName },
    { email, setEmail },
    { address, setAddress }
  ] = useState("");


  function saveData(){
    let data = {name,email,address}
    fetch("",{
      method:"PUT",
      headers:{
        "Accept" :"application/json",
        "Content-Type" : "application/json"
      },
      body:JSON.stringify(data)
    }).then((result)=>{
      result.json().then((resp)=>{
        console.log(resp);
      })
    })
  }
  return (
    <div>
      <input type="text" name="name" value={name} onChange={(e) => e.target.value} />
      <input type="text" name="email" value={email} onChange={(e) => e.target.value} />
      <input type="text" name="address" value={address} onChange={(e) => e.target.value} />

      <button type="button" onClick={saveData}>submit</button>
    </div>
  )
}

//get previous state value
function App44(){
  const[count, setCount] = useState(1);
  function updateCount(){
    //setCount(Math.floor(Math.random()*10));
    setCount((prev)=>{
        console.log(prev);
        return Math.floor(Math.random()*10);
    })
  }
  return(
    <div>
      <h3>{count}</h3>
      <button onClick={updateCount}>change</button>
    </div>
  )
}

//get previous props value
function App45(){
  const[count, setCount] = useState(0);

  return(
    <div>
      <PrevProps value={count}/>
      <button onClick={()=>setCount(Math.floor(Math.random()*10))}>change</button>
    </div>
  )
}

//context API - used for sending data between same level component
//
class App extends Component{
    constructor(){
      super();
      this.updateColor = (color) =>{
        this.setState({
          color:color
        })
      }

      this.state={
        color:"green",
        updateColor : this.updateColor
      }    
    }
    
  render(){
    return(
      <div>
        <CommonContext.Provider value={this.state}>
        <h3>this is app component</h3>
        <Main/>
        <UpdateButton/>
        </CommonContext.Provider>
      </div>
    )
  }
}

export default App