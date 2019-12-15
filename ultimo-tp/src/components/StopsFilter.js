import React from 'react'

const checkboxText = (s) =>{
    switch (s){
        case 0: return 'no stops'
            break
        case 1: return '1 stop'
            break
        default: return `${s} stops`
            break
    }
}

const StopsFilter = ({chosenStops, setChosenStops, stops}) =>{
    const handleOnChange = (event) =>{
        if(event.target.checked){
            let aux = []
            aux.push(event.target.name)
            setChosenStops([...chosenStops, ...aux])
        }else if(!event.target.checked){
            let index = chosenStops.indexOf(event.target.name)
            let aux = chosenStops
            aux.splice(index,1)
            setChosenStops(aux)
        }
    }
    const isChecked = s =>{
        chosenStops.find(e=>{
            if(e===s){
                return true
            }else{
                return false
            }
        })
    }
    return(
        <div>
            <h4>STOPS</h4>
            {stops.map((s,i)=>
                <div key={i}>
                    <label>
                        <input  
                            name={s}
                            type='checkbox'
                            checked={isChecked(s)}
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