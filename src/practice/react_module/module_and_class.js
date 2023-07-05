import React from 'react'
import ReactDOM from 'react-dom'

function HelloMessage(props) {
  return <h1>Hello {props.name}!</h1>;
}

const element = <HelloMessage name="Runoob"/>;

ReactDOM.render(
  element,
  document.getElementById('root')
);

// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello World!</h1>;
//   }
// }

// ReactDOM.render(
//   <Welcome/>,
//   document.getElementById('root')
// );