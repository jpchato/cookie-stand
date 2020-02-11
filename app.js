'use strict'

var hours = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
var places = [seattle, tokyo, dubai, paris, lima];
for (var  placeArr = 0; placeArr < places.length; i++){
  var sortPlaces = places[placeArr];
}


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
      var cookiesHour = Math.floor(this.randomGuests() * this.avg);
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
      var cookiesHour = Math.floor(this.randomGuests() * this.avg);
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
      var cookiesHour = Math.floor(this.randomGuests() * this.avg);
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
      var cookiesHour = Math.floor(this.randomGuests() * this.avg);
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
      var cookiesHour = Math.floor(this.randomGuests() * this.avg);
      return cookiesHour;
    }
  }