import React, { Component, useEffect, useState, useRef } from 'react'

import { Button, TextField } from '@material-ui/core'
import { Link } from 'react-router-dom'

function BookDetail() {
	return (
		<>
			<div className="" align="center" style={{ marginTop: "100px"}}>
				<TextField disabled variant="outlined" label="Book Name"></TextField>
				<TextField disabled variant="outlined" label="Author" style={{ marginLeft: "30px"}}></TextField>
				<div style={{ marginTop: "50px", marginBottom: "50px"}}>
					<TextField variant="outlined" label="Borrowed By"></TextField>
					<TextField variant="outlined" label="Date Borrowed" style={{ marginLeft: "30px"}}></TextField>
				</div>
				<div style={{ marginTop: "50px", marginBottom: "50px"}}>
				</div>
				<div style={{ marginTop: "50px", marginBottom: "50px"}}>
				</div>
				<div style={{ marginTop: "50px", marginBottom: "50px"}}>
					<TextField variant="outlined" label="Returned?"></TextField>
				</div>

				<div>
					<Link to="/BookList">
						<Button variant="outline" style={{ marginRight: "50px"}}>Cancel</Button>
					</Link>
					<Link to="/BookList">
						<Button variant="contained">Update</Button>
					</Link>
				</div>
			</div>
		</>
	)
}

export default BookDetail;