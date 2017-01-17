(function() {
  var HelloComponent = React.createClass({
    propTypes: {
      message: React.PropTypes.string.isRequired,
      name: React.PropTypes.string.isRequired,
    },

  countItems(itemArray) {
    var itemCount = {};
    itemArray.forEach(function(x) {
      itemCount[x] = (itemCount[x] || 0) + 1;
    });
    return itemCount;
  },

  render: function () {
    metricsObject = this.props.data

    // returns ARRAY of pages that have loaded
    var pageLoads = metricsObject.listPageLoads();
    var pageLoadObject = this.countItems(pageLoads);


    //-----------------------------------------------------------------
    //returns ARRAY OF SONG NAMES that have been played.
    var songPlays = metricsObject.listSongsPlayed();

    //call this.countItems ABOVE, using songPlays directly above as the param
    //below holds object with key/value of songs and play quantity
    var songCountObject = this.countItems(songPlays)

    //-------------------------------------------------------------------

    //returns ARRAY OF ALBUMS of each song that has been playedAt
    var albumsPlayed = metricsObject.listAlbumsPlayed();
    var albumCountObject = this.countItems(albumsPlayed);

    //---------------------------------------------------------------------

    //returns ARRAY of SONGS THAT HAVE ENDED:
    var songsEnded = metricsObject.listSongsEnded();
    var endCountObject = this.countItems(songsEnded);

    //-------------------------------------------------------------------
    // LAST TEN songs
    var lastTen = metricsObject.lastTenSongs();
    console.log(lastTen);

    //  DATA FOR CHARTS DIRECTLY BELOW

    var pageCountData = [];
    for (load in pageLoadObject) {
      pageCountData.push({page: load, loads: pageLoadObject[load]});
    }

    var albumCountData = [];
    for (album in albumCountObject) {
      albumCountData.push({album: album, plays: albumCountObject[album]});
    }

    var songCountData = [];
    for (song in songCountObject) {
      songCountData.push({name: song, plays: songCountObject[song]});
    }

    var songEndCountData = [];
    for (song in endCountObject) {
      songEndCountData.push({name: song, completions: endCountObject[song]});
    }


    //RENDERING RETURN DATA IS ALL BELOW
    // -------------------------------------------------------------

    return (
    <div>

      <h3 className="black">Page Loads:</h3>
      <Recharts.BarChart width={600} height={300} data={pageCountData}>
        <Recharts.XAxis  dataKey="page" stroke="white" />
        <Recharts.YAxis />
        <Recharts.Tooltip wrapperStyle={{width:250, backgroundColor: 'red'}} />
        <Recharts.Legend wrapperStyle={{color:'white'}}/>
        <Recharts.CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Recharts.Bar type="monotone" dataKey="loads" stroke="red" fill="gray" />
      </Recharts.BarChart>

      <h3 className="black">Album Plays:</h3>
      <Recharts.BarChart width={1000} height={300} data={albumCountData}>
        <Recharts.XAxis  dataKey="album" stroke="white" />
        <Recharts.YAxis />
        <Recharts.Tooltip wrapperStyle={{width:250, backgroundColor: 'red'}} />
        <Recharts.Legend wrapperStyle={{color:'white'}}/>
        <Recharts.CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Recharts.Bar type="monotone" dataKey="plays" stroke="red" fill="gray" />
      </Recharts.BarChart>

      <h3 className="black">Song Plays:</h3>
      <Recharts.BarChart width={1000} height={300} data={songCountData}>
        <Recharts.XAxis  dataKey="name" stroke="white" />
        <Recharts.YAxis />
        <Recharts.Tooltip wrapperStyle={{width:250, backgroundColor: 'red'}} />
        <Recharts.Legend wrapperStyle={{color:'white' }} />
        <Recharts.CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Recharts.Bar type="monotone" dataKey="plays" stroke="red" fill="gray" />
      </Recharts.BarChart>

      <h3 className="black">Song Completions:</h3>
      <Recharts.BarChart width={1000} height={300} data={songEndCountData}>
        <Recharts.XAxis  dataKey="name" stroke="white" />
        <Recharts.YAxis />
        <Recharts.Tooltip wrapperStyle={{width:250, backgroundColor: 'red'}} />
        <Recharts.Legend wrapperStyle={{color:'white' }} />
        <Recharts.CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Recharts.Bar type="monotone" dataKey="completions" stroke="red" fill="gray" />
      </Recharts.BarChart>

      <h3>Last Ten Songs:</h3>

    </div>

    );
  },
  });
  angular
    .module('blocJams')
    .value('HelloComponent', HelloComponent);

})();
