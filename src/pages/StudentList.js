import React, { useEffect, useState } from 'react'

import { withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

function StudentList() {
	
	const [data, setData] = useState([{}])

	useEffect(() => {
		async function getData() {
			await fetch("/users")
				.then(res => res.json())
				.then(res => setData(res))
		}
		getData()
	}, [])
	
	const StyledTableCell = withStyles((theme) => ({
		head: {
			backgroundColor: theme.palette.common.black,
			color: theme.palette.common.white,
		},
		body: {
			fontSize: 14
		},
	})) (TableCell);

	const StyledTableRow = withStyles((theme) => ({
		root: {
			'&:nth-of-type(odd)': {
				backgroundColor: theme.palette.action.hover,
			},
		},
	})) (TableRow);

	return (
		<>
			<div>
				<TableContainer component={Paper}>
					<Table aria-label="Customized Table">
						<TableHead>
							<TableRow>
								<TableCell align="center">First Name</TableCell>
								<TableCell align="center">Last Name</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>{
							data.map((item) =>
								<StyledTableRow key={item.s_id}>
									<StyledTableCell component="th" scope="row" align="center">{item.fname}</StyledTableCell>
									<StyledTableCell align="center">{item.lname}</StyledTableCell>
								</StyledTableRow>
							)
						}</TableBody>
					</Table>
				</TableContainer>
	 		</div>
	 	</>
	);
}

export default StudentList;