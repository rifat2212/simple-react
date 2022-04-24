import {
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Grid,
	Typography,
	Button,
	makeStyles,
	ButtonGroup,
} from '@material-ui/core';
// import Cookies from 'js-cookie';

import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Store } from '../utils/Store';

const Player = ({ player }) => {
	const { dispatch } = useContext(Store);

	const [inListed, setInListed] = useState(false);

	const classes = useStyles();
	const { img, fullName, id, salary } = player;

	const showDetailsHandler = () => {
		dispatch({ type: 'SHOW_DETAILS', payload: id });
	};
	const addToListHandler = () => {
		dispatch({ type: 'ADD_TO_TEAMS', payload: id });
		setInListed(true);
	};

	useEffect(() => {}, []);
	return (
		<Grid item md={3} xs={12}>
			<Card>
				<CardActionArea>
					<CardMedia className={classes.media}>
						<Link to='/details'>
							<img src={img} alt={fullName} onClick={showDetailsHandler} />
						</Link>
					</CardMedia>

					<CardContent>
						<Typography component='h2' variant='h6'>
							<strong>Full Name:</strong>
						</Typography>
						<Typography>{fullName}</Typography>
						<Typography>
							<strong>Salary:</strong>
						</Typography>
						<Typography>BDT {salary} /-</Typography>
					</CardContent>
				</CardActionArea>

				{inListed ? (
					<ButtonGroup
						variant='contained'
						fullWidth
						color='primary'
						aria-label='contained primary button group'
					>
						<Button color='secondary' disabled>
							listed
						</Button>
						<Button>
							<Link className={classes.link} to='your_team'>
								Your Team
							</Link>
						</Button>
					</ButtonGroup>
				) : (
					<Button
						type='button'
						variant='contained'
						fullWidth
						size='small'
						color='primary'
						onClick={() => addToListHandler(id)}
					>
						Add To List
					</Button>
				)}
			</Card>
		</Grid>
	);
};

export default Player;

const useStyles = makeStyles({
	media: {
		display: 'Grid',
		justifyContent: 'center',
	},
	link: {
		color: '#ffffff',

		'&:hover': {
			color: '#ffffff',
			textDecoration: 'none',
		},
	},
});
