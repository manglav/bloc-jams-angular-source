(function() {
    function AlbumCtrl(Fixtures, SongPlayer, Metrics, $scope) {
        this.albumData = Fixtures.seedMusic();
        this.songPlayer = SongPlayer;
        this.metrics = Metrics;
        // this.seedMusic = Fixtures.seedMusic();
        // console.log('this.seedMusic');
        $scope.$on('$stateChangeSuccess', function () {
          console.log('album has loaded');
        });
    };

    angular
        .module('blocJams')
        .controller('AlbumCtrl', ['Fixtures', 'SongPlayer', 'Metrics', '$scope', AlbumCtrl]);
})();
