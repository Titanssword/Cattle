angular.module('hellosolarsystem').component('filter',{
    bindings: { phone: '<' },
  	templateUrl: 'filter/filter.html',
  	// service: function(){
   //    return [
   //      {
   //        id: '001'
   //        name: 'iphone1',
   //        price: '1000'
   //      },
   //      {
   //        id: '002'
   //        name: 'iphone2',
   //        price: '2000'
   //      },
   //      {
   //        id: '003'
   //        name: 'iphone3',
   //        price: '3000'
   //      },
   //      {
   //        id: '004'
   //        name: 'iphone4',
   //        price: '4000'
   //      }
   //    ]
   //  }
  	controller: function($scope, $state,$stateParams) {
  		// $scope.productData = phone;

      //this 表示 这个controller，bindings: { phone: '<' }, 绑定到controller中的phone里，这样可以在html使用 $ctrl.phone得到值
      console.log (this);
      console.log(this.phone);

      $scope.orderType = 'id';
  		$scope.order = '-';

      $scope.changeOrder =  function(type){
        $scope.orderType = type;
        if($scope.order === '' ){
          $scope.order = '-';
        }
        else{
          $scope.order = '';
        }
      }
  }
})