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

var table = document.getElementById('mesas');
var totalStores = [];

CookieStand.prototype.hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

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

function randomNumberOfCustomers(min, max){
  return Math.floor(Math.random() * (max-min) + min);
}

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

// //Create a header row with the hours
// function renderHours (clock){
//   var clock = document.createElement ('tr');
//   var clockData = document.createElement ('td');
//   clockData.textContent = clock.clockData;
//   clock.appendChild(clockData)
//   for (var i=0; i < hours.length; i++){
//     var pleaseWork = document.createElement('td');
//     pleaseWork.textContent = clock.CookieStand.hours[i];
//     clock.appendChild(pleaseWork);
//   }
//   table.appendChild(clock);

// }
// console.log(renderHours(CookieStand.prototype.hours));
// renderHours(CookieStand.prototype.hours);