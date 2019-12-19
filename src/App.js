import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Index from './components/Index';
import AdminDashboard from './components/AdminDashboard';
import UserDashboard from './components/UserDashboard';
import Register from './components/Register';
import Login from './components/Login';
import NotFound from './components/NotFound';

class App extends React.Component{
  render() {
    return(
    	<div>
	    	<Router>
	    		<Switch>
		    		<Route exact path="/" component = { Index } />
					<Route path="/admin" component = { AdminDashboard } />
					<Route path="/dashboard" component = { UserDashboard } />
					<Route path="/register" component = { Register } />
					<Route path="/login" component = { Login } />
					<Route path="*" component = { NotFound } />
				</Switch>
	    	</Router>
    	</div>
    );
  }
}

export default App;