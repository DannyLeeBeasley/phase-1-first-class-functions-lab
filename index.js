const returnFirstTwoDrivers = (arrayOfDrivers) => {
    return arrayOfDrivers.slice(0,2);
}

const returnLastTwoDrivers = (arrayOfDrivers) => {
    return arrayOfDrivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (integer) => {
    return (fare) => {return fare * integer}
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (arrayOfDrivers, oneOfTheFunctions) => {
    return oneOfTheFunctions(arrayOfDrivers);
}