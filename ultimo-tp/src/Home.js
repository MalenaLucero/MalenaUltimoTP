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
					<Link to={`results/${btoa(JSON.stringify(flightSearch))}`}>Confirm</Link>	
				</button>
			</form>
		</div>
	)
}

export default Home
