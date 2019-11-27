import React, { useState } from 'react'
import MainInput from './components/MainInput'
import FlightModel from './helpers/FlightModel'
import {Link} from 'react-router-dom'

const Home = () => {
	const [ flightSearch, setFlightSearch ] = useState(FlightModel)
	/*useEffect(() => {
		async function getTrip() {
			console.log('buscando')
			if(searchObject.adults !== ''){
				toggleLoading(true)
				console.log('cargando')
				let response = await FetchData(searchObject)
				setFlights(response.data)
				toggleLoading(false)
				setShowResults(true)
			}
		}
		getTrip()
	}, [searchObject])*/
	return (
		<div>
			<h1>Elegi tu vuelo</h1>
			<form>
				<MainInput flightSearch={flightSearch} setFlightSearch={setFlightSearch}/>
				<button>
					<Link to={`/results/originLocationCode=${flightSearch.iataOrigin}&destinationLocationCode=${flightSearch.iataDest}&departureDate=${flightSearch.fromDate}&returnDate=${flightSearch.toDate}&adults=${flightSearch.adults}`}>Confirm</Link>	
				</button>
			</form>
			{/*isLoading ? <p>Cargando...</p> : null*/}
			{/*showResults && flights !== undefined ? <Results availableFlights={flights}/> : null*/}
		</div>
	)
}

//originLocationCode=${iataOrigin}&destinationLocationCode=${iataDest}&departureDate=${fromDate}&returnDate=${toDate}&adults=${adults}

export default Home
