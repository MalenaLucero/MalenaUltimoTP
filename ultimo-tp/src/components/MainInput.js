import React from 'react'

const MainInput = ({flightSearch, setFlightSearch}) =>{
    return(
        <div>
            <input placeholder={'departure'} value={flightSearch.departure} onChange={(e)=>setFlightSearch({...flightSearch, departure: e.target.value})}/>
            <input placeholder={'arrival'} value={flightSearch.arrival} onChange={(e)=>setFlightSearch({...flightSearch, arrival: e.target.value})}/>
            <input placeholder={'departure Date'} value={flightSearch.departureDate} onChange={(e)=>setFlightSearch({...flightSearch, departureDate: e.target.value})}/>
            <input placeholder={'arrival Date'} value={flightSearch.arrivalDate} onChange={(e)=>setFlightSearch({...flightSearch, arrivalDate: e.target.value})}/>
            <input placeholder={'passengers'} value={flightSearch.passengers} onChange={(e)=>setFlightSearch({...flightSearch, passengers: e.target.value})}/>
        </div>
    )
}

export default MainInput