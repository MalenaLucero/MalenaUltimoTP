import React, { useEffect, useState } from 'react'
import MainNav from './components/MainNav'
import ResultItem from './components/ResultItem'
import PaymentFooter from './components/PaymentFooter'
import SortResults from './components/SortResults'
//helpers
import FetchData from './helpers/FetchData'
import flightsSlicer from './helpers/flightsSlicer'
import sortByDuration from './helpers/sortByDuration'
import sortByPrice from './helpers/sortByPrice'
import durationConverter from './helpers/durationConverter'

//styles
import '../src/shared.scss'
import './Results.scss'

const Results = ({match}) =>{
    const flightSearch = JSON.parse(atob(match.params.flight))
    console.log(flightSearch)
    const [ isLoading, toggleLoading ] = useState(false)
    const [ showResults, setShowResults] = useState(false)
    const [ flights, setFlights ] = useState([ '' ])
    const [ flightsNumber, setFlightsNumber] = useState(5)
    let flightsToShow = flightsSlicer(flights, flightsNumber)
    if(flights.length!==1) console.log(flights.map(f=>durationConverter(f.itineraries[0].duration)))
    useEffect(() => {
		async function getTrip() {
            toggleLoading(true)
            let response = await FetchData(flightSearch)
            console.log(response.data.filter(f=>f.oneWay.toString() === flightSearch.oneWay))
            setFlights(response.data.filter(f=>f.oneWay.toString() === flightSearch.oneWay))
            toggleLoading(false)
            setShowResults(true)
		}
		getTrip()
	}, [])
    return(
        <React.Fragment>
            <header className={'resultsHeader'}>
                <div className={'darkenBackground'}></div>
               <MainNav className={'transparent'}/> 
            </header>
            <main className={'resultsContainer'}>
                <div className={'filters'}>Filters</div>
                <div className={'results'}>
                    {showResults ? <SortResults flights={flights} setFlights={setFlights}/> : null}
                    <div>
                        {isLoading ? <p>Loading...</p> : null}
                        <ul>{showResults && flights.length !== 0 ? flightsToShow.map((f,i)=><ResultItem key={i} flight={f} flightSearch={flightSearch}/>) : null}</ul>
                        {showResults && flights.length === 0 ? <p>No flights were found</p> : null}  
                        <a className={'showMoreButton'} onClick={(e)=>{
                            e.preventDefault()
                            let number = flightsNumber + 5
                            setFlightsNumber(number)
                        }}href={'#'}>SHOW MORE</a>
                    </div>
                </div>
                <div className={'advertisements'}>Adverts</div>
            </main>
            <PaymentFooter/>
        </React.Fragment>
        
    )
}

export default Results