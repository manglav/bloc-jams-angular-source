(function() {
    function CollectionCtrl(Fixtures, $scope, Metrics) {
        this.albums = Fixtures.getCollection(12);

        var pageObj = {name: 'Collection', url: '/collection'}
        $scope.$on('$stateChangeSuccess', function () {
          Metrics.registerPageLoad(pageObj);
        });

    };

    angular
        .module('blocJams')
        .controller('CollectionCtrl', ['Fixtures', '$scope', 'Metrics', CollectionCtrl]);
})();
