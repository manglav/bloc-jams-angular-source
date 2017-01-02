(function() {
    function AnalyticsCtrl($scope) {
      $scope.person = { fname: 'Clark', lname: 'Kent' };
    };

    angular
        .module('blocJams')
        .controller('AnalyticsCtrl', AnalyticsCtrl);
})();
