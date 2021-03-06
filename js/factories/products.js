angular.module('ProductsStore').factory('Products',function ($http,$q) {
  return{
    getAllProducts:function (){
      var def = $q.defer();
      $http({
        url:"products.json"
      }).then(function(res){
        def.resolve(res.data)
      })
      return def.promise;
    },
    getProductByName:function(name) {
      var def = $q.defer();
      $http({
        url:"products.json"
      }).then(function(res){
        for (var i = 0; i < res.data.length; i++) {
          if (res.data[i].name == name) {
            def.resolve(res.data[i])

          }
        }
      })
      return def.promise;
    },
    searchProductsByName:function(name) {
      var def = $q.defer();
      var products=[];
      $http({
        url:"products.json"
      }).then(function(res){
        for (var i = 0; i < res.data.length; i++) {
          if (res.data[i].name.toLowerCase().includes(name.toLowerCase())) {
            products.push(res.data[i])
            def.resolve(products)

          }
        }
      })
      return def.promise;
    }
  }
})
