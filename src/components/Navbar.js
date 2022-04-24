import { AppBar, Toolbar, Badge, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import React, { useContext } from 'react';
import Brand from '../img/sports.png';
// import Logo from '../img/logo.png';
import { Link } from 'react-router-dom';
import { Store } from '../utils/Store';

const Navbar = () => {
	const { state } = useContext(Store);
	const {
		teams: { teamsPlayers },
	} = state;
	const classes = useStyles();
	return (
		<div>
			<AppBar position='static' className={classes.navBar}>
				<Toolbar position='static'>
					<Link to='/'>
						<img src={Brand} alt='Sports' />
					</Link>

					<div className={classes.grow}></div>
					<div className={classes.logoArea}>
						<Badge badgeContent={teamsPlayers.length} color='secondary'>
							<Link className={classes.link} to='/your_team'>
								<Button variant='contained' color='primary'>
									Your Teams
								</Button>
							</Link>
						</Badge>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Navbar;

const useStyles = makeStyles({
	navBar: {
		backgroundColor: '#ffffff',
		marginBottom: '2rem',
		width: '100%',
	},
	grow: {
		flexGrow: 1,
	},

	logoArea: {
		marginRight: 50,
	},

	logo: {
		width: 50,

		cursor: 'pointer',
	},
	link: {
		color: '#ffffff',

		'&:hover': {
			color: '#ffffff',
			textDecoration: 'none',
		},
	},
});
