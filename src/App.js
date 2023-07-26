import React, { Component } from 'react';
import Background from './background/background.js';
import Top from './top/top.js';
import Left from './left/left.js';

class App extends Component {
    render(){
        return(
            <div>
                <Background/>
                <Top/>
                <Left/>
            </div>
        )
    }
}

export default App;