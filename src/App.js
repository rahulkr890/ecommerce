import './App.css';
import React,{Component} from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {name: '',email:'',employeeList:[
      {name: 'User' , email:'user@abc.com'}
    ]};
    this.setEmail = this.setEmail.bind(this);
    this.setName = this.setName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  validateName(name){
    if(name.trim(" ").length === 0)
      return false;
    return true;
  }

  validateEmail(email){
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (regex.test(email)) {
      return true;
    }
    return false;
  }
  handleSubmit(){
    if (!this.validateName(this.state.name) ) {
      alert("Provide a valid Employee Name");
      return;
    }
    
    if (!this.validateEmail(this.state.email) ) {
      alert("Provide a valid Employee Email");
      return;
    }
    this.setState({
      employeeList: [...this.state.employeeList,{name:this.state.name,email:this.state.email}],
      name:"",
      email:""
    })
  }
  setEmail(event){
    this.setState({email:event})

  }
  setName(event){
    this.setState({name:event})
  }

  render(){
    return(
      <div className="App">
      <header className="App-header" style={{minHeight:0}}>
        <h1>Employee Details</h1>
      </header>
      <form>
        <br />
        <input
          type="text"
          value={this.state.name}
          placeholder="Name of Employee"
          onChange={(event) => {
            this.setName(event.target.value);
          }}
        />
        <br />
        <input
          type="text"
          value={this.state.email}
          placeholder="Email of employee"
          onChange={(event) => {
            this.setEmail(event.target.value);
          }}
        />
        <br />
        <input type="button" className="button" value="Submit"  onClick={this.handleSubmit}/>
      </form>
      {this.state.employeeList.map(
        (td, index) =>
          td.name !== "" && (
            <div style={{ display: "flex", alignItems: "center" }} key={index}>
              <br />

              <p style={{ fontSize: 20 }}>
                {index + 1}) Name : {td.name}
              </p>
              <p style={{ marginLeft: 15, fontSize: 20 }}>  Email: {td.email}</p>
            </div>
          )
      )}
    </div>
    );
  }
}

export default App;