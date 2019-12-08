import React from 'react'
import './Charges.scss'

const Charges = ({className, flight}) =>{
    const {price, travelerPricings} = flight
    const passengers = travelerPricings.length === 1 ? '1 passenger' : `${travelerPricings.length} passengers`
    const passengersAmount = travelerPricings[0].price.total
    const totalAmount = price.grandTotal
    return(
        <div className={className}>
            <h3 className={'chargeTitle'}>Charges</h3>
            <div className={'chargeDetail'}>
                <div>
                    <p>{`${passengers}`}</p>
                    <p>Economy</p>
                </div>
                <p className={'chargeAmount'}>{`$${passengersAmount}`}</p>
            </div>
            <div className={'chargeTotal'}>
                <p className={'chargeTotalTitle'}>Total</p>
                <p className={'chargeAmount'}>{`$${totalAmount}`}</p>
            </div>
        </div>
    )
}

export default Charges