class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>现在是 {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
 
function tick() {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('example')
  );
}
 
setInterval(tick, 1);

// 创建一个 React.Component 的 ES6 类，该类封装了要展示的元素