/**
 * Created by Ruby on 4/21/2014.
 */

angular.module('controller.services',[])

    .controller('personalCtrl',['$scope',function($scope){

        $scope.data="pt";
        console.log($scope.data);




    }])
    .controller('workshopsCtrl',['$scope',function($scope){

        $scope.data="workshops";
        console.log($scope.data);


    }])
    .controller('nutritionCtrl',['$scope',function($scope){

        $scope.data="nutrition";
        console.log($scope.data);


    }]);
