import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { GlobalStyles } from './utils/styles/global-style';
import Projects from './views/Projects';
import Home from './views/Home';

const App: React.FC<IAppProps> = () => {
	return (

		<BrowserRouter>
			<GlobalStyles />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/projects">
					<Projects />
				</Route>
			</Switch>
		</BrowserRouter>
	)
}

export interface IAppProps { }

export default App;
