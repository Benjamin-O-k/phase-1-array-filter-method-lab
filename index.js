// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(drivers, string){
    return drivers.filter(drivers => {return drivers.toLowerCase() == string.toLowerCase()})
}

console.log(findMatching(drivers , "bobby"))
function fuzzyMatch(drivers, string){
    return drivers.filter(drivers =>{ return drivers.toLowerCase().startsWith(string.toLowerCase()) === string.toLowerCase().startsWith(string.toLowerCase())})
}

function matchName(drivers, string) {
    return drivers.filter(driver => driver.name === string);
}


