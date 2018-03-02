import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return ( <div>
            <h2 className="App-header">
            Hello world!
        </h2>
        <Foo />

        </div>
    );
    }
}

class Foo extends Component {
    render() {
        return (<div>
            Thor thor Thor thor Thor thor  <br/>
        Hulk hulk Hulk hulk Hulk hulk  <br/>
        Thor thor Thor thor Thor thor  <br/>
        </div>

    );
    }
}


export default App;
