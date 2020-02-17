'use strict'

//  Global variables. var table is our connection to the sales.html
// var allStores is our array that we push data into
// var storeHours is used to generate hourly totals for all stores
// FULL DISCLAIMER: I did not do a lot of the leg work for some of these functions. We did them in class. Previous iterations of this assignment track what I have and have not been able to do on my own. In an attempt to not feel guilty for transcribing class notes, I have attached comments above chunks of code where I attempt to expalin what the code is doing
var table = document.getElementById('sales-data');
var allStores = [];
var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// Constructor function for Cookie Stores
function CookieStand(name, minCust, maxCust, avgPerCust) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgPerCust = avgPerCust;
  this.cookiesPerHour = [];
  this.total = 0;
  allStores.push(this);
}

var seattle = new CookieStand('Seattle', 23, 65, 6.3);
var paris = new CookieStand('Paris', 30, 28, 2.3);
var tokyo = new CookieStand('Tokyo', 3, 24, 1.2);
var dubai = new CookieStand('Dubai', 11, 38, 3.7);
var lima = new CookieStand('Lima', 2, 16, 4.6);

// Calculating a random number of cookies per hour for each hour
CookieStand.prototype.calculateCookiesPerHour = function () {
  for (var hour = 0; hour < storeHours.length; hour ++){
    this.cookiesPerHour[hour] = randomNumberOfCookies(this.minCust, this.maxCust, this.avgPerCust);
  }
}

// This is taking our global variable `total` and it is cycling through our calculateCookiesPerHour function. Each iteration is summed and it spits out a total per day
CookieStand.prototype.calculateCookieSalesPerDay = function () {
  for (var i = 0; i < this.cookiesPerHour.length; i ++) {
    this.total += this.cookiesPerHour[i];
  }
}

// Generating a random number of cookies using a random number generator and multiplying it by the avgPerCust variable. Math.floor is used to remove decimals
function randomNumberOfCookies (min, max, avgPerCust) {
  var randomNumberOfCustomers = Math.floor(Math.random() * (max - min) + min);
  return Math.floor(randomNumberOfCustomers * avgPerCust);
}

// This is our render function. I still don't entirely grasp the details but the big picture is we're attaching table data to our DOM using our `sales-data` link. Furthermore, This involves a double for loop to create hourly totals for all stores. Circling back after typing this out. This function is still overwhelming. I understand it in bits and pieces but I still feel like a 2/5 in my understanding here.

function render () {
  var child = table.lastChild;
  while (child) {
    table.removeChild(child);
    child = table.lastChild;
  }
  for (var i = 0; i < allStores.length; i ++) {
    var row =  document.createElement('tr');
    var cell = document.createElement('td');
    row.appendChild(cell);
    cell.textContent = allStores[i].name;

    for (var j = 0; j < allStores[i].cookiesPerHour.length; j ++) {
      var cell1 = document.createElement('td');
      cell1.textContent = allStores[i].cookiesPerHour[j];
      row.appendChild(cell1);
    }

    var lastCell = document.createElement('td');
    row.appendChild(lastCell);
    lastCell.textContent = allStores[i].total;
    table.appendChild(row);
  }
  renderFooter(calcHourlyTotals());
}

// A function that allows users to interact with our form and our submit button. The information they provide interacts with our calculateCookiesPerHour and calculateCookieSalesPerDay functions. Their inputted data is processed through our functions and then rendered onto the web page.
function handleForm(event) {
  event.preventDefault();

  var name = event.target.name.value;
  var minCust = parseInt(event.target.minCust.value);
  var maxCust = parseInt(event.target.maxCust.value);
  var avg = parseInt(event.target.avgPerCust.value);

  var newStore = new CookieStand(name, minCust, maxCust, avg);
  newStore.calculateCookiesPerHour();
  newStore.calculateCookieSalesPerDay();
  render();
}

// A function that calculates GRAND hourly totals. Honestly, this function is a bit overwhelming but we went over it in class
function calcHourlyTotals() {
  var results = { hourly: [], grand: 0};
  var grand = 0;
  for (var hourNum = 0; hourNum < storeHours.length; hourNum++) {
    var hourly = 0;
    for (var storeNum = 0; storeNum < allStores.length; storeNum++) {
      hourly += allStores[storeNum].cookiesPerHour[hourNum];
    }
    grand += hourly;
    results.hourly.push(hourly);
  }
  results.grand = grand;
  return results;
}

// Adds the store totals. Cyclces through our array of stores
function addStoreTotals () {
  var total = 0;
  for (var i = 0; i < allStores.length; i ++) {
    total += allStores[i].total;
  }
  return total;
}

// Renders the footer. Uses our previously generated grand totals. Another function I don't follow entirely
function renderFooter(grandTotals) {
  var row = document.createElement('tr');
  var header = document.createElement('th');
  header.textContent = 'Grand Totals';
  row.appendChild(header);

  for (var i = 0; i < grandTotals.hourly.length; i ++){
    var cell = document.createElement('td');
    cell.textContent = grandTotals.hourly[i];
    row.appendChild(cell);
  }
  var total = document.createElement('td');
  total.textContent = grandTotals.grand;
  row.appendChild(total);
  table.appendChild(row);
}

// creates a link to the form and a resposne when user hits submit
var form1 = document.getElementById('form');
form1.addEventListener('submit', handleForm);

for (var i = 0; i < allStores.length; i ++) {
  allStores[i].calculateCookiesPerHour();
  allStores[i].calculateCookieSalesPerDay();
}
render();