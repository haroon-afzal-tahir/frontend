import React, { Component, useEffect, useState, useRef } from 'react'

import { withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'


// function StudentList() {
// 	const [backendData, setBackendData] = useState("")
// 	const lists = useRef(0)
// 	useEffect(() => {
// 		fetch("/users")
// 		.then(response => response.json())
// 		.then(data => setBackendData({backendData: data}));
		
// 		const StyledTableCell = withStyles((theme) => ({
// 			head: {
// 				backgroundColor: theme.palette.common.black,
// 				color: theme.palette.common.white,
// 			},
// 			body: {
// 				fontSize: 14
// 			},
// 		})) (TableCell);
	
// 		const StyledTableRow = withStyles((theme) => ({
// 			root: {
// 				'&:nth-of-type(odd)': {
// 					backgroundColor: theme.palette.action.hover,
// 				},
// 			},
// 		})) (TableRow);
	
// 		lists.current = backendData.map((item) => 
// 			<StyledTableRow key={item.s_id}>
// 				<StyledTableCell component="th" scope="row" align="center">{item.fname}</StyledTableCell>
// 				<StyledTableCell align="center">{item.lname}</StyledTableCell>
// 			</StyledTableRow>
// 		);
// 	}, [])
// 	return (
// 		<div>
// 			<input type="password"/>
// 			<TableContainer component={Paper}>
// 				<Table aria-label="Customized Table">
// 					<TableHead>
// 						<TableRow>
// 							<StyledTableCell align="center">First Name</StyledTableCell>
// 							<StyledTableCell align="center">Last Name</StyledTableCell>
// 						</TableRow>
// 					</TableHead>
// 					<TableBody>{lists}</TableBody>
// 				</Table>
// 			</TableContainer>
// 		</div>
// 	);
// }

class StudentList extends Component {
	
	constructor(props) {
		super(props)
		this.state = { apiResponse: ""}
	}


	componentDidMount() {
		this.callBackendAPI()
	}

	callBackendAPI() {
		fetch("/users")
			.then(res => res.json())
			.then(res => this.setState({apiResponse: res}))
			.catch(err => err)
	};

	render() {
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

		const lists = this.state.apiResponse.map((item) => 
			<StyledTableRow key={item.s_id}>
				<StyledTableCell component="th" scope="row" align="center">{item.fname}</StyledTableCell>
				<StyledTableCell align="center">{item.lname}</StyledTableCell>
			</StyledTableRow>
		);

		return (
			// <p>{this.state.apiResponse}</p>
			// <div className="App">
			// 	<header className="App-header">
					
			// 	</header>
			// </div>
			<>
			<div>
				<input type="text" value="Hello World!"/>
				<TableContainer component={Paper}>
					<Table aria-label="Customized Table">
						<TableHead>
							<TableRow>
								<TableCell align="center">First Name</TableCell>
								<TableCell align="center">Last Name</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>{lists}</TableBody>
					</Table>
				</TableContainer>
			</div>
			</>
		);
	}
}

export default StudentList;