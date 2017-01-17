(function() {
  var PlaysComponent = React.createClass({
    render: function() {
      metricsObject = this.props.data
      var lastTen = metricsObject.lastTenSongs();
      console.log(lastTen);

      return (
        <p>Testing</p>
      )

    },
  })

  angular
    .module('blocJams')
    .value('PlaysComponent', PlaysComponent);
})();
