angular.module('hellosolarsystem').component('about', {
  templateUrl:  'about/about.html',

  controller: function($scope, $state, $stateParams) {
  		var receivedName = $stateParams.value1;
  		// alert(receivedName);
  		console.log(receivedName);
  		console.log($stateParams);
  		$scope.value1 = $stateParams.value1;
  		$scope.value2 = $stateParams.value2;

  		console.log($stateParams.value1);
  		console.log($stateParams.value2);

      $scope.submit3 = function (){
        //alert("haha");
        $scope.user = {
        "username":$scope.value1,
        "password":$scope.value2,
        "transout":$scope.transout,
        "money":$scope.money
      };

      console.log("submit3的信息");
      console.log($scope.user.username);
      console.log($scope.user.username);
      console.log($scope.user.username);
      console.log($scope.user.username);
      $state.go('confirm',{value1:$scope.user.username,value2:$scope.user.password,value3:$scope.user.transout,value4:$scope.user.money});
    }
  }
})