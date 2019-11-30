import React, {useState} from 'react'
import { useFormik } from 'formik';
import {Link} from 'react-router-dom'
import FlightModel from '../helpers/FlightModel'

const MainInput = ({flightSearch, setFlightSearch}) =>{
    const {iataOrigin, iataDest, fromDate, toDate, adults, oneWay} = FlightModel
    const redirectLink = <Link to={`results/${btoa(JSON.stringify(flightSearch))}`}>Confirm</Link>
    console.log(flightSearch)
    const formik = useFormik({
        initialValues:{
            iataOrigin,
            iataDest,
            fromDate,
            toDate,
            adults,
            oneWay
        },
        onSubmit: values => {
            setFlightSearch(values)
            
        },
    })
    return(
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="iataOrigin">Origin</label>
            <input
                id="iataOrigin"
                name="iataOrigin"
                type="iataOrigin"
                onChange={formik.handleChange}
                value={formik.values.iataOrigin}
            />
            <label htmlFor="iataDest">Destination</label>
            <input
                id="iataDest"
                name="iataDest"
                type="iataDest"
                onChange={formik.handleChange}
                value={formik.values.iataDest}
            />
            <input
                id="fromDate"
                name="fromDate"
                type="fromDate"
                onChange={formik.handleChange}
                value={formik.values.fromDate}
            />
            <input
                id="toDate"
                name="toDate"
                type="toDate"
                onChange={formik.handleChange}
                value={formik.values.toDate}
            />
            <input
                id="adults"
                name="adults"
                type="adults"
                onChange={formik.handleChange}
                value={formik.values.adults}
            />
            <button type="submit">
                <Link to={`results/${btoa(JSON.stringify(flightSearch))}`}>Confirm</Link>
            </button>
        </form>
    )



    /*return(
        <div>
            {<input type="text" placeholder={'departure'} value={flightSearch.iataOrigin} onChange={(e)=>setFlightSearch({...flightSearch, iataOrigin: e.target.value.toString()})}/>
            <input type="text" placeholder={'arrival'} value={flightSearch.iataDest} onChange={(e)=>setFlightSearch({...flightSearch, iataDest: e.target.value.toString()})}/>
            <input type="text" placeholder={'departure Date'} value={flightSearch.fromDate} onChange={(e)=>setFlightSearch({...flightSearch, fromDate: e.target.value.toString()})}/>
            <input type="text" placeholder={'arrival Date'} value={flightSearch.toDate} onChange={(e)=>setFlightSearch({...flightSearch, toDate: e.target.value.toString()})}/>
            <input type="text" placeholder={'passengers'} value={flightSearch.adults} onChange={(e)=>setFlightSearch({...flightSearch, adults: e.target.value.toString()})}/>}
            
            <label htmlFor={'roundTrip'}>Round trip</label>
            <input id={'roundTrip'} type="radio" value={flightSearch.oneWay} checked={flightSearch.oneWay ? false : true} onChange={()=>setFlightSearch({...flightSearch, oneWay: false})}/>
            <label htmlFor={'oneWay'}>One way</label>
            <input id={'oneWay'} type="radio" value={flightSearch.oneWay} checked={flightSearch.oneWay ? true : false} onChange={()=>setFlightSearch({...flightSearch, oneWay: true})}/>
        </div>
    )*/
}

export default MainInput