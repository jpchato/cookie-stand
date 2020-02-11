'use strict'
// var hours is an array of the hours that the store is open
// var places is an array of the objects
// var shopData is a function (not a method, because it is not in an object) that eventually should cycle through each hour and generate a number of cookies sold at each location at each hour BUT I HAVE NO IDEA WHAT I'M DOING PLEASE HELP
var hours = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
var places = [seattle, tokyo, dubai, paris, lima];
var shopData = function(){
  // for will loop through each hour and create data for each hour at each place
  for (var cyclePlaces=0; storeLocation <places.length; storeLocation ++){
    




  }
}

// objects, that is `places`, with their associated data
// name, min, max, avg are all provided
// storage [] I think has to be used to complete questions 5, 6 of lab
// randomGuests() method generates a random number of guests between the min and the max. The number can be the min or the max
// cookiesBought() method generates a random number of cookies bought using the average for each `place` and the randomGuests() method
var seattle = {
    name: 'Seattle',
    min: 23,
    max: 65,
    avg: 6.3,
    storage: [seattle.cookiesBought],
    randomGuests: function(max,min){
      randomNumber = Math.floor(Math.random() * (this.max - this.min) + this.min);
      return randomNumber;
      
    },
    cookiesBought: function (randomGuests, avg){
      var cookiesHour = Math.floor(this.randomGuests() * this.avg);
      storage = cookiesBought.push(cookiesHour);
      return cookiesHour;
      
      
    },
    shopData: function (){
      for (var places=0; places <places.length; places ++);
      return (seattle.cookiesHour)
    }
}
 

var tokyo = {
    name: 'Tokyo',
    min: 3,
    max: 24,
    avg: 1.2,
    storage: [this.cookiesBought],
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
    storage: [this.cookiesBought],
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
    storage: [this.cookiesBought],
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
    storage: [this.cookiesBought],
    randomGuests: function(max,min){
      randomNumber = Math.floor(Math.random() * (this.max - this.min) + this.min);
      return randomNumber;
    },
    cookiesBought: function (randomGuests, avg){
      var cookiesHour = Math.floor(this.randomGuests() * this.avg);
      return cookiesHour;
    }
  }