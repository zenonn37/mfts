/**
 * Created by pure coder on 4/23/2014.
 */
angular.module('controller.modalCtrl')

    .factory('ContactService',['$firebase',function($firebase){

        var contactRef = new Firebase("https://muscle.firebaseio.com/contacts");

        return $firebase(contactRef);


    }]);
