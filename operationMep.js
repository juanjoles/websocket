module.exports = 
    function(priceArs,priceUsd,symbolArs,symbolUsd,settlementType)  {
    let mep = priceArs / priceUsd;
    console.log("Valor dolar MEP", settlementType," -", symbolArs, " - ",symbolUsd , mep)
}

