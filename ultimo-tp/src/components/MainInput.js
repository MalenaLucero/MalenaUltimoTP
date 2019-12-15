import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import {useHistory} from 'react-router-dom'
import FlightModel from '../helpers/FlightModel'
import './MainInput.scss'

const flightValidationSchema = Yup.object().shape({
    iataOrigin: Yup.string().min(3).max(3).required(),
    iataDest: Yup.string().min(3).max(3).required(),
    fromDate: Yup.string().required(),
    toDate: Yup.string().required(),
    adults: Yup.number().min(1).max(8).required()
})

const MainInput = () =>{
    let history = useHistory()
    const redirectFunction = (flight) =>{
        history.push(`results/${btoa(JSON.stringify(flight))}`)
    }
    return(
        <Formik 
            initialValues = {FlightModel}
            onSubmit={values => redirectFunction(values)}
            validationSchema={flightValidationSchema}
            enableReinitialize
        >
            {(props)=>{
                return(
                   <Form className={'mainForm'}>
                        <div className={'mainFormFields'}>
                            <Field name="iataOrigin" type="text" placeholder="Origin (IATA code)"/>
                            <ErrorMessage name="iataOrigin"/>
                            <Field name="iataDest" type="text" placeholder="Destination (IATA code)"/>
                            <ErrorMessage name="iataDest"/>
                            <Field name="fromDate" type="date" placeholder="From" min="2019-12-12"/>
                            <ErrorMessage name="fromDate"/>
                            <Field name="toDate" type="date" placeholder="To" min="2019-12-12"/>
                            <ErrorMessage name="toDate"/>
                            <Field name="adults" type="number" placeholder="Adults" min="1" max="8"/>
                            <ErrorMessage name="adults"/>
                        </div>
                        <div className={'radioButtons'}>
                            <label htmlFor={'roundTrip'}>Round trip</label>
                            <Field id={'roundTrip'} name="oneWay" type="radio" value="false"/>
                            <label htmlFor={'oneWay'}>One way</label>
                            <Field id={'oneWay'} name="oneWay" type="radio" value="true"/>
                        </div>    
                        <button className={'mainFormButton'} type="submit">Search</button> 
                    </Form> 
                )
            }}
            
        </Formik>
    )
}

export default MainInput