
const Days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
const Months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'Decemeber']
 const getHeroDays = ()=>{
    const date = new Date();
    const day = date.getUTCDay();
    return [ ...Days.slice(day+1), ...Days.slice(0, day+1)].slice(-5)
}
const getTodaysDate = ()=>{
    const date = new Date();
    const day = date.getUTCDay();
    const today = Days[day].split('');
    today[0] = today[0].toUpperCase();
    return `${today.join('')}, ${Months[date.getUTCMonth()]} ${date.getUTCDate()} ${date.getUTCFullYear()}`
}
module.exports = {getHeroDays, getTodaysDate}

