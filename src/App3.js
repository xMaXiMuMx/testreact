import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return ( <div>
            <h2 className="App-header">
            Avenger!
        </h2>
        <Foo name="Tony" />

            </div>
    );
    }
}

class Foo extends Component {
    render() {
        return (<div> <h2>{this.props.name}</h2>
        Thor thor Thor thor Thor thor  <br/>
        Hulk hulk Hulk hulk Hulk hulk  <br/>
        Thor thor Thor thor Thor thor  <br/>
        </div>

    );
    }
}


export default App;