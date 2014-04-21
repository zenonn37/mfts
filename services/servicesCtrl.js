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


        $scope.workshops = [

            {
                ':id':1,
                'name':'Body-Fat',
                'desp':'This workshop focuses on nutrition weight and bodyfat loss as you sculpt and tone muscle, transforming your body.  Our Certified Personal Trainers are always there to constantly motivate as well as provide detailed nutrition schemes and simple, fun, safe and effective workout programs. Muscle Flow Training Systems will also perform weigh-ins every 3 weeks including body fat analysis, bmi and measurements. This workshop guarantees results.',
                'maxi':6,
                'image':'bodyfat.jpg',
                'days':[
                    {
                        'day1':'Monday',
                        'timed':'5am to 6am and 430pm to 530pm',
                        'active':true
                    },


                    {
                        'day2':'Tuesday',
                        'timed':'None',
                        'active':false
                    },

                    {
                        'day3':'Wednesday',
                        'timed':'5am to 6am and 430pm to 530pm',
                        'active':true
                    },

                    {
                        'day4':'Thursday',
                        'timed':'5am to 6am and 430pm to 530pm',
                        'active':true
                    },

                  {
                        'day5':'Friday',
                        'timed':'5am to 6am and 430pm to 530pm',
                        'active':true
                    },

                    {
                        'day6':'Saturday',
                        'timed':'1030 am to 1130 am and 1130 am to 1230 pm',
                        'active':true
                    },

                    {
                        'day7':'Sunday',
                        'timed':'None',
                        'active':false
                    }


                ]





            }




        ];


    }])
    .controller('nutritionCtrl',['$scope',function($scope){

        $scope.data="nutrition";
        console.log($scope.data);


    }]);
