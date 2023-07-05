import React, { Component } from 'react';
import styles from './Button.module.scss'; // Import regular stylesheet

class App extends Component {
   render() {
    return <button className = {styles.error}>Error Button</button>;
  }
}

export default App 