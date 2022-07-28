import { Component } from 'react';
import { Route,Switch, Redirect } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Movies from './components/movies';
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/notFound';
import NavBar from './components/common/navbar';
import MovieForm from './components/movieForm';


function App() {
    return (
        <div>
            <NavBar/>
            <div className="App" >
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                <span><h1>Hello Movie World</h1></span>
            </div>

            <main className='container'>
                <Switch>
                    <Route path="/movies/:id" component={MovieForm}/>
                    <Route path="/movies" component={Movies} />
                    <Route path="/customers" component={Customers} />
                    <Route path="/rentals" component={Rentals} />
                    <Route path="/not-found" component={NotFound} />
                
                    <Redirect from="/" exact to="/movies" />
                    <Redirect to="/not-found" />
                </Switch>
                {/* <Movies/> */}
            </main>  
        </div>
    );
}

export default App;
