'use strict'

var hours = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
var places = [seattle, tokyo, dubai, paris, lima];

var seattle = {
    name: 'Seattle',
    min: 23,
    max: 65,
    avg: 6.3,
    storage: [],
    randomGuests: function(max,min){
      randomNumber = Math.floor(Math.random() * (this.max - this.min) + this.min);
      return randomNumber;
    },
    cookiesBought: function (randomGuests, avg){
      var cookiesHour = (this.randomGuests() * this.avg);
      return cookiesHour;
    }
}
 

var tokyo = {
    name: 'Tokyo',
    min: 3,
    max: 24,
    avg: 1.2,
    storage: [],
    randomGuests: function(max,min){
      randomNumber = Math.floor(Math.random() * (this.max - this.min) + this.min);
      return randomNumber;
    },
    cookiesBought: function (randomGuests, avg){
      var cookiesHour = (this.randomGuests() * this.avg);
      return cookiesHour;
    }
  }

var dubai = {
    name: 'Dubai',
    min: 11,
    max: 38,
    avgCookieSale: 3.7,
    storage: [],
    randomGuests: function(max,min){
      randomNumber = Math.floor(Math.random() * (this.max - this.min) + this.min);
      return randomNumber;
    },
    cookiesBought: function (randomGuests, avg){
      var cookiesHour = (this.randomGuests() * this.avg);
      return cookiesHour;
    }
  }
  
var paris = {
    name: 'Paris',
    min: 30,
    max: 28,
    avg: 2.3, 
    storage: [],
    randomGuests: function(max,min){
      randomNumber = Math.floor(Math.random() * (this.max - this.min) + this.min);
      return randomNumber;
    },
    cookiesBought: function (randomGuests, avg){
      var cookiesHour = (this.randomGuests() * this.avg);
      return cookiesHour;
    }
  }

var lima = {
    name: 'Lima',
    min: 2,
    max: 16,
    avg: 4.6,
    storage: [],
    randomGuests: function(max,min){
      randomNumber = Math.floor(Math.random() * (this.max - this.min) + this.min);
      return randomNumber;
    },
    cookiesBought: function (randomGuests, avg){
      var cookiesHour = (this.randomGuests() * this.avg);
      return cookiesHour;
    }
  }

  var storageArr = function(){
    for (var places=0; places < places.length; places++){

    }
  }

  //Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated

  }

  //Store the results for each location in a separate array… perhaps as a property of the object representing that location

  
  //Display the values of each array as unordered lists in the browser
  var listEl = getDocumentById('x');
  var xEl = document.createElement('li');
  x.textContent = x.name;
  unorderedlist.El.appendchild('x');

  //Calculating the sum of these hourly totals; your output for each location should look like this:
  time: # cookies