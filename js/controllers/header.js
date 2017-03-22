angular.module('ProductsStore').controller('header',function(Products,$scope,$rootScope,$location){
  $scope.searchProducts= function(name){
    Products.searchProductsByName(name).then(function(res) {
      for (var i = 0; i < res.length; i++) {
        res[i].avgRating=0;
        for (var j = 0; j < res[i].reviews.length; j++) {
          res[i].avgRating+=res[i].reviews[j].rate
        }
        res[i].avgRating /=res[i].reviews.length; 
      }
      $rootScope.searcResults = res;
      $location.url('/results')
    })
  }
});
