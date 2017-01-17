(function() {
  function Metrics ($rootScope, SongPlayer) {
    $rootScope.songPlays = [];
    $rootScope.pageLoads = [];
    $rootScope.songEnds = [];


    function eachPageLoads(loads) {
      var localPageLoads = loads;
      var pageNames = [];
      for (var i = 0; i < localPageLoads.length; i++) {
        pageNames.push(localPageLoads[i].name);
      }
      var pageCounts = {};
      pageNames.forEach(function(x) {
        pageCounts[x] = (pageCounts[x] || 0) + 1;
      });
      return pageCounts;
    }

// rebuilt in hello.jsx component
    function eachSongNamePlays(songPlays) {
        var localSongPlays = songPlays;
        // create new ARRAY with the SONG NAMES
        var songNames = [];
        for (var i = 0; i < localSongPlays.length; i++) {
          songNames.push(localSongPlays[i].name);
        }
        // create OBJECT with the key/value of song/plays
        var songCounts = {};
        songNames.forEach(function(x) {
          songCounts[x] = (songCounts[x] || 0) + 1;
        });
        return songCounts;

    }
    function eachSongEnds(songEnds) {
      var localSongEnds = songEnds;
      var songNames = [];
      for (var i = 0; i < localSongEnds.length; i++) {
        songNames.push(localSongEnds[i].name);
      }
      var endCounts = {};
      songNames.forEach(function(x) {
        endCounts[x] = (endCounts[x] || 0) + 1;
      });
      return endCounts;
    }



    return {
      //States recorded upon load, ie landing.html recorded when it loads
      registerPageLoad: function(pageObj) {
        $rootScope.pageLoads.push(pageObj);
        // console.log('page name:' + pageObj.name + ' is added to $rootScope.pageLoads');
        $rootScope.pageCounts = eachPageLoads($rootScope.pageLoads);
      },
      listPageLoads: function() {
        var pageLoads = [];
        angular.forEach($rootScope.pageLoads, function(page) {
          pageLoads.push(page.name);
        });
        return pageLoads;
      },


      //song data registered and returned below:
      registerSongPlay: function(songObj) {
        songObj['playedAt'] = new Date();
        // console.log(songObj);
        $rootScope.songPlays.push(songObj);
        // console.log('song name: ' + songObj.name + ' is playing and has been added to $rootScope.songPlays');
        // console.log($rootScope.songPlays);
        // console.log(songObj.playedAt);
        $rootScope.songCounts = eachSongNamePlays($rootScope.songPlays);
      },

      registerSongEnd: function(songObj) {
        $rootScope.songEnds.push(songObj);
        $rootScope.endCounts = eachSongEnds($rootScope.songEnds);
      },

      listSongsEnded: function() {
        var songsEnded = [];
        angular.forEach($rootScope.songEnds, function(song) {
          songsEnded.push(song.name);
        });
        return songsEnded;
      },

      lastTenSongs: function() {
        var lastTen = [];
        angular.forEach($rootScope.songPlays, function(song) {
          lastTen.push(song);
        });
        if (lastTen.length > 10) {
          lastTen = lastTen.slice(lastTen.length - 10, lastTen.length);
          lastTen.reverse();
          return lastTen;
        } else {
          lastTen.reverse();
          return lastTen;
        }
      },

      listSongsPlayed: function() {
        var songs = [];
        angular.forEach($rootScope.songPlays, function(song) {
          songs.push(song.name);
        });
        return songs;
      },
      listAlbumsPlayed: function() {
        var albums = [];
        angular.forEach($rootScope.songPlays, function(song) {
          albums.push(song.album);
        });
        return albums;
      }
    };
  }

  angular
    .module('blocJams')
    .service('Metrics', ['$rootScope', Metrics]);
})();
