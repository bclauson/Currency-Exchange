import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './CurrencyExchange.js';

function getElements(response, currency, value) {
  if (response.result) {
    let conversionVal;
    let convertedVal;
    if (currency in response.conversion_rates) {
      conversionVal = response.conversion_rates[currency];
      convertedVal = conversionVal * value;
      $('.showAmount').text(`From ${value} USD to ${currency} the exchange results in ${convertedVal}`);
    } else {
      $('.showAmount').text(`There was an error: ISO 4217 currency code not found (code must be in capitals)`);
    }
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}

$(document).ready(function() {
  $('#currencyReady').click(function() {
    let value = $('#amount').val();
    let currency = $('#currency').val(); 
    $('#currency').val("");
    $('#amount').val("");
    $('.showAmount').text(`The ammount is ${value}`);
    CurrencyExchange.getCurrency()
      .then(function(response) {
        getElements(response, currency, value);
      });

  });
});