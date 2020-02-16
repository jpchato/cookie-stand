'use strict';

// Constructor function for Cookie Stores
function CookieStand(name, min, max, avg) {
  this.name = name;
  this.minCust = min;
  this.maxCust = max;
  this.avgCookiePerCust = avg;
  this.cookiesByHour = [];
  this.totalCookiesPerDay = 0;
  totalStores.push(this);
}

// calls html table so we can attach to it
var table = document.getElementById('mesas');
var totalStores = [];

//array of hours
CookieStand.prototype.hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];


// function that generates a random number of customers. used with avg to generate avg cookies sold
function randomNumberOfCustomers(min, max){
  return Math.floor(Math.random() * (max-min) + min);
}

//Getting cookies per hour
CookieStand.prototype.generateCookiesPerHour = function () {
  for(var i = 0; i < this.hours.length; i++){
    this.cookiesByHour.push(Math.floor(randomNumberOfCustomers(this.minCust, this.maxCust) * this.avgCookiePerCust));
  }
}

//Getting cookies daily total
CookieStand.prototype.generateDailyTotals = function () {
  for (var i = 0; i < this.cookiesByHour.length; i++){
    this.totalCookiesPerDay += this.totalCookiesPerDay + this.cookiesByHour[i];
  }
}

// cities and assocaited data created using CookieStand object function
var seattle = new CookieStand('Seattle', 23, 65, 6.3);
seattle.generateCookiesPerHour();
seattle.generateDailyTotals();
render(seattle);
var paris = new CookieStand('Paris', 30, 28, 2.3);
paris.generateCookiesPerHour();
paris.generateDailyTotals();
render(paris);
var tokyo = new CookieStand('Tokyo', 3, 24, 1.2);
tokyo.generateCookiesPerHour();
tokyo.generateDailyTotals();
render(tokyo);
var dubai = new CookieStand('Dubai', 11, 38, 3.7);
dubai.generateCookiesPerHour();
dubai.generateDailyTotals();
render(dubai);
var lima = new CookieStand('Lima', 2, 16, 4.6);
lima.generateCookiesPerHour();
lima.generateDailyTotals();
render(lima);


// to render a single row of data for a store
function render (store) {
// create one tr 
var row = document.createElement('tr');
var name = document.createElement('td');
name.textContent = store.name;
row.appendChild(name);
// create as many <td>s as there are values in cookiesByHour
  for ( var i = 0; i < store.cookiesByHour.length; i++){
    var data = document.createElement('td');
    data.textContent = store.cookiesByHour[i];
    row.appendChild(data);

  }
var total = document.createElement('td');
total.textContent = store.totalCookiesPerDay;
row.appendChild(total);
// add one more <td> for the store name, and another for daily total

table.appendChild(row);
}


//Form Handling Code
function handleForm(event){
  event.preventDefault();

  var name = event.target.name.value;
  var minCust = event.target.minCust.value;
  var maxCust = event.target.maxCust.value;
  var avgCookiePerCust = event.taget.avgCookiePerCust.value;
  var store = new CookieStand (name, minCust, maxCust, avgCookiePerCust);
  console.log(store);
}


var totalSalesbyHour = [];
function totalHourlySales () {
  var hourlyTotal = 0;
  var grandTotal = 0;
  for (i=0; i < CookieStand.prototype.hours.length; i ++){
    for (j=0; j < totalStores.length; j ++){
      hourlyTotal += totalStores[j].cookiesByHour[i];
  }
  // return grandTotal
  console.log(totalHourlySales);

}}