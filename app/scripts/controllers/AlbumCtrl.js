(function() {
    function AlbumCtrl(Fixtures, SongPlayer, Metrics, $scope) {
        this.albumData = Fixtures.seedMusic();
        this.songPlayer = SongPlayer;
        this.metrics = Metrics;
        // this.seedMusic = Fixtures.seedMusic();
        // console.log('this.seedMusic');

        var pageObj = {name: 'Collection', url: '/album'}
        $scope.$on('$stateChangeSuccess', function () {
          Metrics.registerPageLoad(pageObj);
        });
    };

    angular
        .module('blocJams')
        .controller('AlbumCtrl', ['Fixtures', 'SongPlayer', 'Metrics', '$scope', AlbumCtrl]);
})();
