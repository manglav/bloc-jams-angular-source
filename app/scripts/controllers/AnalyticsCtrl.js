(function() {
  function AnalyticsCtrl($scope) {
    $scope.person = {message: "hello", name: "brian"};
    // $rootScope.test = {songPlays: $rootScope.songPlays}
  };

  angular
    .module('blocJams')
    .controller('AnalyticsCtrl', AnalyticsCtrl)
})();
