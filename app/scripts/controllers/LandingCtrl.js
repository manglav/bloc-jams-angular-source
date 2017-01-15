(function() {
    function LandingCtrl($scope) {
        this.heroTitle = "Turn the Music Up!";

        $scope.$on('$stateChangeSuccess', function () {
          console.log('landing has loaded');
        });
    };

    angular
        .module('blocJams')
        .controller('LandingCtrl', ['$scope', LandingCtrl]);
})();
