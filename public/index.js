async function main() {
  const timeChartCanvas = document.querySelector("#time-chart");
  const highestPriceChartCanvas = document.querySelector(
    "#highest-price-chart"
  );
  const averagePriceChartCanvas = document.querySelector(
    "#average-price-chart"
  );

  let response = await fetch(
    "https://api.twelvedata.com/time_series?symbol=GME,MSFT,DIS,BNTX&interval=1day&apikey=5e08995e48614c49b5f5e624d8e85f79",
    {
      method: "GET",
      headers: {
        Authorization: "apikey 5e08995e48614c49b5f5e624d8e85f79",
      },
    }
  );
}

main();
