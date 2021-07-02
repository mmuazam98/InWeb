import React from 'react';
import Blogs from './components/articles/blogs';
import Home from './pages/Home/Home';
import Courses from './components/courses/courseshomepg';
import Course from './components/courses/coursespg';
import {Route,BrowserRouter as Router, Switch} from "react-router-dom";

const App = () => {

	return(
		
	<Router>
		<Switch>
		<Route path="/" exact component={Home}/>
		<Route path="/Home" exact component={Home}/>
		<Route path="/Blogs" component={Blogs}/>
		<Route path="/Courses" component={Courses}/>
		<Route path="/Course" component={Course}/>
		</Switch>
	</Router>
	);
}

export default App; 