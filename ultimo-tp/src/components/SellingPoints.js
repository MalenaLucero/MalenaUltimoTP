import React from 'react'
import './SellingPoints.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const PointDetails = ({point}) =>{
    return(
        <div className={'sellingPoint'}>
            <FontAwesomeIcon icon={faCheck}/>
            <h4 className={'pointTitle'}>{point.title}</h4>
            <p className={'pointDescription'}>{point.description}</p>
        </div>
    )
}

const SellingPoints = () =>{
    const points = [
        {title: 'Explore the World', description: 'Start to discover. We will help you visit any place you can imagine.'},
        {title: 'Gifts & Rewards', description: 'Get even more from our service. Spend less and travel more'},
        {title: 'Best prices', description: 'We compare hundreds of trael websites to find the best price'},
        {title: '27/7 Support', description: 'Contact us anytime, anywhere. We will resolve any issues ASAP'}
    ]
    return(
        <div className={'sellingPointsContainer'}>
            {points.map((p,i)=><PointDetails key={i} point={p}/>)}
        </div>
    )
}

export default SellingPoints