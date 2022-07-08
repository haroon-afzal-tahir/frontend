import React, { Component, useEffect, useState, useRef } from 'react'

import { withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

import { Button, TextField } from '@material-ui/core'
import { Link } from 'react-router-dom'

class StudentDetail extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { state } =  this.props.location
		console.log(state)
		return (
			<>
				<div className="" align="center" style={{ marginTop: "100px"}}>
					<TextField variant="outlined" label="First Name">{state.fname}</TextField>
					<div style={{ marginTop: "50px", marginBottom: "50px"}}>
						<TextField variant="outlined" label="Last Name">{state.lname}</TextField>
					</div>
					<div>
						<Link to="/StudentList">
							<Button variant="outline" style={{ marginRight: "50px"}}>Cancel</Button>
						</Link>
						<Link to="/StudentList">
							<Button variant="contained">Update</Button>
						</Link>
					</div>
				</div>
			</>
		)
	}
}

export default StudentDetail;