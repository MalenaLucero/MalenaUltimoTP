const passengerDetailsModel = (number) =>{
    let initialValues = [ ...Array(number).keys() ]
    let modelArray = [
        {
            birthYear1: '',
            birthMonth1: '',
            birthDay1: '',
            gender1: '',
            firstName1: '',
            lastName1: '',
            passportSerial1: '',
            citizenship1: ''
        },
        {
            birthYear2: '',
            birthMonth2: '',
            birthDay2: '',
            gender2: '',
            firstName2: '',
            lastName2: '',
            passportSerial2: '',
            citizenship2: ''
        },
        {
            birthYear3: '',
            birthMonth3: '',
            birthDay3: '',
            gender3: '',
            firstName3: '',
            lastName3: '',
            passportSerial3: '',
            citizenship3: ''
        },
        {
            birthYear4: '',
            birthMonth4: '',
            birthDay4: '',
            gender4: '',
            firstName4: '',
            lastName4: '',
            passportSerial4: '',
            citizenship4: ''
        },
        {
            birthYear5: '',
            birthMonth5: '',
            birthDay5: '',
            gender5: '',
            firstName5: '',
            lastName5: '',
            passportSerial5: '',
            citizenship5: ''
        },
        {
            birthYear6: '',
            birthMonth6: '',
            birthDay6: '',
            gender6: '',
            firstName6: '',
            lastName6: '',
            passportSerial6: '',
            citizenship6: ''
        },
        {
            birthYear7: '',
            birthMonth7: '',
            birthDay7: '',
            gender7: '',
            firstName7: '',
            lastName7: '',
            passportSerial7: '',
            citizenship7: ''
        },
        {
            birthYear8: '',
            birthMonth8: '',
            birthDay8: '',
            gender8: '',
            firstName8: '',
            lastName8: '',
            passportSerial8: '',
            citizenship8: ''
        }
    ]
    return modelArray.map((m,i)=>modelArray[i])
} 

export default passengerDetailsModel