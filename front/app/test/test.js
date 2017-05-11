angular.module('hellosolarsystem').component('test',{
  	templateUrl: 'test/test.html',
  	
  	controller: function($scope, $state, $stateParams) {
  		$scope.cart = [
  			{
  				id:1000,
  				name:'iphone',
  				quantity:3,
  				price:'4300'
  			},
  			{
  				id:1002,
  				name:'xiaomi',
  				quantity:3,
  				price:'1300'
  			},
  			{
  				id:1004,
  				name:'huawei',
  				quantity:3,
  				price:'3300'
  			},
  			{
  				id:1006,
  				name:'meizu',
  				quantity:3,
  				price:'2300'
  			}
  		];
  		console.log($scope.cart);
  		$scope.totalPrice = function(){
  			var total = 0;
  			angular.forEach($scope.cart,function(item){
  				total += item.quantity * item.price;
  			})
  			return total;
  		}
  		$scope.totalQuantity = function(){
  			var total = 0;
  			angular.forEach($scope.cart,function(item){
  				total += parseInt(item.quantity);
  			})
  			return total;
  		}
  		$scope.remove = function(id){
  			//alert(id);
  			// var index = -1;
  			// angular.forEach($scope.cart,function(item,key){
  			// 	if(item.id === id){
  			// 		index = key;
  			// 	}
  			// });
  			var index = findIndex(id);
  			if( index !== -1){
  				//从第几位开始，删除 1 位
  				$scope.cart.splice(index,1);
  			}
  		}

  		/**
  		数量减一
  		**/
  		$scope.minus = function(id){
  			// angular.forEach($scope.cart,function(item,key){
  			// 	if(item.id === id){
  			// 		index = key;
  			// 		item.quantity--;
  			// 	}

  			// });
  			var index = findIndex(id);
  			if(index !== -1){
  				var item = $scope.cart[index];
  				if(item.quantity > 1){
  					--item.quantity;
  				}else{
  					var returnKey = confirm('从购物车中移除该产品');
  					if(returnKey){
  						$scope.remove(id);
  					}
  				}
  			}
  			
  		}
  		/*
  		* 数量加一
  		*/
  		$scope.add = function(id){
  			// angular.forEach($scope.cart,function(item,key){
  			// 	if(item.id === id){
  			// 		index = key;
  			// 		item.quantity++;
  			// 	}

  			// });
  			index = findIndex(id);
			if( index !== -1){
				$scope.cart[index].quantity++;
			}
  			
  		}

  		/*
  		监听cart对象，保证quantity不为负数
  		*/

  		$scope.$watch('cart',function(newValue,oldValue){
  			angular.forEach(newValue,function(item,key){
  				if(item.quantity < 1){
  					var returnKey = confirm('从购物车中移除该产品');
  					if(returnKey){
  						$scope.remove(item.id);
  					}else{
  						item.quantity = oldValue[key].quantity;
  					}
  				}
  			})
  		},true)
  		/**
  		根据id进行查找
  		*/
  		var findIndex = function(id){
  			var index = -1;
  			angular.forEach($scope.cart,function(item,key){
  				if(item.id === id){
  					index = key;
  					return;
  				}

  			});
  			return index;
  		}

  		
  }
})