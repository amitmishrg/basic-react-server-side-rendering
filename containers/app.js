import React from 'react'
import { render } from 'react-dom'
import {connect} from 'react-redux';


class App extends React.Component {

  render() {
    let counterVal = this.props.counter;
    return (
      <div className="wrapper">
        <h1>Server side rendring</h1>
        <p>Counter: {counterVal}</p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}

export default connect(mapStateToProps, null)(App);
