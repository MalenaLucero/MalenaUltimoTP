import React, { useEffect, useState } from 'react'
import FetchData from './components/FetchData'
import MainInput from './components/MainInput'

const flightSearchObject = {
	departure: '', 
	arrival: '', 
	departureDate: '', 
	arrivalDate: '', 
	passengers: ''
}

const App = () => {
	const [ flights, setFlights ] = useState([ '' ])
	//const [ isLoading, toogleLoading ] = useState(true)
	const [ flightSearch, setFlightSearch ] = useState(flightSearchObject)
	let searchObject = []
	useEffect(() => {
		async function getTrip(params) {
			const response = await FetchData()
			console.log(response)
			setFlights(response.data)
			//toogleLoading(false)
		}
		getTrip()
	}, [])
	return (
		<div>
			<h1>Elegi tu vuelo</h1>
			<form>
				{MainInput(flightSearch, setFlightSearch, searchObject)}
				<button onClick={()=> {
					searchObject = flightSearch
					console.log(searchObject)}}>Confirm</button>
			</form>
			{/*<ul>{flights.map((f) => <li>{f.id}</li>)}</ul>*/}
		</div>
	)
}

export default App
