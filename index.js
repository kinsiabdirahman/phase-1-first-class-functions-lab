const drivers = ["Antonia", "Nuru", "Amari", "Mo"];

// Function to return the first two drivers from the given array
function returnFirstTwoDrivers(drivers) {
  return drivers.slice(0, 2);
}

// Function to return the last two drivers from the given array
function returnLastTwoDrivers(drivers) {
  return drivers.slice(-2);
}

// Array of selecting drivers functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Function to create a fare multiplier
function createFareMultiplier(multiplier) {
  return function (fare) {
    return fare * multiplier;
  };
}

// Function to double the fare
const fareDoubler = createFareMultiplier(2);

// Function to triple the fare
const fareTripler = createFareMultiplier(3);

// Function to select different drivers based on the provided function
function selectDifferentDrivers(drivers, selectingFunction) {
  return selectingFunction(drivers);
}

// Exporting the functions
module.exports = {
  returnFirstTwoDrivers,
  returnLastTwoDrivers,
  selectingDrivers,
  createFareMultiplier,
  fareDoubler,
  fareTripler,
  selectDifferentDrivers,
};
