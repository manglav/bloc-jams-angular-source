(function() {
  function AnalyticsCtrl(Metrics, $scope) {
    this.metrics = Metrics;
    $scope.person = {message: "hello", name: "brian", data: Metrics };

    var pageObj = {name: 'Analytics', url: '/analytics'}
    $scope.$on('$stateChangeSuccess', function () {
      Metrics.registerPageLoad(pageObj);
    });
  };

  angular
    .module('blocJams')
    .controller('AnalyticsCtrl', ['Metrics', '$scope', AnalyticsCtrl])
})();
