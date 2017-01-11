(function() {
  var HelloComponent = React.createClass({
    propTypes: {
      message: React.PropTypes.string.isRequired,
      name: React.PropTypes.string.isRequired,
    },

    render: function() {
      return <span>{this.props.message} {this.props.name}</span>;
    }
  });
  angular
    .module('blocJams')
    .value('HelloComponent', HelloComponent);

})();
