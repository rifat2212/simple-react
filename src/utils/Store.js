import Cookies from 'js-cookie';

import { createContext, useReducer } from 'react';
import { playersData } from '../utils/data';

export const Store = createContext();

// initial State
const initialState = {
	player: {},
	teams: {
		teamsPlayers: Cookies.get('teamsPlayers')
			? JSON.parse(Cookies.get('teamsPlayers'))
			: [],
	},
	players: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SHOW_DETAILS': {
			const player = playersData.find((x) => x.id === action.payload);
			return { ...state, player: player };
		}
		case 'ADD_TO_TEAMS': {
			const newPlayer = playersData.find((x) => x.id === action.payload);

			const existPlayer = state.teams.teamsPlayers.find(
				(player) => player.id === newPlayer.id
			);

			const teamsPlayers = existPlayer
				? state.teams.teamsPlayers.map((player) =>
						player.id === existPlayer.id ? newPlayer : player
				  )
				: [...state.teams.teamsPlayers, newPlayer];

			newPlayer.inListed = true;
			Cookies.set('teamsPlayers', JSON.stringify(teamsPlayers));
			return {
				...state,
				teams: { ...state.teams, teamsPlayers },
			};
		}

		case 'REMOVE_PLAYER': {
			const teamsPlayers = state.teams.teamsPlayers.filter(
				(player) => player.id !== action.payload.id
			);
			Cookies.set('teamsPlayers', JSON.stringify(teamsPlayers));
			return { ...state, teams: { ...state.teams.teamsPlayers, teamsPlayers } };
		}

		default:
			return state;
	}
};

export const StoreProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const value = { state, dispatch };
	return <Store.Provider value={value}>{children}</Store.Provider>;
};
