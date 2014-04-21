/**
 * Created by pure coder on 4/18/2014.
 */
angular.module('app',['ui.router','directives.skrollr',
    'controller.modalCtrl','controller.services','workshop.dir',
    'controller.about'])

    .config(['$urlRouterProvider','$stateProvider',function($urlRouterProvider,$stateProvider){

        $urlRouterProvider.otherwise('/');



                        $stateProvider


                            .state('main',{

                                url:'/',
                                templateUrl:'main/main.html',
                                controller:'mainCtrl'




                            })

                            .state('personal',{

                                url:'/personal',
                                templateUrl:'services/personal.html',
                                controller:'personalCtrl'




                            })
                            .state('workshops',{

                                url:'/workshops',
                                templateUrl:'services/workshops.html',
                                controller:'workshopsCtrl'




                            })
                            .state('nutrition',{

                                url:'/nutrition',
                                templateUrl:'services/nutrition.html',
                                controller:'nutritionCtrl'




                            })

                            .state('about',{

                                url:'/about',
                                templateUrl:'company/about.html',
                                controller:'aboutCtrl'




                            });


    }]);
