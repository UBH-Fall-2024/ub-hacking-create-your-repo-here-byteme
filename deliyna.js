
function comparePrices(req) {
    const price = req.body.price;
    
    function priceCalc(base, tax) {
        return base + tax;
    }

    const base = 100; 
    const tax = 0.1;  

    const price_1 = price * priceCalc(base, tax);
    const price_2 = price * priceCalc(base, tax);

    if (price_1 < price_2) {
        return price_1;
    } else {
        return price_2;
    }
}

            