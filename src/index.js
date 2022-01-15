import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './CurrencyExchange.js'

function getElements(response, currency) {
  if (response.result) {
    let conversionVal
    if (currency in response.conversion_rates) {
      conversionVal = response.conversion_rates[currency];
    }
    console.log(typeof response.conversion_rates);
    $('.showCurrency').text(`The API call gives ${conversionVal}`);
    $('.showAmount').text(`The currency is ${currency}`);
    
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}

$(document).ready(function() {
  $('#currencyReady').click(function() {
    let value = $('#amount').val();
    let currency = $('#currency').val();  
    $('.showCurrency').text(`The currency is ${currency}`);
    $('.showAmount').text(`The ammount is ${value}`);
    CurrencyExchange.getCurrency(currency, value)
      .then(function(response) {
        getElements(response,currency);
      });

  });
});