/**
 * Created by Ruby on 4/21/2014.
 */

angular.module('workshop.dir',[])

    .directive('workShop',[function(){

       return{

           'restrict':'E',
           'replace':'true',
           'scope':{
               'workshop':'=',
               'mytime':'='
           },
           'templateUrl':'directives/templates/output.html',
           controller : function($scope){
               console.log($scope.workshop);
           }



       };


    }]);
