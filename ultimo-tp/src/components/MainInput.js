import React from 'react'

const MainInput = ({flightSearch, setFlightSearch}) =>{
    return(
        <div>
            <input placeholder={'departure'} value={flightSearch.iataOrigin} onChange={(e)=>setFlightSearch({...flightSearch, iataOrigin: e.target.value.toString()})}/>
            <input placeholder={'arrival'} value={flightSearch.iataDest} onChange={(e)=>setFlightSearch({...flightSearch, iataDest: e.target.value.toString()})}/>
            <input placeholder={'departure Date'} value={flightSearch.fromDate} onChange={(e)=>setFlightSearch({...flightSearch, fromDate: e.target.value.toString()})}/>
            <input placeholder={'arrival Date'} value={flightSearch.toDate} onChange={(e)=>setFlightSearch({...flightSearch, toDate: e.target.value.toString()})}/>
            <input placeholder={'passengers'} value={flightSearch.adults} onChange={(e)=>setFlightSearch({...flightSearch, adults: e.target.value.toString()})}/>
        </div>
    )
}

export default MainInput