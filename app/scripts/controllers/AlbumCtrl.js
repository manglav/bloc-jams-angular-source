(function() {
    function AlbumCtrl(Fixtures, SongPlayer, Metrics) {
        this.albumData = Fixtures.getAlbum();
        this.songPlayer = SongPlayer;
        this.metrics = Metrics;
    };

    angular
        .module('blocJams')
        .controller('AlbumCtrl', ['Fixtures', 'SongPlayer', 'Metrics', AlbumCtrl]);
})();
