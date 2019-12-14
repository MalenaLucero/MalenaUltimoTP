import React, {useState} from 'react'
import stopsArray from '../helpers/stopsArray'

const StopsFilter = ({filteredFlights, setFilteredFlights}) =>{
    const [chosenStops, setChosenStops] = useState([''])
    const stops = stopsArray(filteredFlights)
    const handleOnChange = (event) =>{
        event.preventDefault()
        console.log('hola')
    }
    return(
        <div>
            <h4>STOPS</h4>
            {stops.map((s,i)=>
                <div>
                    <label>
                        <input 
                            key={i} 
                            name='stops'
                            type='checkbox'
                            onChange={(e)=>handleOnChange(e)}
                        />
                        {s} stops
                    </label>
                </div>
            )}
        </div>
    )
}

export default StopsFilter