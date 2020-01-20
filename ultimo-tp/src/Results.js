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
//images  --> muy buen uso de estos comentarios y del orden en los imports
import advertisementLong from './images/advertisement.jpg'
import advertisementSquare from './images/advertisement_square.jpg'

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
            setFlights(response.data.filter(f=>f.oneWay.toString() === flightSearch.oneWay))
            setFilteredFlights(response.data.filter(f=>f.oneWay.toString() === flightSearch.oneWay))
            toggleLoading(false)
            setShowResults(true)
        }
        // la función deberia estar definida fuera del useEffect como arriba y simplemente llamada como abajo. 
		getTrip()
    }, [])
    useEffect(()=>{
        setFilteredFlights(flightsFilter(flights, chosenStops))
    }, [chosenStops]) // AMO <3
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
                        {/* esta lista podria ser un componente a parte */}
                        <ul>{showResults && flights.length !== 0 ? flightsToShow.map((f,i)=><ResultItem key={i} flight={f} flightSearch={flightSearch}/>) : null}</ul>
                        {showResults && flights.length === 0 ? <p>No flights were found</p> : null}  
                        {filteredFlights.length > flightsNumber ?
                            // toda esa funcion del onclick deberia estar nombrada y externalizada
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
                    <div className={'advertisementContainer'}>
                        {window.innerWidth > 1000 ? <img src={advertisementLong}/> : <img src={advertisementSquare}/>}
                        <p>Advertisement</p>  
                    </div>
                </div>
            </main>
            <PaymentFooter/>
        </React.Fragment>
        
    )
}

export default Results