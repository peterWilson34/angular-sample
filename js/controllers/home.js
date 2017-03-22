angular.module('ProductsStore').controller('home',function(Products,$scope){
  Products.getAllProducts().then(function (res) {
    $scope.products =res;
  })
})
