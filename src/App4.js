import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return ( <div>
            <h2 className="App-header">
            Avenger!
        </h2>
        <Foo name="Tony" surname="Stark" />

            </div>
    );
    }
}

class Foo extends Component {
    render() {
        return (<div> <h2>{this.props.name} {this.props.surname}</h2>
        Thor <br/>
        Hulk <br/>
        Captain America <br/>
        </div>

    );
    }
}


export default App;