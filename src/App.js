import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import PlayersList from './components/PlayersList';
import { Route, Switch } from 'react-router-dom';
import PlayerDetails from './components/PlayerDetails';
import TeamsPlayers from './components/TeamsPlayers';

function App() {
	return (
		<div>
			<Navbar />
			<Switch>
				<Route exact path='/' component={PlayersList} />
				<Route path='/details' component={PlayerDetails} />
				<Route path='/your_team' component={TeamsPlayers} />
			</Switch>
		</div>
	);
}

export default App;
