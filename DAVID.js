
let tax = 0;

function applyTax(state) {
    const taxRates = {
        "Alabama": 1.04,
        "Alaska": 1.00,
        "Arizona": 1.056,
        "Arkansas": 1.065,
        "California": 1.0725,
        "Colorado": 1.029,
        "Connecticut": 1.0635,
        "Delaware": 1.00,
        "District of Columbia": 1.0575,
        "Florida": 1.06,
        "Georgia": 1.04,
        "Hawaii": 1.04,
        "Idaho": 1.06,
        "Illinois": 1.0625,
        "Indiana": 1.07,
        "Iowa": 1.06,
        "Kansas": 1.065,
        "Kentucky": 1.06,
        "Louisiana": 1.0445,
        "Maine": 1.055,
        "Maryland": 1.06,
        "Massachusetts": 1.0625,
        "Michigan": 1.06,
        "Minnesota": 1.0688,
        "Mississippi": 1.07,
        "Missouri": 1.0423,
        "Montana": 1.00,
        "Nebraska": 1.055,
        "Nevada": 1.046,
        "New Hampshire": 1.00,
        "New Jersey": 1.0663,
        "New Mexico": 1.0513,
        "New York": 1.04,
        "North Carolina": 1.0475,
        "North Dakota": 1.05,
        "Ohio": 1.0575,
        "Oklahoma": 1.045,
        "Oregon": 1.00,
        "Pennsylvania": 1.06,
        "Puerto Rico": 1.06,
        "Rhode Island": 1.07,
        "South Carolina": 1.06,
        "South Dakota": 1.045,
        "Tennessee": 1.07,
        "Texas": 1.0625,
        "Utah": 1.047,
        "Vermont": 1.06,
        "Virginia": 1.043,
        "Washington": 1.065,
        "Washington, D.C.": 1.06,
        "West Virginia": 1.06,
        "Wisconsin": 1.05,
        "Wyoming": 1.05
    };

    tax = taxRates[state] || 1.00;  // Default to 1.00 if state is not found
}

function priceCalc(base, state) {
    applyTax(state);
    return Math.round(base * tax * 100) / 100;
}

