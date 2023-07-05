import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

// var title = '菜鸟教程'
// // var title = 123
// class MyTitle extends React.Component {
//   render(){
//     return <h1> {this.props.title} </h1>
//   }
// }

// MyTitle.propTypes = {                    
//   title: PropTypes.string.isRequired
// }


// var title = "菜鸟教程";
// // var title = 123;
// var MyTitle = React.createClass({
//   propTypes: {
//     title: PropTypes.string.isRequired,
//   },

//   render: function() {
//      return <h1> {this.props.title} </h1>;
//    }
// });


var title = "菜鸟教程";
// ar title = 123;
class MyTitle extends React.Component {
  render() {
    return <h1> {this.props.title} </h1>
  }

  propTypes = {title: PropTypes.string.isRequired}
}

ReactDOM.render(
    <MyTitle title={title} />,
    document.getElementById('root')
)