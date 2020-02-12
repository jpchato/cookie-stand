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



// for (var i = 0; i < totalStores.length; i ++){
//   totalStores[i].generateCookiesPerHour();
//   totalStores[i].generateDailyTotals();
//   render(totalStores[i]);
// }
// Render a table
  // head with some static header
  // body of all the stores sales per hour, and the total for the day
  // bottom row, with total cookies for all stores per hour, and the total daily of all stores sales
}


// // var hours is an array of the hours that the store is open
// // var places is an array of the objects
// // arr that tallies TOTAL cookies bought
// var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
// var places = [seattle, tokyo, dubai, paris, lima];

// // not sure what to do with this
// // Store.prototype.hoursOpen = hours.length;
// // Store.prototype.sumCookiesBoughtArr = 0;

// //calculates a random number between the min and max for the respective city
// function randomGuests(min, max){
//   min = Math.ceil(min);
//   max= Math.floor(max);
//   return Math.floor(Math.random() * (max - min) + min);
// }

// //calculates average cookies sold per hour 
// function storeData (store){
//   var cookiesBoughtArr = [];
//   var sumCookiesBoughtArr = 0;
//   for (var i=0; i<hours.length; i++){
//     var intermediateCalc = randomGuests(store.min, store.max);
//     var xyz = Math.floor(intermediateCalc * store.avg);
//     console.log(hours[i], ': ', xyz, ' cookies sold' );
//     cookiesBoughtArr.push(xyz);
//     sumCookiesBoughtArr = xyz + sumCookiesBoughtArr;
//   }
//   return {
//     byHour: cookiesBoughtArr, // total cookies by hour
//     sumCookiesBoughtArr, // grand total cookies bought
//   }
// }

// // renders unorder list onto web page. NOT IN USE but works
// function render(){
//   var listEl = document.getElementById('locations');
//   var heading = document.createElement('h2');
//   heading.textContent = this.name;
//   listEl.appendChild(heading);

//   for (var i=0; i < this.cookiesBoughtArr.byHour.length; i++) {
//     var itemEl = document.createElement('li');
//     itemEl.textContent = hours[i] + ' ' + this.cookiesBoughtArr.byHour[i];
//     listEl.appendChild(itemEl);
//   }
// }

// // renders table onto web page
// function renderTable(){

//   var masterEl = document.GetElementbyId('mesas');
//   var masterHead = document.createElement('tr');
//   masterHead.textContent = this.name;
//   masterEl.appendChild(masterHead);

//   for (var i=0; i < this.cookiesBoughtArr.byHour.length; i++) {
//     var headEl = document.createElement('th');
//     headEl.textContent = hours[i] + ' ' + this.cookiesBoughtArr.byHour[i];
//     masterEl.appendChild(headEl);
//   }

//   var tableEl = document.getElementById('mesas');
//   var martio = document.createElement('tr');
//   martio.textContent = this.name;
//   tableEl.appendChild(martio);

//   for (var i=0; i < this.cookiesBoughtArr.byHour.length; i++) {
//     var dataEl = document.createElement('td');
//     dataEl.textContent = hours[i] + ' ' + this.cookiesBoughtArr.byHour[i];
//     tableEl.appendChild(dataEl);
//   }
// }

// // master constructor function
// function CookieStand(name, min, max, avg, ){
//   this.name=name;
//   this.min=min;
//   this.max=max;
//   this.avg=avg;
//   this.cookiesBoughtArrCombo = {
//     byHour: [],
//     sumCookiesBoughtArr: 0,
//   };
//   this.renderTable= function (){
//     var tableEl = document.getElementById('mesas');
//     var martio = document.createElement('tr');
//     martio.textContent = this.name;
//     tableEl.appendChild(martio);
  
//     for (var i=0; i < this.cookiesBoughtArr.byHour.length; i++) {
//       var dataEl = document.createElement('td');
//       dataEl.textContent = hours[i] + ' ' + this.cookiesBoughtArr.byHour[i];
//       tableEl.appendChild(dataEl);
//     }
//   };
// }

// var seattle = new CookieStand('Seattle', 23, 65, 6.3)
// var tokyo = new CookieStand('Tokyo', 3, 24, 1.2)
// var dubai = new CookieStand('Dubai', 11, 38, 3.7)
// var paris = new CookieStand('Paris', 30, 28, 2.3)
// var lima = new CookieStand('Lima', 2, 16, 4.6)


// // renders information onto web page
// seattle.cookiesBoughtArr = storeData(seattle);
// seattle.renderTable();
// paris.cookiesBoughtArr = storeData(paris);
// paris.renderTable();
// lima.cookiesBoughtArr = storeData(lima);
// lima.renderTable();
// tokyo.cookiesBoughtArr = storeData(tokyo);
// tokyo.renderTable();
// dubai.cookiesBoughtArr = storeData(dubai);
// dubai.renderTable();

// // var seattle = {
// //     name: 'Seattle',
// //     min: 23,
// //     max: 65,
// //     avg: 6.3,
// //     cookiesBoughtArrCombo: {
// //       byHour: [],
// //       sumCookiesBoughtArr: 0,
// //     },
// //     render: function () {
// //       var listEl = document.getElementById('locations');
// //       var heading = document.createElement('h2');
// //       heading.textContent = this.name;
// //       listEl.appendChild(heading);

// //       for (var i=0; i < this.cookiesBoughtArr.byHour.length; i++) {
// //         var itemEl = document.createElement('li');
// //         itemEl.textContent = hours[i] + ' ' + this.cookiesBoughtArr.byHour[i];
// //         listEl.appendChild(itemEl);
// //       }
// //     }
// // }
 

// // var tokyo = {
// //     name: 'Tokyo',
// //     min: 3,
// //     max: 24,
// //     avg: 1.2,
// //     cookiesBoughtArrCombo: {
// //       byHour: [],
// //       sumCookiesBoughtArr: 0,
// //     },
// //     render: function () {
// //       var listEl = document.getElementById('locations');
// //       var heading = document.createElement('h2');
// //       heading.textContent = this.name;
// //       listEl.appendChild(heading);

// //       for (var i=0; i < this.cookiesBoughtArr.byHour.length; i++) {
// //         var itemEl = document.createElement('li');
// //         itemEl.textContent = hours[i] + ' ' + this.cookiesBoughtArr.byHour[i];
// //         listEl.appendChild(itemEl);
// //       }
// //     }
// //   }

// // var dubai = {
// //     name: 'Dubai',
// //     min: 11,
// //     max: 38,
// //     avg: 3.7,
// //     cookiesBoughtArrCombo: {
// //       byHour: [],
// //       sumCookiesBoughtArr: 0,
// //     },
// //     render: function () {
// //       var listEl = document.getElementById('locations');
// //       var heading = document.createElement('h2');
// //       heading.textContent = this.name;
// //       listEl.appendChild(heading);

// //       for (var i=0; i < this.cookiesBoughtArr.byHour.length; i++) {
// //         var itemEl = document.createElement('li');
// //         itemEl.textContent = hours[i] + ' ' + this.cookiesBoughtArr.byHour[i];
// //         listEl.appendChild(itemEl);
// //       }
// //     }
// //   }


  

// // var paris = {
// //     name: 'Paris',
// //     min: 30,
// //     max: 28,
// //     avg: 2.3, 
// //     cookiesBoughtArrCombo: {
// //       byHour: [],
// //       sumCookiesBoughtArr: 0,
// //     },
// //     render: function () {
// //       var listEl = document.getElementById('locations');
// //       var heading = document.createElement('h2');
// //       heading.textContent = this.name;
// //       listEl.appendChild(heading);

// //       for (var i=0; i < this.cookiesBoughtArr.byHour.length; i++) {
// //         var itemEl = document.createElement('li');
// //         itemEl.textContent = hours[i] + ' ' + this.cookiesBoughtArr.byHour[i];
// //         listEl.appendChild(itemEl);
// //       }
// //     }
// //   }




// // var lima = {
// //     name: 'Lima',
// //     min: 2,
// //     max: 16,
// //     avg: 4.6,
// //     cookiesBoughtArrCombo: {
// //       byHour: [],
// //       sumCookiesBoughtArr: 0,
// //     },
// //     render: function () {
// //       var listEl = document.getElementById('locations');
// //       var heading = document.createElement('h2');
// //       heading.textContent = this.name;
// //       listEl.appendChild(heading);
      
// //       for (var i=0; i < this.cookiesBoughtArr.byHour.length; i++) {
// //         var itemEl = document.createElement('li');
// //         itemEl.textContent = hours[i] + ' ' + this.cookiesBoughtArr.byHour[i];
// //         listEl.appendChild(itemEl);
// //       }
// //     }
// // }

// // //calculate the number of cookies sold at each store with the randomGuests variable and the avg of each city
// // // stores the TOTAL amount of cookies sold for each hour AND sums the grand total

// // objects, that is `places`, with their associated data
// // name, min, max, avg are all provided
// // storage [] I think has to be used to complete questions 5, 6 of lab
// // randomGuests() method generates a random number of guests between the min and the max. The number can be the min or the max
// // cookiesBought() method generates a random number of cookies bought using the average for each `place` and the randomGuests() method

