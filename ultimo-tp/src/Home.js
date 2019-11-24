import React, { useEffect, useState } from 'react'
import MainInput from './components/MainInput'
import FlightModel from './helpers/FlightModel'
import FetchData from './helpers/FetchData'
import Results from './components/Results'

const Home = () => {
	const [ flights, setFlights ] = useState([ '' ])
	const [ isLoading, toggleLoading ] = useState(false)
	const [ flightSearch, setFlightSearch ] = useState(FlightModel)
	const [ searchObject, setSearchObject] = useState('')
	const [ showResults, setShowResults] = useState(false)
	useEffect(() => {
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
	}, [searchObject])
	return (
		<div>
			<h1>Elegi tu vuelo</h1>
			<form>
				<MainInput flightSearch={flightSearch} setFlightSearch={setFlightSearch}/>
				<button onClick={(e)=> {
					e.preventDefault()
					setSearchObject(flightSearch)}}>Confirm</button>
			</form>
			{isLoading ? <p>Cargando...</p> : null}
			{showResults && flights !== undefined ? <Results availableFlights={flights} numberToShow={4}/> : null}
		</div>
	)
}

export default Home
