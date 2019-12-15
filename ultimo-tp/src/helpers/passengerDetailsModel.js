const passengerDetailsModel = (number) =>{
    let modelArray = [ ...Array(number).keys() ]
    let modelObject = {
        birthYear1: '',
        birthMonth1: '',
        birthDay1: '',
        gender1: '',
        firstName1: '',
        lastName1: '',
        passportSerial1: '',
        citizenship1: ''
    }
    return modelArray.map(m=>modelObject)
} 

export default passengerDetailsModel