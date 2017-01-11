(function() {
  function AnalyticsCtrl($scope) {
    $scope.person = {message: "hello", name: "brian"};

  };

  angular
    .module('blocJams')
    .controller('AnalyticsCtrl', AnalyticsCtrl)
})();
