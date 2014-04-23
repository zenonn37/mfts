/**
 * Created by pure coder on 4/23/2014.
 */
angular.module('controller.modalCtrl')

    .factory('StartService',['$firebase',function($firebase){

        var startRef = new Firebase("https://muscle.firebaseio.com/start");


        return $firebase(startRef)
    }]);
