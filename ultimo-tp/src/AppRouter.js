import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import Payment from './Payment'

const AppRouter = () =>{
    return(
        <Router>
            <Route exact path={'/'}>
                <Home/>
            </Route>
            <Route exact path={'/payment'} component={Payment}/>
        </Router>
    )
}

export default AppRouter