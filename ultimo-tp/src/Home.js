import React, { useEffect, useState } from 'react'
import MainInput from './components/MainInput'
import FlightModel from './helpers/FlightModel'
import FetchData from './helpers/FetchData'

const Home = () => {
	const [ flights, setFlights ] = useState([ '' ])
	//const [ isLoading, toogleLoading ] = useState(true)
	const [ flightSearch, setFlightSearch ] = useState(FlightModel)
	let searchObject = {}
	useEffect(() => {
		async function getTrip() {
			console.log('buscando')
			if(flightSearch.adults !== ''){
				console.log('cargando')
				console.log(flightSearch)
				let response = await FetchData(flightSearch)
				console.log(response.data)
				setFlights(response.data)
			}
			//
			//toogleLoading(false)
		}
		getTrip()
	}, [flightSearch])
	return (
		<div>
			<h1>Elegi tu vuelo</h1>
			<form>
				<MainInput flightSearch={flightSearch} setFlightSearch={setFlightSearch}/>
				<button onClick={(e)=> {
					e.preventDefault()
					searchObject = flightSearch
					console.log(searchObject)}}>Confirm</button>
			</form>
			{/*<ul>{flights.map((f) => <li>{f.id}</li>)}</ul>*/}
		</div>
	)
}

export default Home
