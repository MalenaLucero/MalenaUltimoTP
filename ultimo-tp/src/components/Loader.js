import React from 'react'
import './Loader.scss'

const Loader = ({text}) =>{
    return(
        <div className={'loaderContainer'}>
            <div className={'loader'}></div>
            <p className={'loaderText'}>{text}</p>
        </div>
    )
}

export default Loader