import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Layout from '../components/MyLayout.js'
import homepage from './Homepage.js'
import reports from './Reports.js'

import { connect } from 'react-redux'
import { searchInventory } from '../actions'

class App extends Component {
	componentDidMount () {
	}

	render () {
		return (
			<BrowserRouter>
					<Layout>
							<Route exact path="/" component={homepage} />
							<Route exact path="/reports" component={reports} />
					</Layout>
			</BrowserRouter>
		)
	}
}

  const mapStateToProps = (state, ownProps) => {
  return {
		inventory: state.inventory
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    searchInventory: arg => dispatch(searchInventory(arg))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
