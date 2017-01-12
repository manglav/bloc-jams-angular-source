(function() {
  var HelloComponent = React.createClass({
    propTypes: {
      message: React.PropTypes.string.isRequired,
      name: React.PropTypes.string.isRequired,
    },

//    render: function() {
//      return <span>{this.props.message} {this.props.name}</span>;
//    }

  countSongs(songsArray) {
    var songCounts = {};
    songsArray.forEach(function(x) {
      songCounts[x] = (songCounts[x] || 0) + 1;
    });
    return songCounts;
  },

  render: function () {
    metricsObject = this.props.data

    //returns array of song names that have been played.
    var songPlays = metricsObject.listSongsPlayed();

    //call this.countSongs above, using songPlays directly above as the param
    //below holds object with key/value of songs and play quantity
    var songCountObject = this.countSongs(songPlays)
    console.log(songCountObject)

    var songCountData = [];
      for (song in songCountObject) {
        songCountData.push({name: song, plays: songCountObject[song]});
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

    return (
    <div>

      <h3 className="black">Song Plays:</h3>
      <Recharts.BarChart width={1200} height={300} data={songCountData}>
        <small><Recharts.XAxis dataKey="name" stroke="#8884d8" /></small>
        <Recharts.YAxis />
        <Recharts.Tooltip />
        <Recharts.Bar type="monotone" dataKey="plays" fill="#8884d8"/>
      </Recharts.BarChart>

      <h3 className="black">Fake data</h3>
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
