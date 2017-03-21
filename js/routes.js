angular.module('ProductsStore').config(function ($routeProvider) {
  $routeProvider
  .when('/',{
    templateUrl:'templates/home.html',
    controller:'home'
  })
  .when('/products/:product_name',{
    templateUrl:'templates/product.html',
    controller:'product'
  })
})
