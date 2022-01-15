export default class CurrencyExchange {
  static getCurrency(currencyType, amount) {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        console.log(amount);
        console.log(currencyType);
        return response.json();
      })
      .catch(function(error) {
        return error;
      });
  }
}