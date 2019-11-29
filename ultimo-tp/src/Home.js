import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import MainInput from './components/MainInput'
import SellingPoints from './components/SellingPoints'
import FlightModel from './helpers/FlightModel'
import ContactNav from './components/ContactNav'

import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useFormik } from 'formik';
//import * as Yup from 'yup'


const Home = () => {
	const [ flightSearch, setFlightSearch ] = useState(FlightModel)

	const test = ''
	const [testForm, setTestForm] = useState(test)
	console.log(test)
	return (
		<div>
			<h1>Cheap flights best deals</h1>
			<h4>Search hundreds of travel sites at once</h4>
			<form>
				<MainInput flightSearch={flightSearch} setFlightSearch={setFlightSearch}/>
				<button>
					<Link to={`results/${btoa(JSON.stringify(flightSearch))}`}>Confirm</Link>	
				</button>
			</form>
			<SellingPoints/>
			<footer>
				<ContactNav/>
				<p>Copyright © <a href={'index.html'}>Malena Lucero</a> 2019. All rights reserved.</p>
			</footer>
			<Formik
                initialValues={test}
                onSubmit={setTestForm}
                enableReinitialize
            >
                {(props)=>{
                    return(
                        <Form>
                            <Field type={'text'} name={'firstName'} placeholder={'nombre'}/>
                            <ErrorMessage name={'firstName'}/>
                            <button type={'submit'}>Enviar</button>
                        </Form>
                    )
                }}
            </Formik>
		</div>
	)
}

export default Home
