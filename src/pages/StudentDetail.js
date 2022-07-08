import React, { Component } from 'react'

import { Button, TextField } from '@material-ui/core'
import { Link } from 'react-router-dom'

class StudentDetail extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<>
				<div className="" align="center" style={{ marginTop: "100px"}}>
					<TextField variant="outlined" label="First Name"></TextField>
					<div style={{ marginTop: "50px", marginBottom: "50px"}}>
						<TextField variant="outlined" label="Last Name"></TextField>
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