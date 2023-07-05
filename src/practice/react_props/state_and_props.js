import React from 'react'
import ReactDOM from 'react-dom'

class Website extends React.Component {
  constructor(){
    super()
    this.state = {
      name : 'Runoob',
      site : 'https://www.runoob.com'
    }
  }
  render(){
    return(
      <div>
        <Name name = {this.state.name}/> 
        <Link site = {this.state.site}/>
      </div> // state去填入具体的数据(从空到name)
    )
  }
}

class Name extends React.Component {
  render(){
    return <h1> {this.props.name}</h1> // props等于产生一个空位
  } 
}

class Link extends React.Component {
  render(){
      return <a href = {this.props.site}>{this.props.site}</a>
    }
}

ReactDOM.render(
  <Website/>,
  document.getElementById('root')
);
