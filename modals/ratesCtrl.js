/**
 * Created by pure coder on 4/20/2014.
 */
angular.module('controller.modalCtrl',[])
    .controller('ratesCtrl',['$scope',function($scope){


        $scope.data = "test";
        console.log($scope.data);

           $scope.personals = [

               {

                   'planid':'1',
                   'sessions':30,
                   'psession':30,
                   'planA':'Six Bi-weekly',
                   'planB':'None',
                   'apayment':150,
                   'bpayment':0,
                   'plantotal':900,
                   'duration':30


               },
               {

                   'planid':'2',
                   'sessions':22,
                   'psession':34,
                   'planA':'Five Bi-weekly',
                   'planB':'Six Bi-weekly',
                   'apayment':125,
                   'bpayment':150,
                   'plantotal':750,
                   'duration':30


               },
               {

                   'planid':'3',
                   'sessions':11,
                   'psession':36,
                   'planA':'weekly',
                   'planB':'monthly',
                   'apayment':100,
                   'bpayment':200,
                   'plantotal':900,
                   'duration':30


               },
               {

                   'planid':'4',
                   'sessions':30,
                   'psession':53,
                   'planA':'Six Bi-weekly',
                   'planB':'Eight Bi-weekly',
                   'apayment':266,
                   'bpayment':200,
                   'plantotal':1600,
                   'duration':60


               },
               {

                   'planid':'5',
                   'sessions':20,
                   'psession':57,
                   'planA':'Six Bi-weekly',
                   'planB':'none',
                   'apayment':191,
                   'bpayment':0,
                   'plantotal':1150,
                   'duration':60


               },
               {

                   'planid':'6',
                   'sessions':10,
                   'psession':58,
                   'planA':'Five Bi-weekly',
                   'planB':'none',
                   'apayment':150,
                   'bpayment':0,
                   'plantotal':750,
                   'duration':60


               }












           ];




    }]);
