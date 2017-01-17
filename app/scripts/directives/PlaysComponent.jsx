(function() {
  var PlaysComponent = React.createClass({
    render: function() {
      metricsObject = this.props.data
      var lastTen = metricsObject.lastTenSongs();
      console.log(lastTen);

      function sortTableData(songsArray) {
        var sortedData = [];
        for (var i = 0; i < songsArray.length; i++) {
          sortedData.push({'': i + 1, Song: songsArray[i].name, Artist: songsArray[i].artist, Album: songsArray[i].album, Played: songsArray[i].playedAt})
        }
        return sortedData;
      }

      var tableData = sortTableData(lastTen);
      console.log(tableData);


      return (
      <div>
        <Reactable.Table className="stable" data={tableData}/>

      </div>
      )

    },
  })

  angular
    .module('blocJams')
    .value('PlaysComponent', PlaysComponent);
})();
