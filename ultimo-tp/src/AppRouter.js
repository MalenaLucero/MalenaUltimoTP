import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import Payment from './Payment'
import MainNav from './components/MainNav'
import Results from './Results'

const AppRouter = () =>{
    return(
        <Router>
            <MainNav/>
            <Route exact path='/'>
                <Home/>
            </Route>
            <Route path='/results/:flight' component={Results}/>
            <Route exact path='/payment' component={Payment}/>
        </Router>
    )
}

export default AppRouter