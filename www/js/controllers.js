angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {

    $scope.buttons = [{
      label: 'como usar',
      icon: 'ion-help'
    },{
      label: 'configurações',
      icon: 'ion-ios-gear-outline'
    }];

});