import React from 'react';
import Blogs from './components/articles/blogs';
import Home from './pages/Home/Home';
import {Route,BrowserRouter as Router, Switch} from "react-router-dom";

const App = () => {

	return(
		
	<Router>
		<Switch>
		<Route path="/" exact component={Home}/>
		<Route path="/Home" exact component={Home}/>
		<Route path="/Blogs" component={Blogs}/>
		</Switch>
	</Router>
	);
}

export default App; 