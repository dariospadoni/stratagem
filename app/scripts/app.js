'use strict';

/**
 * @ngdoc overview
 * @name stratagemApp
 * @description
 * # stratagemApp
 *
 * Main module of the application.
 */
angular
    .module('stratagemApp', [
        'ui.router',
        'chart.js'
    ])
    .config(function ($stateProvider, $urlRouterProvider) {

        //default state
        $urlRouterProvider.otherwise('/line');

        $stateProvider

            //abstract route to load app global data
            .state('app', {
                url: '',
                abstract: true,
                template: '<ui-view/>',
                resolve: {
                    fields: ['GoalService', function (goalService) {
                        return goalService.getDataGoals();
                    }]
                }
            })

            .state('app.line', {
                url: '/line',
                templateUrl: '../views/line.html',
                resolve15: {
                    fields: function (fields) {
                        return fields.data;
                    }
                },
                controller: function($scope,fields){
                    $scope.defaultName = "Line graph";
                    $scope.labels = _.pluck(fields, 'team' );
                    $scope.values = [_.pluck(fields, 'value' )];
                }
            })

            .state('app.pie', {
                url: '/pie',
                templateUrl: '../views/pie.html',
                resolve: {
                    fields: function (fields) {
                        return fields.data;
                    }
                },
                controller: function($scope,fields){
                    $scope.defaultName = "Pie graph";
                    $scope.labels = _.pluck(fields, 'team' );
                    $scope.values = _.pluck(fields, 'value' );
                }
            })

            .state('app.bar', {
                url: '/bar',
                templateUrl: '../views/bar.html',
                resolve: {
                    fields: function (fields) {
                        return fields.data;
                    }
                },
                controller: function($scope,fields){
                    $scope.defaultName = "Bar graph";
                    $scope.labels = _.pluck(fields, 'team' );
                    $scope.values = [_.pluck(fields, 'value' )];
                }
            });
    });

