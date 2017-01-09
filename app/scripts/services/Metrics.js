(function() {
  function Metrics ($rootScope) {
    $rootScope.songPlays = [];

    return {

      registerSongPlay: function(songObj) {
        songObj['playedAt'] = new Date();
        $rootScope.songPlays = push(songObj);
      },

      listSongsPlayed: function() {
        var songs = [];
        angular.forEach($rootScope.songPlays, function(song) {
          songs.push(song.title);
        });

        return songs;
      }
    };
  }

  angular
    .module('blocJams')
    .service('Metrics', ['$rootScope', Metrics]);
});
