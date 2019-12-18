import React from 'react'
import './Loader.scss'

const Loader = ({text}) =>{
    return(
        <div class={'loaderContainer'}>
            <div class={'loader'}></div>
            <p class={'loaderText'}>{text}</p>
        </div>
    )
}

export default Loader