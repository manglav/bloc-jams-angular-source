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

    var data = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
    ];

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


      <h3 className="black">Fake Data:</h3>
      <Recharts.LineChart width={600} height={300} data={data}
        margin={{top: 5, right: 30, left: 20, bottom: 5}}>
        <Recharts.XAxis dataKey="name"/>
        <Recharts.YAxis/>
        <Recharts.CartesianGrid strokeDasharray="3 3"/>
        <Recharts.Tooltip/>
        <Recharts.Legend/>
        <Recharts.Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
        <Recharts.Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </Recharts.LineChart>
    </div>

    );
  },
  });
  angular
    .module('blocJams')
    .value('HelloComponent', HelloComponent);

})();
