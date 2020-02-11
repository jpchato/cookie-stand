'use strict'
// var hours is an array of the hours that the store is open
// var places is an array of the objects
// var shopData is a function (not a method, because it is not in an object) that eventually should cycle through each hour and generate a number of cookies sold at each location at each hour BUT I HAVE NO IDEA WHAT I'M DOING PLEASE HELP
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var places = [seattle, tokyo, dubai, paris, lima];

//calculates a random number between the min and max for the respective city
function randomGuests(min, max){
  min = Math.ceil(min);
  max= Math.floor(max);

  return Math.floor(Math.random() * (max - min) + min);

}

//calculate the number of cookies sold at each store with the randomGuests variable and the avg of each city
// stores the TOTAL amount of cookies sold for each hour AND sums the grand total
function storeData (store){
  var cookiesBoughtArr = [];
  var sumCookiesBoughtArr = 0;
  for (i=0; i<hours.length; i++){
    var intermediateCalc = randomGuests(store.min, store.max);
    var xyz = Math.floor(intermediateCalc * store.avg);
    console.log(hours[i], ' o\'clock: ', xyz, ' cookies sold' );
    cookiesBoughtArr.push(xyz);
    sumCookiesBoughtArr = xyz + sumCookiesBoughtArr;
  }
  return {
    byHour: cookiesBoughtArr,
    sumCookiesBoughtArr,
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
    cookiesBoughtArrCombo: {
      byHour: [],
      sumCookiesBoughtArr: 0,
    },
    render: function () {
      varlistEl = document.getElementById('places');
      var heading = document.createElement('h2');
      heading.textContent = this.name;
      listEl.appendchild('heading');
      for (var i=0; i < this.cookiesBoughtArr.byHour.length; i++) {
        var itemEl = document.createElement('li');
        itemEl.textContent = hours[i] + ' ' + this.cookiesBoughtArr.byHour[i];
        listEl.appendchild(itemEl);
      }
    }
}
 

var tokyo = {
    name: 'Tokyo',
    min: 3,
    max: 24,
    avg: 1.2,
    cookiesBoughtArrCombo: {
      byHour: [],
      sumCookiesBoughtArr: 0,
    },
    render: function () {
      varlistEl = document.getElementById('places');
      var heading = document.createElement('h2');
      heading.textContent = this.name;
      listEl.appendchild('heading');
      for (var i=0; i < this.cookiesBoughtArr.byHour.length; i++) {
        var itemEl = document.createElement('li');
        itemEl.textContent = hours[i] + ' ' + this.cookiesBoughtArr.byHour[i];
        listEl.appendchild(itemEl);
      }
    }
  }


var dubai = {
    name: 'Dubai',
    min: 11,
    max: 38,
    avg: 3.7,
    cookiesBoughtArrCombo: {
      byHour: [],
      sumCookiesBoughtArr: 0,
    },
    render: function () {
      varlistEl = document.getElementById('places');
      var heading = document.createElement('h2');
      heading.textContent = this.name;
      listEl.appendchild('heading');
      for (var i=0; i < this.cookiesBoughtArr.byHour.length; i++) {
        var itemEl = document.createElement('li');
        itemEl.textContent = hours[i] + ' ' + this.cookiesBoughtArr.byHour[i];
        listEl.appendchild(itemEl);
      }
    }
  }
  

var paris = {
    name: 'Paris',
    min: 30,
    max: 28,
    avg: 2.3, 
    cookiesBoughtArrCombo: {
      byHour: [],
      sumCookiesBoughtArr: 0,
    },
    render: function () {
      varlistEl = document.getElementById('places');
      var heading = document.createElement('h2');
      heading.textContent = this.name;
      listEl.appendchild('heading');
      for (var i=0; i < this.cookiesBoughtArr.byHour.length; i++) {
        var itemEl = document.createElement('li');
        itemEl.textContent = hours[i] + ' ' + this.cookiesBoughtArr.byHour[i];
        listEl.appendchild(itemEl);
      }
    }
  }


var lima = {
    name: 'Lima',
    min: 2,
    max: 16,
    avg: 4.6,
    cookiesBoughtArrCombo: {
      byHour: [],
      sumCookiesBoughtArr: 0,
    },
    render: function () {
      varlistEl = document.getElementById('places');
      var heading = document.createElement('h2');
      heading.textContent = this.name;
      listEl.appendchild('heading');
      for (var i=0; i < this.cookiesBoughtArr.byHour.length; i++) {
        var itemEl = document.createElement('li');
        itemEl.textContent = hours[i] + ' ' + this.cookiesBoughtArr.byHour[i];
        listEl.appendchild(itemEl);
      }
    }
}

seattle.cookiesBoughtArr = storeData(seattle);
seattle.render;