import React from 'react'
import MainInput from './components/MainInput'
import SellingPoints from './components/SellingPoints'
import ContactNav from './components/ContactNav'

//import * as Yup from 'yup'

const Home = () => {
	return (
		<div>
			<h1>Cheap flights best deals</h1>
			<h4>Search hundreds of travel sites at once</h4>
			<MainInput/>
			<SellingPoints/>
			<footer>
				<ContactNav/>
				<p>Copyright © <a href={'index.html'}>Malena Lucero</a> 2019. All rights reserved.</p>
			</footer>
		</div>
	)
}

export default Home
