import React from 'react'
import MainInput from './components/MainInput'
import SellingPoints from './components/SellingPoints'
import ContactNav from './components/ContactNav'
//styles
import './Home.scss'

//import * as Yup from 'yup'

const Home = () => {
	return (
		<div className={'homeContainer'}>
			<div className={'darkenBackground'}></div>
			<h1 className={'homeTitle'}>Cheap flights best deals</h1>
			<h4 >Search hundreds of travel sites at once</h4>
			<MainInput/>
			<SellingPoints/>
			<footer className={'homeFooter'}>
				<ContactNav/>
				<p>Copyright © <a href={'index.html'}>Malena Lucero</a> 2019. All rights reserved.</p>
			</footer>
		</div>
	)
}

export default Home
