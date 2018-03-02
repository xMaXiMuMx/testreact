import React, { Component } from 'react';
//import logo from './logo.svg';
import Temp from './components/temp.js';
import './App.css';

class App extends Component {
    constructor(props){
        super(props)
        this.state ={ name: ''};
    }

    handleName = (event) => {
        let n = event.target.value;
        this.setState({name:n});
    }

    handleSurName = (event) => {
        let s = event.target.value;
        this.setState({surname:s});
    }

    render() {
        return (
            <div>

            <Temp />

            <h2 className="App-header"> Hello world!</h2>
        Name: <input type="text" name="name"
        value={this.state.name}
        onChange={this.handleName}/>
        SurName: <input type="text" name="surname"
        value={this.state.surname}
        onChange={this.handleSurName}/>
    <Foo name={this.state.name} surname={this.state.surname}/>

    </div>
    );
    }
}

class Foo extends Component {
    render() {
        return (<div>
            <h2>{this.props.name}: {this.props.surname}</h2>
        For for For for For for  <br/>
        For for For for For for  <br/>
        For for For for For for  <br/>
        </div>

    );
    }
}


export default App;
