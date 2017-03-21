angular.module('ProductsStore').directive("starRating",function(){
  return{
  scope:{
    ngModel:'=?'
  },
  link:function(scope,ele,attr){
    scope.ngModel = scope.ngModel ||0;
    var rating = scope.ngModel;
    for (var i = 0; i < rating; i++) {
      // add stars
      ele.append('<i class="fa fa-star">')
    }
    for (var i = 0; i < 5-rating; i++) {
      // add stars empty
      ele.append('<i class="fa fa-star-o">')
    }
  }
  }
})
