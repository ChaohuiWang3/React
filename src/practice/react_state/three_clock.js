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
      </div>
    );
  }
} // 将Clock的date值输入封装的FormattedDate组件 | 开始format_date的date变量为空，等Clock的this.state有了一个date(现在时间)值，再导入format_date的变量
 
function App() {
  return (
    <div>
      <Clock />
      <Clock />
      <Clock />
    </div> // 创造三个独立的clock
  );
}
 
ReactDOM.render(<App />, document.getElementById('root'));