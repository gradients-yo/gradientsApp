import React from 'react';
import { render } from 'react-dom';
import firebase, {auth, database, provider, dbRef} from './firebase.js';
import jQuery from 'jquery';
import { ChromePicker } from 'react-color';
import CreateGradient from './components/GradientInputs';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			base: "#663399",
			hue: 0,
			saturation: 0,
			lightness: 0,
			degree: 0,
			loggedIn: false,
			user: null
		}
		this.login = this.login.bind(this);
		this.logout = this.logout.bind(this);
	}

	login() {
		auth.signInWithPopup(provider)
			.then((result) => {
				const user = result.user;
				this.setState({
					loggedIn: true,
					user: user
				});
			});
	}

	logout() {
		auth.signOut()
		.then(() => {
			this.setState({
				loggedIn: false,
				user: null
			});
		}); 
	}

	render() {
		const displayGradients = () => {
			if (this.state.loggedIn === true) {
				return (
					<div>
						<button onClick={this.logout}>Logout</button>
						<CreateGradient />
                        <ChromePicker />
					</div>
				)
			} else {
				return (
					<div>
						<button onClick={this.login}>Login</button>
					</div>
				)
			}
		}
		return (
			<main>
				{displayGradients()}
			</main>
		)
	}

	componentDidMount() {
		auth.onAuthStateChange((user) => {
			if (user) {
				this.setState({
					loggedIn: true,
					user: user
				})

			} else {
				this.setState({
					loggedIn: false,
					user: null
				})
			}
		});
	}
}

render(<App />, document.getElementById('app'));
