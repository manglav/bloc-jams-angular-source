(function() {
    function AnalyticsCtrl(Metrics, $scope) {
      $scope.person = { fname: 'Clark', lname: 'Kent', data: Metrics };

    };

    angular
        .module('blocJams')
        .controller('AnalyticsCtrl', ['Metrics', '$scope', AnalyticsCtrl]);
})();
