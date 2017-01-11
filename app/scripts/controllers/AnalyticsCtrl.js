(function() {
  function AnalyticsCtrl(Metrics, $scope) {
    $scope.person = {message: "hello", name: "brian", data: Metrics };

  };

  angular
    .module('blocJams')
    .controller('AnalyticsCtrl', ['Metrics', '$scope', AnalyticsCtrl])
})();
