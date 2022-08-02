// import { Component } from 'react';
import { Route,Switch, Redirect } from 'react-router-dom';
// import logo from './logo.svg';
import Movies from './components/movies';
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/notFound';
import NavBar from './components/common/navbar';
import MovieForm from './components/movieForm';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import './App.css';


function App() {
    return (
        <div>
            <NavBar/>
            <div className="App" >
                {/* <img npm src={logo} className="App-logo" alt="logo" /> */}
                <span><h1>Hello Movie World</h1>by vid.ly v1.0</span>
            </div>

            <main className='container'>
                <Switch>
                    <Route path="/login" component={LoginForm}/>
                    <Route path="/register" component={RegisterForm}/>
                    
                    <Route path="/movies/:id" component={MovieForm}/>
                    <Route path="/movies/new" component={MovieForm}/>
                    <Route path="/movies" component={Movies} />
                    <Route path="/customers" component={Customers} />
                    <Route path="/rentals" component={Rentals} />
                    <Route path="/not-found" component={NotFound} />
                
                    {/* <Redirect from="/" exact to="/movies" /> */}
                    <Redirect from="/" exact to="/login" />
                    <Redirect to="/not-found" />
                </Switch>
                {/* <Movies/> */}
            </main>  
        </div>
    );
}

export default App;
