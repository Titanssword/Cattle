angular.module('hellosolarsystem').service('MovieService',function($http){
	var service = {
		getAllMovie: function(){
			return $http.get('movie.json',{ cache: true}).then(function(resp){
				return resp.data;
			});
		},
		getMovie: function(id){
			function MovieMatchParam(video){
				return video.id === id;
			}
			return service.getAllMovie().then(function(movie){
				return movie.find(MovieMatchParam)
			});
		}
	}
	return service;
})