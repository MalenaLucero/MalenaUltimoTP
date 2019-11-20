import React, { useEffect, useState } from 'react'
import FetchData from './components/FetchData'
import MainInput from './components/MainInput'
import FlightModel from './helpers/FlightModel'



const Home = () => {
	const [ flights, setFlights ] = useState([ '' ])
	//const [ isLoading, toogleLoading ] = useState(true)
	const [ flightSearch, setFlightSearch ] = useState(FlightModel)
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
				<MainInput flightSearch={flightSearch} setFlightSearch={setFlightSearch}/>
				<button onClick={()=> {
					searchObject = flightSearch
					console.log(searchObject)}}>Confirm</button>
			</form>
			{/*<ul>{flights.map((f) => <li>{f.id}</li>)}</ul>*/}
		</div>
	)
}

export default Home
