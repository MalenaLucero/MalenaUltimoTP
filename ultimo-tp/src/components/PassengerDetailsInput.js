import React from 'react'
import {Field} from 'formik'
import './PassengerDetailsInput.scss'

const PassengerDetailsInput = ({number}) =>{
    const years = [...Array(100).keys()].map(e=>e+1920)
    const months = [
        {letters: 'January', number:'01'}, 
        {letters: 'February', number:'02'},
        {letters: 'March', number:'03'},
        {letters: 'April', number:'04'},
        {letters: 'May', number:'05'},
        {letters: 'June', number:'06'},
        {letters: 'July', number:'07'},
        {letters: 'August', number:'08'},
        {letters: 'September', number:'09'},
        {letters: 'October', number:'10'},
        {letters: 'November', number:'11'},
        {letters: 'December', number:'12'}]
    const days = [...Array(31).keys()].map(e=>e+1)
    return(
        <React.Fragment>
        <h4 className={'paymentFormSubtitle'}>{`Passenger ${number}`}</h4>
            <div className={'inputsContainer'}>
                <div className={'birthdayInputs'}>
                    <Field as='select' name={`birthDay${number}`} className={'birthDay'}>
                        <option value="" disabled selected>Day</option>
                        {days.map((d,i)=><option key={i} value={d}>{d}</option>)}
                    </Field>
                    <Field as='select' name={`birthMonth${number}`} className={'birthDay'}>
                        <option value="" disabled selected>Month</option>
                        {months.map((m,i)=><option key={i} value={m.number}>{m.letters}</option>)}
                    </Field>
                    <Field as='select' name={`birthYear${number}`} className={'birthDay'}>
                        <option value="" disabled selected>Year</option>
                        {years.map((y,i)=><option key={i} value={y}>{y}</option>)}
                    </Field>
                </div>
                <Field as='select' name={`gender${number}`} className={'paymentInput'}>
                    <option value="" disabled selected>Gender</option>
                    <option value='female'>female</option>
                    <option value='male'>male</option>
                    <option value='other'>other</option>
                </Field>
                <Field name={`firstName${number}`} placeholder='First name' className={'paymentInput'}/>
                <Field name={`lastname${number}`} placeholder='Lastname' className={'paymentInput'}/>
                <Field name={`passportSerial${number}`} placeholder='Passport serial' className={'paymentInput'}/>
                <Field name={`citizenship${number}`} placeholder='Citizenship' className={'paymentInput'}/>  
            </div>
        </React.Fragment>
    )
}

export default PassengerDetailsInput