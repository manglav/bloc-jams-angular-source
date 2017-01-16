(function() {
    function LandingCtrl($scope, Metrics) {
        this.heroTitle = "Turn the Music Up!";

        this.metrics = Metrics;
        var pageObj = {name: 'Landing', url: '/'}
        $scope.$on('$stateChangeSuccess', function () {
          Metrics.registerPageLoad(pageObj);
        });
    };

    angular
        .module('blocJams')
        .controller('LandingCtrl', ['$scope', 'Metrics', LandingCtrl]);
})();
