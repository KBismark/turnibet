
const Days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
 const getHeroDays = ()=>{
    const date = new Date();
    const day = date.getUTCDay();
    return [ ...Days.slice(day+1), ...Days.slice(0, day+1)].slice(-5)
}

module.exports = {getHeroDays}
