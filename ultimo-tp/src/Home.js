import React, { useState } from 'react'
import MainInput from './components/MainInput'
import FlightModel from './helpers/FlightModel'
import {Link} from 'react-router-dom'

const Home = () => {
	const [ flightSearch, setFlightSearch ] = useState(FlightModel)
	return (
		<div>
			<h1>Elegi tu vuelo</h1>
			<form>
				<MainInput flightSearch={flightSearch} setFlightSearch={setFlightSearch}/>
				<button>
					<Link to={`/results/originLocationCode=${flightSearch.iataOrigin}&destinationLocationCode=${flightSearch.iataDest}&departureDate=${flightSearch.fromDate}&returnDate=${flightSearch.toDate}&adults=${flightSearch.adults}/${flightSearch.oneWay}`}>Confirm</Link>	
				</button>
			</form>
		</div>
	)
}

export default Home
