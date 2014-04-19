/**
 * Created by pure coder on 4/18/2014.
 */
angular.module('app',['ui.router','directives.skrollr'])
    .config(['$urlRouterProvider','$stateProvider',function($urlRouterProvider,$stateProvider){

        $urlRouterProvider.otherwise('/');



                        $stateProvider


                            .state('main',{

                                url:'/',
                                templateUrl:'main/main.html',
                                controller:'mainCtrl'




                            });


    }]);
