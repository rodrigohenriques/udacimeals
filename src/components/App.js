import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addRecipe, removeFromCalendar } from '../actions'

class App extends Component {
  render() {
    return (
      <div>
        Hello World
      </div>
    )
  }
}

function mapStateToProps(calendar) {
  return {
    calendar: Object.keys(calendar).map(
      (day) => (
        {
          day,
          meals: { ...calendar[day] }
        }
      )
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    selectRecipe: (data) => dispatch(addRecipe(data)),
    remove: (data) => dispatch(removeFromCalendar(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
