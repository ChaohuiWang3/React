import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

// var title = '菜鸟教程'
var title = 123
class MyTitle extends React.Component{
  render(){
    return <h1> Hello, {this.props.title} </h1>
  }
}

MyTitle.propTypes = {     // 新函数(MyTitle的props的Types) -> title为PropTypes的string形式
  title: PropTypes.string // 非字符会转化成字符
}

ReactDOM.render(
  <MyTitle title={title} />,
  document.getElementById('root')
)