angular.module('ProductsStore').controller('product',function(Products,$scope,$routeParams){
    Products.getProductByName($routeParams.product_name).then(function(res) {
      $scope.product = res;
      console.log(res);
    })
})
