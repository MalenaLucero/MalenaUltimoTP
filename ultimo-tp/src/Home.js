import React from 'react'
import MainNav from './components/MainNav'
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
			<MainNav className={'transparent'}/>
			<div className={'homeMainContainer'}>
				<div className={'homeTitleAndSubtitle'}>
					<h1 className={'homeTitle'}>Cheap flights best deals</h1>
					<h4 className={'homeSubtitle'}>Search hundreds of travel sites at once</h4>
				</div>
				<MainInput/>
				<SellingPoints/>
				<footer className={'homeFooter'}>
					<ContactNav/>
					<p className={'copyright'}>Copyright © <a href={'index.html'} className={'pageCreator'}>Malena Lucero</a> 2019. All rights reserved.</p>
				</footer>
			</div>
		</div>
	)
}

export default Home
