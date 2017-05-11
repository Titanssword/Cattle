angular.module('hellosolarsystem').component('hello', {
  templateUrl: 'hello/hello.html',
             
  controller: function($scope,$state,$stateParams) {
    this.greeting = 'hello';
    
    this.toggleGreeting = function() {
      this.greeting = (this.greeting == 'hello') ? 'whats up' : 'hello'
    };
	
  //   $scope.submit = function (){
  //   	$scope.user = {
		// 	"username":$scope.username,
		// 	"password":$scope.password
		// };
  //   	alert($scope.user.username);
  //   	//alert($scope.user.password);
  //   	//$state.go('about',{value1:"123"});
  //   	$state.go('about',{value1:$scope.user.username});
  //   	//$state.go('test',{username:$scope.user.username});
  //   }

    $scope.submit2 = function (){
    	$scope.user = {
			"username":$scope.username,
			"password":$scope.password
		};

    	// $state.go('about.per',{
    	// 	args:{
    	// 		username:$scope.user.username,
    	// 		password:$scope.user.password
    	// 	}
    	// });
    	$state.go('about',{value1:$scope.user.username,value2:$scope.user.password});
    }
  }
})