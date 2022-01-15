import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function() {
  $('#currencyReady').click(function() {
    let value = $('#amount').val();
    let currency = $('#currency').val();  
    $('.showCurrency').text(`The currency is ${value}`);
    $('.showAmount').text(`The ammount is ${currency}`);
  });
});