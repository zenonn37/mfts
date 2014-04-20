/**
 * Created by pure coder on 4/20/2014.
 */
angular.module('modalctrl',[])
    .controller('ratesCtrl',['$scope',function($scope){


        $scope.data = "test";
        console.log($scope.data);

           $scope.personals = [

               {

                   'plan_id':'1',
                   'sessions':30,
                   'per-session':30,
                   'plan-A':'Six Bi-weekly payments',
                   'plan-B':'None',
                   'a-payment':150,
                   'b-payment':0,
                   'plan-total':900,
                   'time':30


               },
               {

                   'plan_id':'2',
                   'sessions':22,
                   'per-session':34,
                   'plan-A':'Five Bi-weekly payments',
                   'plan-B':'Six Bi-weekly payments',
                   'a-payment':125,
                   'b-payment':150,
                   'plan-total':750,
                   'time':30


               },
               {

                   'plan_id':'3',
                   'sessions':11,
                   'per-session':36,
                   'plan-A':'$100 weekly',
                   'plan-B':'$200 monthly',
                   'a-payment':100,
                   'b-payment':200,
                   'plan-total':900,
                   'time':30


               },
               {

                   'plan_id':'4',
                   'sessions':30,
                   'per-session':53,
                   'plan-A':'Six Bi-weekly payments',
                   'plan-B':'Eight Bi-weekly payments',
                   'a-payment':266,
                   'b-payment':200,
                   'plan-total':1600,
                   'time':60


               },
               {

                   'plan_id':'5',
                   'sessions':20,
                   'per-session':57,
                   'plan-A':'Six Bi-weekly payments',
                   'plan-B':'none',
                   'a-payment':191,
                   'b-payment':0,
                   'plan-total':1150,
                   'time':60


               },
               {

                   'plan_id':'6',
                   'sessions':10,
                   'per-session':58,
                   'plan-A':'Five Bi-weekly payments',
                   'plan-B':'none',
                   'a-payment':150,
                   'b-payment':0,
                   'plan-total':750,
                   'time':60


               }












           ];




    }]);
