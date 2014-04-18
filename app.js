/**
 * Created by pure coder on 4/18/2014.
 */
angular.module('app',['ui.router'])
    .config(['$urlRouterProvider','$stateProvider',function($urlRouterProvider,$stateProvider){

        $urlRouterProvider.otherwise('/');



                        $stateProvider


                            .state('main',{

                                url:'/',
                                templateUrl:'templates/main.html',
                                controller:'mainCtrl'




                            });


    }]);
