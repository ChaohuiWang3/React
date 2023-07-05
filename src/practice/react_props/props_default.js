import React from 'react'
import ReactDOM from 'react-dom'

class HelloMessage extends React.Component {
  render() {
    return(
      <h1> Hello, {this.props.name} </h1>
    )
  }
}

HelloMessage.defaultProps = {
  name : 'Runoob' // 为props设置默认值
}

const element = <HelloMessage/>

// const element = <HelloMessage name = 'Rinoob'/>

ReactDOM.render(
  element,
  document.getElementById('root')
)

