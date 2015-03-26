angular.module('eattime.controllers', [])

.controller('HomeCtrl', function($scope) {

    $scope.last         = '8h30m';
    $scope.intervalo    = '3';
    $scope.repeticoes   = '6';

    var open = false;

    $scope.openSettings = function() {
        var btSet   = document.getElementById('bt-settings'),
            panSet  = document.getElementById('settings'),
            heigth  = 'auto',
            bt      = 270,
            opacity = 1;

        if(open) {
            heigth  = 0;
            bt      = 0;
            opacity = 0;
        }

        var end = function() {
            move(panSet)
                .set('opacity', opacity)
                .ease('linear')
                .duration('.4s')
                .end();
            open = !open;
        }

        move(btSet)
            .ease('linear')
            .rotate(bt)
            .duration('.2s')
            .end( end() );
    }

});