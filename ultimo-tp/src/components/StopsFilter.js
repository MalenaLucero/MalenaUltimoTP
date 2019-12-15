import React, {useState} from 'react'
import stopsArray from '../helpers/stopsArray'

const checkboxText = (s) =>{
    switch (s){
        case 0: return 'no stops'
            break
        case 1: return '1 stop'
            break
        default: return `${s} stops`
    }
}

const StopsFilter = ({filteredFlights, setFilteredFlights}) =>{
    const stops = stopsArray(filteredFlights)
    console.log(stops)
    const [chosenStops, setChosenStops] = useState({stops0: false, stops1: false, stops2: false, stops3: false})
    const handleOnChange = (event) =>{
        setChosenStops({...chosenStops, [event.target.name]: event.target.checked})
    }
    console.log(chosenStops)
    return(
        <div>
            <h4>STOPS</h4>
            {stops.map((s,i)=>
                <div key={i}>
                    <label>
                        <input  
                            name={`stops${s}`}
                            type='checkbox'
                            checked={chosenStops[`stops${s}`]}
                            onChange={handleOnChange}
                        />
                        {checkboxText(s)}
                    </label> 
                </div>
            )}
        </div>
    )
}

export default StopsFilter