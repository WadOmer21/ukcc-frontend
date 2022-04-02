import React from 'react';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router , Switch,Route} from 'react-router-dom';
import Home from './Components/Pages/Home';
import './App.css';
import Services from './Components/Pages/Services';
import Product from './Components/Pages/Product';
import SignUp from './Components/Pages/SignUp';

function App(){
    return(
        <>
            <Router>
                <Navbar/>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/services' exact component={Services} />
                    <Route path='/products' exact component={Product} />
                    <Route path='/sign-up' exact component={SignUp} />
                </Switch>
            </Router>
        </>
        
    );
}
export default App;