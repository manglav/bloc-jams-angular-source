(function() {
  var HelloComponent = React.createClass({
    propTypes: {
      message: React.PropTypes.string.isRequired,
      name: React.PropTypes.string.isRequired,
    },

    render: function() {
      return React.DOM.span(null,
        this.props.message + ' ' + this.props.name + '!'
      );
    }
  });
  angular
    .module('blocJams')
    .value('HelloComponent', HelloComponent);

})();
