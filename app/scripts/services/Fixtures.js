(function() {
    function Fixtures() {

        var Fixtures = {};

        faker.name.findName();
        //create array of different album objects using for loop with faker.name, use all song lengths & audioUrls
        //pass through this array with Fixtures.getCollection
        //create 4 albums with different song names for each
        Fixtures.seedMusic = function() {
          var allSongs = {name: 'Your Music Collection', albumArtUrl: '/assets/images/album_covers/01.png', songs : []};
          var music = [];

          var songs = [];
          for (var i = 0; i < 20; i++) {
            albumName = faker.company.catchPhraseAdjective();
            artistName = faker.name.findName();
            songs = [
                { name: faker.hacker.noun(), length: '161.71', artist: artistName, audioUrl: '/assets/music/blue', album: albumName },
                { name: faker.hacker.noun(), length: '103.96', artist: artistName, audioUrl: '/assets/music/green', album: albumName },
                { name: faker.hacker.noun(), length: '268.45', artist: artistName, audioUrl: '/assets/music/red', album: albumName },
                { name: faker.hacker.noun(), length: '153.14', artist: artistName, audioUrl: '/assets/music/pink', album: albumName },
                { name: faker.hacker.noun(), length: '374.22', artist: artistName, audioUrl: '/assets/music/magenta', album: albumName }
            ];
            // console.log(album);
            songs.forEach(function(song) {
              music.push(song);
            });
          }
          music.forEach(function(song) {
            allSongs.songs.push(song);
          });
          // console.log(allSongs.songs);
          return allSongs;


        };

        var albumPicasso = {
            name: 'The Colors',
            artist: 'Pablo Picasso',
            label: 'Cubism',
            year: '1881',
            albumArtUrl: '/assets/images/album_covers/01.png',
            songs: [
                { name: 'Blue', length: '161.71', audioUrl: '/assets/music/blue' },
                { name: 'Green', length: '103.96', audioUrl: '/assets/music/green' },
                { name: 'Red', length: '268.45', audioUrl: '/assets/music/red' },
                { name: 'Pink', length: '153.14', audioUrl: '/assets/music/pink' },
                { name: 'Magenta', length: '374.22', audioUrl: '/assets/music/magenta' }
            ]
        };

        var albumMarconi = {
            name: 'The Telephone',
            artist: 'Guglielmo Marconi',
            label: 'EM',
            year: '1909',
            albumArtUrl: '/assets/images/album_covers/20.png',
            songs: [
                { name: 'Hello, Operator?', length: '1:01' },
                { name: 'Ring, ring, ring', length: '5:01' },
                { name: 'Fits in your pocket', length: '3:21' },
                { name: 'Can you hear me now?', length: '3:14' },
                { name: 'Wrong phone number', length: '2:15' }
            ]
        };

        Fixtures.getAlbum = function() {
            return albumPicasso;
        };

        Fixtures.getCollection = function (numberOfAlbums) {
            var albums = [];
            for (var i = 0; i < numberOfAlbums; i++) {
                albums.push(albumPicasso);
            }
            return albums;
        };

        return Fixtures;
    };

    angular
        .module('blocJams')
        .factory('Fixtures', Fixtures);
})();
