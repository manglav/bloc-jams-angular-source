(function() {
  var PlaysComponent = React.createClass({
    render: function() {
      metricsObject = this.props.data
      var lastTen = metricsObject.lastTenSongs();

      var t


      return (
      <div>
        <Reactable.Table data={[
          {Name: 'Brian Mont', Age: 28},
          {Name: 'Kirstin Krieger', Age: 26}
        ]}/>

      </div>
      )

    },
  })

  angular
    .module('blocJams')
    .value('PlaysComponent', PlaysComponent);
})();
