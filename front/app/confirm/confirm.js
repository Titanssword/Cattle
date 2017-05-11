angular.module('hellosolarsystem').component('confirm', {
  templateUrl:  'confirm/confirm.html',
  controller: function($scope, $state, $stateParams) {
  		var receivedName = $stateParams.value1;
  		// alert(receivedName);
  		console.log(receivedName);
  		console.log($stateParams);
  		$scope.value1 = $stateParams.value1;
  		$scope.value2 = $stateParams.value2;
  		$scope.value3 = $stateParams.value3;
  		$scope.value4 = $stateParams.value4;
  		console.log($stateParams.value1);
  		console.log($stateParams.value2);

      	console.log($stateParams.value3);
  		console.log($stateParams.value4);

  		$scope.value5 = Date();

  		$scope.submit4 = function(){
  			$state.go('success');
  		}
  }
})