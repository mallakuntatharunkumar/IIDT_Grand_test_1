function calculateTip(billAmount, serviceQuality, numberOfPeople) {
    // Calculate tip per person
    let tipPerPerson = (billAmount * (serviceQuality / 100)) / numberOfPeople;
    return tipPerPerson;
}

// Test cases
let bill1 = 500;
let serviceQuality1 = 5;
let people1 = 2;
let tip1 = calculateTip(bill1, serviceQuality1, people1);
console.log("For a bill of $" + bill1 + " with service quality " + serviceQuality1 + " and " + people1 + " people, the tip per person is: $" + tip1);

let bill2 = 1000;
let serviceQuality2 = 3;
let people2 = 5;
let tip2 = calculateTip(bill2, serviceQuality2, people2);
console.log("For a bill of $" + bill2 + " with service quality " + serviceQuality2 + " and " + people2 + " people, the tip per person is: $" + tip2);
