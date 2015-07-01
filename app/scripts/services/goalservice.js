'use strict';

/**
 * @ngdoc service
 * @name stratagemApp.GoalService
 * @description
 * # GoalService
 * Service in the stratagemApp.
 */
angular
    .module('stratagemApp')

    .service('GoalService', [

        '$http',

        function ($http) {

            //get all goals data from the test json file
            function getDataGoals() {
                return $http.get('../../data/goals.js');
            }


            //public methods
            return {
                getDataGoals: getDataGoals
            };
        }]
);
