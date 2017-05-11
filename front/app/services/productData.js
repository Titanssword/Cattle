angular.module('hellosolarsystem').service('productData',function($http){
	var service = {
		getPhone: function(){
			return $http.get('phone.json',{ cache: true}).then(function(resp){
				return resp.data;
			});
		}
		
		// getMoney: function(id){
		// 	function MoneyMatchParam(video){
		// 		return video.id === id;
		// 	}
		// 	return service.getAllMovie().then(function(movie){
		// 		return movie.find(MovieMatchParam)
		// 	});
		// }
	}
	return service;
	// return [
 //        {
 //          id: 001
 //          name: 'iphone1',
 //          price: 1000
 //        },
 //        {
 //          id: 002
 //          name: 'iphone2',
 //          price: 2000
 //        },
 //        {
 //          id: 003
 //          name: 'iphone3',
 //          price: 3000
 //        },
 //        {
 //          id: 004
 //          name: 'iphone4',
 //          price: 4000
 //        }
 //      ]
})