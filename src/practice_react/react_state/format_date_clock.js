import React from 'react'
import ReactDOM from 'react-dom'

function FormattedDate(props) {
  return <h2>现在是 {props.date.toLocaleTimeString()}.</h2>;
}
 
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
 
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
 
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
 
  tick() {
    this.setState({
      date: new Date()
    });
  }
 
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <FormattedDate date={this.state.date} />  
      </div> // Clock的date值输入封装的FormattedDate组件
    );
  }
}
 
ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);


// 用class写formatteddate
// import React from 'react'
// import ReactDOM from 'react-dom'

// class FormattedDate extends React.Component {
//   render() {
//     return <h2>现在是 {this.props.date.toLocaleTimeString()}.</h2>;
//   }
// }
 
// class Clock extends React.Component {
//   constructor() {
//     super();
//     this.state = {date: new Date()};
//   }
 
//   componentDidMount() {
//     this.timerID = setInterval(
//       () => this.tick(),
//       1000
//     );
//   }
 
//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }
 
//   tick() {
//     this.setState({
//       date: new Date()
//     });
//   }
 
//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <FormattedDate date={this.state.date} />  
//       </div> // Clock的date值输入封装的FormattedDate组件
//     );
//   }
// }
 
// ReactDOM.render(
//   <Clock />,
//   document.getElementById('root')
// );