Esta pequeña app lo que realiza es el cálculo del dólar MEP a partir de la cotización de bonos en PESOS ARS y USD.

Endpoint (/index):

Se consulta a la api https://test-algobalanz.herokuapp.com/api/v1/prices/security_id para obtener los Security ID disponibles y 
a partir de ellos consultar a la api https://test-algobalanz.herokuapp.com/api/v1/prices/security_id/{SecurityID} para tener 
información detallada de los cotizados en ARS . Una vez obtenido el último precio obtenido de cada SecurityID disponible se lo
compara con los bonos en USD a través del websocket filtrando por sus respectivos settlementType (CI, 24hs,48hs.). 
Luego se consulta si se corresponde al mismo par de bonos en diferente moneda como por ejemplo AL30 con AL30D.
Se termina realizando el cálculo dividiendo el último precio en pesos por el precio en dólares de cada bono.
Una vez obtenido el cálculo de dólar MEP se agregó un setTimeout para que se realice el procedimiento por 10 segundos.

Endpoint (/checkinfo):

Retorna información detallada de los SecurityID.

Mejoras:
	-. A esta app se le puede aplicar una mejor arquitectura.
	.-La información debería ser consumida por el frontend cada cierto periodo de tiempo para una mejor visualización.

