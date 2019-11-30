import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import MainInput from './components/MainInput'
import SellingPoints from './components/SellingPoints'
import FlightModel from './helpers/FlightModel'
import ContactNav from './components/ContactNav'

//import * as Yup from 'yup'

const Home = () => {
	const [ flightSearch, setFlightSearch ] = useState(FlightModel)
	return (
		<div>
			<h1>Cheap flights best deals</h1>
			<h4>Search hundreds of travel sites at once</h4>
			<MainInput flightSearch={flightSearch} setFlightSearch={setFlightSearch}/>
			<button>
				<Link to={`results/${btoa(JSON.stringify(flightSearch))}`}>Confirm</Link>	
			</button>
			<SellingPoints/>
			<footer>
				<ContactNav/>
				<p>Copyright © <a href={'index.html'}>Malena Lucero</a> 2019. All rights reserved.</p>
			</footer>
		</div>
	)
}

export default Home
