import React from 'react'
import './SellingPoints.scss'

const PointDetails = ({point}) =>{
    return(
        <div className={'sellingPoint'}>
            <span>Tick</span>
            <h4>{point.title}</h4>
            <p>{point.description}</p>
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