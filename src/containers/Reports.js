import React, { Component } from 'react'
import { connect } from 'react-redux'

class Reports extends Component {
	componentDidMount () {
	}

	render () {
		return (
			<div>
        <h2>Reports</h2>
			</div>
		)
	}
}

  const mapStateToProps = (state, ownProps) => {
  return {
		inventory: state.reports
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    //searchInventory: arg => dispatch(searchInventory(arg))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Reports)
