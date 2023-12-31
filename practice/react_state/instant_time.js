import React from 'react'
import ReactDOM from 'react-dom'

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
 
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>现在是 {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
 
ReactDOM.render(
  <Clock />, // 显示现在时间 | 运行render，调用this.state的date函数
  document.getElementById('root')
);  
