import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import {useHistory} from 'react-router-dom'
import FlightModel from '../helpers/FlightModel'
import './MainInput.scss'

const MainInput = () =>{
    let history = useHistory()
    const redirectFunction = (flight) =>{
        history.push(`results/${btoa(JSON.stringify(flight))}`)
    }
    return(
        <Formik 
            initialValues = {FlightModel}
            onSubmit={values => {
                redirectFunction(values)}}
        >
            <Form className={'mainForm'}>
                <div className={'mainFormFields'}>
                    <Field name="iataOrigin" type="text" placeholder="Origin"/>
                    <Field name="iataDest" type="text" placeholder="Destination"/>
                    <Field name="fromDate" type="text" placeholder="From"/>
                    <Field name="toDate" type="text" placeholder="To"/>
                    <Field name="adults" type="text" placeholder="Adults"/>
                </div>
                <div className={'radioButtons'}>
                    <label htmlFor={'roundTrip'}>Round trip</label>
                    <Field id={'roundTrip'} name="oneWay" type="radio" value="false"/>
                    <label htmlFor={'oneWay'}>One way</label>
                    <Field id={'oneWay'} name="oneWay" type="radio" value="true"/>
                </div>    
                <button className={'mainFormButton'} type="submit">Search</button> 
            </Form>
        </Formik>
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