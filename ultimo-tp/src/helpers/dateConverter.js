const dateConverter = (date) =>{
    const months = [
        {letters: 'Jan', number:'01'}, 
        {letters: 'Feb', number:'02'},
        {letters: 'Mar', number:'03'},
        {letters: 'Apr', number:'04'},
        {letters: 'May', number:'05'},
        {letters: 'June', number:'06'},
        {letters: 'July', number:'07'},
        {letters: 'Aug', number:'08'},
        {letters: 'Sept', number:'09'},
        {letters: 'Oct', number:'10'},
        {letters: 'Nov', number:'11'},
        {letters: 'Dec', number:'12'}]
    let year = date.slice(0,4)
    let month = months.find(m=>m.number === date.slice(5,7))
    let day = date.slice(8,10)
    return `${month.letters} ${day}, ${year}`
}

export default dateConverter