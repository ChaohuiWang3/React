import React from 'react'
import ReactDOM from 'react-dom'

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>现在是 {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}
 
setInterval(tick, 1);

// reactdom一直调用tick，tick每秒刷新显示现在时间