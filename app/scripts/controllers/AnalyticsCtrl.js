(function() {
  function AnalyticsCtrl(Metrics, $scope) {
    $scope.person = {message: "hello", name: "brian", data: Metrics };
    $scope.$on('$stateChangeSuccess', function () {
      console.log('analytics has loaded');
    });
  };

  angular
    .module('blocJams')
    .controller('AnalyticsCtrl', ['Metrics', '$scope', AnalyticsCtrl])
})();
