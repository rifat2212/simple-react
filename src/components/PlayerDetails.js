import {
	Button,
	Card,
	Container,
	Grid,
	makeStyles,
	Typography,
} from '@material-ui/core';

import React from 'react';
import { useContext } from 'react';

import { Store } from '../utils/Store';

const PlayerDetails = () => {
	const { state, dispatch } = useContext(Store);
	const { player } = state;
	const classes = useStyles();

	const addToListHandler = () => {
		dispatch({ type: 'ADD_TO_TEAMS', payload: player.id });
	};

	return (
		<Container>
			<Grid container spacing={2}>
				<Grid item md={4} xs={12}>
					<Card className={classes.imageArea}>
						<img
							className={classes.image}
							src={player.img}
							alt={player.fullName}
						/>
					</Card>
				</Grid>

				<Grid item md={8} xs={12}>
					<Card>
						<Grid className={classes.itemsWrapper} container spacing={3}>
							<Grid item md={3} sm={6} xs={12}>
								<Typography>Full Name</Typography>
								<Typography>
									<strong> {player.fullName}</strong>
								</Typography>
							</Grid>
							<Grid item md={3} sm={6} xs={12}>
								<Typography>BORN</Typography>
								<Typography>
									<strong> {player.born}</strong>
								</Typography>
							</Grid>
							<Grid item md={3} sm={6} xs={12}>
								<Typography>AGE</Typography>
								<Typography>
									<strong> {player.age}</strong>
								</Typography>
							</Grid>
						</Grid>

						<Grid className={classes.itemsWrapper} container spacing={3}>
							<Grid item md={3} sm={6} xs={12}>
								<Typography>BATTING STYLE</Typography>
								<Typography>
									<strong> {player.battingStyle}</strong>
								</Typography>
							</Grid>
							<Grid item md={3} sm={6} xs={12}>
								<Typography>BOWLING STYLE</Typography>
								<Typography>
									<strong> {player.bowlingStyle}</strong>
								</Typography>
							</Grid>
							<Grid item md={3} sm={6} xs={12}>
								<Typography>PLAYING ROLE</Typography>
								<Typography>
									<strong> {player.playRole}</strong>
								</Typography>
							</Grid>
						</Grid>

						<Grid className={classes.itemsWrapper} container spacing={3}>
							<Grid item md={3} sm={6} xs={12}>
								<Typography>TEAMS</Typography>
								<Typography>
									<strong>{player.teams}</strong>
								</Typography>
							</Grid>
							<Grid item md={3} sm={6} xs={12}>
								<Typography>SALARY</Typography>
								<Typography>
									<strong>DBT {player.salary} /-</strong>
								</Typography>
							</Grid>
							<Grid item md={3} sm={6} xs={12}>
								<Button
									fullWidth
									variant='contained'
									onClick={() => addToListHandler(player.id)}
								>
									Add To List
								</Button>
							</Grid>
						</Grid>
						{/*  */}
					</Card>
				</Grid>
			</Grid>
		</Container>
	);
};

export default PlayerDetails;

const useStyles = makeStyles({
	imageArea: {
		background: '#1F1C13',
		padding: '2rem 1rem',
		display: 'grid',
		justifyContent: 'center',
	},

	image: {
		width: 'clamp(100px, 100%, 600px)',
		height: 'auto',
		marginBottom: 20,
	},

	itemsWrapper: {
		marginBottom: 20,
		padding: '1rem',
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
	},
	itemContainer: {
		textAlign: 'left',
	},
});
