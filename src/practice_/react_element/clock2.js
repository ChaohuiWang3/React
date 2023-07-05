function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>现在是 {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}
 
function tick() {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('root')
  );
}
 
setInterval(tick, 1);

// 每秒刷新tick调用reactdom更改变量

// 函数整体为一个变量——单独提出时间为一个变量
