import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'

const AppRouter = () =>{
    return(
        <Router>
            <Route exact path={'/'}>
                <Home/>
            </Route>
        </Router>
    )
}

export default AppRouter