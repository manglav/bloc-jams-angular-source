(function() {
  function MetricsCtrl($rootScope, $scope) {
    $scope.test = {message: "hello", name: "brian"};
    // $rootScope.test = {songPlays: $rootScope.songPlays}
  };

  angular
    .module('blocJams')
    .controller('MetricsCtrl', MetricsCtrl)
})();
