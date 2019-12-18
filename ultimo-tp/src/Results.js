import React, { useEffect, useState } from 'react'
//components
import MainNav from './components/MainNav'
import Loader from './components/Loader'
import ResultItem from './components/ResultItem'
import PaymentFooter from './components/PaymentFooter'
import SortResults from './components/SortResults'
import StopsFilter from './components/StopsFilter'
//helpers
import FetchData from './helpers/FetchData'
import flightsSlicer from './helpers/flightsSlicer'
import flightsFilter from './helpers/flightsFilter'
import stopsArray from './helpers/stopsArray'
//styles
import '../src/shared.scss'
import './Results.scss'
//images
import advertisement from './images/advertisement.jpg'

const Results = ({match}) =>{
    const flightSearch = JSON.parse(atob(match.params.flight))
    const [ isLoading, toggleLoading ] = useState(false)
    const [ showResults, setShowResults ] = useState(false)
    const [ flights, setFlights ] = useState([ '' ])
    const [ filteredFlights, setFilteredFlights] = useState([])
    const [ flightsNumber, setFlightsNumber ] = useState(5)
    let flightsToShow = flightsSlicer(filteredFlights, flightsNumber)
    //filters
    const [chosenStops, setChosenStops] = useState([])
    useEffect(() => {
		async function getTrip() {
            toggleLoading(true)
            let response = await FetchData(flightSearch)
            console.log(response.data.filter(f=>f.oneWay.toString() === flightSearch.oneWay))
            setFlights(response.data.filter(f=>f.oneWay.toString() === flightSearch.oneWay))
            setFilteredFlights(response.data.filter(f=>f.oneWay.toString() === flightSearch.oneWay))
            toggleLoading(false)
            setShowResults(true)
		}
		getTrip()
    }, [])
    useEffect(()=>{
        setFilteredFlights(flightsFilter(flights, chosenStops))
    }, [chosenStops])
    return(
        <React.Fragment>
            <header className={'resultsHeader'}>
                <div className={'darkenBackground'}></div>
               <MainNav className={'transparent'}/> 
            </header>
            <main className={'resultsContainer'}>
                <div className={'filters'}>
                    {showResults ? <StopsFilter chosenStops={chosenStops} setChosenStops={setChosenStops} stops={stopsArray(flights)}/> : null}
                </div>
                <div className={'results'}>
                    {showResults ? <SortResults flights={filteredFlights} setFlights={setFilteredFlights}/> : null}
                    <div>
                        {isLoading ? <Loader text={'Estamos buscando los mejores vuelos...'}/> : null}
                        <ul>{showResults && flights.length !== 0 ? flightsToShow.map((f,i)=><ResultItem key={i} flight={f} flightSearch={flightSearch}/>) : null}</ul>
                        {showResults && flights.length === 0 ? <p>No flights were found</p> : null}  
                        {filteredFlights.length > flightsNumber ?
                            <a className={'showMoreButton'} onClick={(e)=>{
                                e.preventDefault()
                                let number = flightsNumber + 5
                                setFlightsNumber(number)
                                }}href={'#'}>SHOW MORE</a>
                                : null
                        }
                    </div>
                </div>
                <div className={'advertisements'}>
                    <img src={advertisement}/>
                    <p>Advertisement</p>
                </div>
            </main>
            <PaymentFooter/>
        </React.Fragment>
        
    )
}

export default Results