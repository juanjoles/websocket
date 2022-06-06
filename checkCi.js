const operationMep = require('./operationMep');

module.exports = 
    function(priceArs,priceUsd,symbolArs,symbolUsd,settlementType)  {
    if((symbolUsd === 'AL30D') && ( symbolArs === 'AL30')){
        operationMep(priceArs,priceUsd,symbolArs,symbolUsd,settlementType)
    }
    if((symbolUsd === 'GD30D') && ( symbolArs === 'GD30')){
        operationMep(priceArs,priceUsd,symbolArs,symbolUsd,settlementType)
      
    } 
    if((symbolUsd === 'AL30C') && ( symbolArs === 'AL30')){
        operationMep(priceArs,priceUsd,symbolArs,symbolUsd,settlementType)
       
    } 
    if((symbolUsd === 'GD30C') && ( symbolArs === 'GD30')){
        operationMep(priceArs,priceUsd,symbolArs,symbolUsd,settlementType)
    }   
}
