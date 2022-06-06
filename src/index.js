const express = require("express");
const WebSocket = require("ws");
const ws = new WebSocket("wss://test-algobalanz.herokuapp.com/ws/str");
const checkCi = require("./checkCi");
const app = express();

app.use("/index", (req, res) => {
  const axios = require("axios");
  axios
    .get("https://test-algobalanz.herokuapp.com/api/v1/prices/security_id")
    .then((resp) => {
      const data1 = Object.values(resp.data);
      const data2 = data1.flat(1);
      console.log(data2);
      for (let i = 0; i < data2.length; i++) {
        axios
          .get(
            `https://test-algobalanz.herokuapp.com/api/v1/prices/security_id/${data2[i]}`
          )
          .then((resp) => {
            const { response } = resp.data;
            const { currency } = response;
            if (currency === "ARS") {
              const { last, symbol } = response;
              const symbolArs = symbol;
              const { price } = last;
              const priceArs = price;
              const { securityID } = response;
              ws.on("message", function (message) {
                let data = JSON.parse(message);
                let { msg } = data;
                let { currency, settlementType, last, symbol } = msg;
                let symbolUsd = symbol;
                let { price } = last;
                let priceUsd = price;
                let currencyUsd = currency;
                if (currencyUsd === "USD") {
                  if (settlementType === "CI") {
                    checkCi(
                      priceArs,
                      priceUsd,
                      symbolArs,
                      symbolUsd,
                      settlementType
                    );
                  }
                  if (settlementType === "24hs") {
                    checkCi(
                      priceArs,
                      priceUsd,
                      symbolArs,
                      symbolUsd,
                      settlementType
                    );
                  }

                  if (settlementType === "48hs") {
                    checkCi(
                      priceArs,
                      priceUsd,
                      symbolArs,
                      symbolUsd,
                      settlementType
                    );
                  }
                 }
                if (currencyUsd === "EXT") {
                  if (settlementType === "CI")  {
                    checkCi(
                      priceArs,
                      priceUsd,
                      symbolArs,
                      symbolUsd,
                      settlementType
                    );
                  }
                  if (settlementType === "48hs") {
                    checkCi(
                      priceArs,
                      priceUsd,
                      symbolArs,
                      symbolUsd,
                      settlementType
                    );
                   }
                 }
              });
            }
          });
        setTimeout(function () {
          return process.exit();
        }, 10000);
      }
    });
});
app.use("/checkinfo", (req, res) => {
  const axios = require("axios");
  axios
    .get("https://test-algobalanz.herokuapp.com/api/v1/prices")
    .then((resp) => {
      console.log(resp.data);
      res.send(resp.data);
    });
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
