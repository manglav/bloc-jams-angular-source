(function() {
    function AlbumCtrl(Fixtures, SongPlayer, Metrics) {
        this.albumData = Fixtures.seedMusic();
        this.songPlayer = SongPlayer;
        this.metrics = Metrics;
        // this.seedMusic = Fixtures.seedMusic();

        // console.log('this.seedMusic');
    };

    angular
        .module('blocJams')
        .controller('AlbumCtrl', ['Fixtures', 'SongPlayer', 'Metrics', AlbumCtrl]);
})();
