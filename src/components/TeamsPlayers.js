import {
	Button,
	Card,
	Container,
	Grid,
	List,
	ListItem,
	makeStyles,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Store } from '../utils/Store';

const TeamsPlayers = () => {
	const { state, dispatch } = useContext(Store);
	const {
		teams: { teamsPlayers },
	} = state;

	const classes = useStyles();

	const removePlayerHandler = (player) => {
		dispatch({ type: 'REMOVE_PLAYER', payload: player });
	};

	return (
		<Container>
			{teamsPlayers.length > 0 ? (
				<Grid container spacing={1}>
					<Grid item md={8} xs={12}>
						<Card>
							<TableContainer>
								<Table>
									<TableHead>
										<TableRow>
											<TableCell>Image</TableCell>
											<TableCell>Name</TableCell>
											<TableCell align='right'>Salary</TableCell>
											<TableCell align='right'>Action</TableCell>
										</TableRow>
									</TableHead>

									<TableBody>
										{teamsPlayers.map((player) => {
											const { id, fullName, img, salary } = player;
											return (
												<TableRow key={id}>
													<TableCell>
														<img className={classes.img} src={img} alt='' />
													</TableCell>
													<TableCell>{fullName}</TableCell>
													<TableCell align='right'>BDT {salary} /-</TableCell>
													<TableCell align='right'>
														<Button
															variant='contained'
															color='secondary'
															className={classes.button}
															startIcon={<DeleteIcon />}
															onClick={() => removePlayerHandler(player)}
														>
															Delete
														</Button>
													</TableCell>
												</TableRow>
											);
										})}
									</TableBody>
								</Table>
							</TableContainer>
						</Card>
					</Grid>

					<Grid item md={4} xs={12}>
						<Card>
							<List className={classes.text}>
								<ListItem className={classes.totalWrapper}>
									<Typography variant='h6'>
										Subtotal ({teamsPlayers.length})
									</Typography>
									<Typography variant='h6'>
										BDT {teamsPlayers.reduce((a, c) => a + c.salary, 0)} /-
									</Typography>
								</ListItem>
							</List>
						</Card>
					</Grid>
				</Grid>
			) : (
				<Grid>
					<Typography className={classes.text} variant='h3'>
						Your Teams is empty
					</Typography>
					<Link to='/'>
						<Typography className={classes.text} variant='h6'>
							Go to Add Players
						</Typography>
					</Link>
				</Grid>
			)}
		</Container>
	);
};

export default TeamsPlayers;

const useStyles = makeStyles({
	img: {
		width: 50,
		height: 50,
	},
	text: {
		textAlign: 'center',
	},
	totalWrapper: {
		display: 'flex',
		justifyContent: 'space-around',
	},
});
