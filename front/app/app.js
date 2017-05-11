'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('hellosolarsystem', ['ui.router']);
myApp.config(function($stateProvider) {
  // An array of state definitions
  var states = [
    { 
      name: 'hello', 
      url: '/hello', 
      // Using component: instead of template:
      component: 'hello'  
    },
    
    // { 
    //   name: 'about', 
    //   url: '/about/{value1}', 
    //   component: 'about'
    // },
    {
      name: 'about',
      url: '/about/:value1/:value2',
      component: 'about'
      //params:{'args':{}}
    },
    {
      name: 'success',
      url: '/success',
      component: 'success'
    },

    {
      name: 'confirm',
      url: '/confirm/:value1/:value2/:value3/:value4',
      component: 'confirm'
      // resolve:{
      //   message:function(MoneyService){
      //     return MoneyService.getAllMoney();
      //   }
      // }
    },
    
    { 
      name: 'people', 
      url: '/people', 
      component: 'people',
      // This state defines a 'people' resolve
      // It delegates to the PeopleService to HTTP fetch (async)
      // The people component receives this via its `bindings: `
      resolve: {
        people: function(PeopleService) {
          return PeopleService.getAllPeople();
        }
      }
    },
    
    { 
      name: 'person', 
      // This state takes a URL parameter called personId
      url: '/people/{personId}', 
      component: 'person',
      // This state defines a 'person' resolve
      // It delegates to the PeopleService, passing the personId parameter
      resolve: {
        person: function(PeopleService, $transition$) {
          return PeopleService.getPerson($transition$.params().personId);
        }
      }
    },

    {
    	name: 'movie',
    	url: '/movie',
    	component: 'movie',
    	resolve: {
    		movie: function(MovieService){
    			return MovieService.getAllMovie();
    		}
    	}
    },

    {
    	name: 'videoSimple',
    	url: '/video/{videoId}',
    	component: 'videoSimple',
    	resolve: {
    		video: function(MovieService,$transition$){
    			return MovieService.getMovie($transition$.params().videoId);
    		}
    	}
    },
    {
    	name: 'test',
    	url: '/test/test/',
    	component: 'test'
      
    },
    {
      name: 'filter',
      url: '/filter',
      component: 'filter',
      resolve:{
        phone: function(productData){
          return productData.getPhone();
        }
      }
    }
  ]
  
  // Loop over the state definitions and register them
  states.forEach(function(state) {
    $stateProvider.state(state);
  });
});

// To account for plunker embeds timing out, preload the async data
// myApp.run(function($http) {
//   $http.get('people.json', { cache: true });
// });