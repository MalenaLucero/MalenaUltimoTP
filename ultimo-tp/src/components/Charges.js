import React from 'react'

const Charges = ({className, flight}) =>{
    const {price, travelerPricings} = flight
    const passengers = travelerPricings.length === 1 ? '1 passenger' : `${travelerPricings.length} passengers`
    const passengersAmount = travelerPricings[0].price.total
    const totalAmount = price.grandTotal
    return(
        <div className={className}>
            <h3>Charges</h3>
            <div className={'chargeDetail'}>
                <div>
                    <p>{`${passengers}`}</p>
                    <p>Economy</p>
                </div>
                <p className={'chargeAmount'}>{`$${passengersAmount}`}</p>
            </div>
            <div className={'chargeTotal'}>
                <p>Total</p>
                <p className={'chargeAmount'}>{`$${totalAmount}`}</p>
            </div>
        </div>
    )
}

export default Charges