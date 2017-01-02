(function() {
  var HelloComponent = React.createClass({
    propTypes: {
      fname : React.PropTypes.string.isRequired,
      lname : React.PropTypes.string.isRequired
    },

    // render: function() {
    //   return <span>Hello {this.props.fname} {this.props.lname}</span>;
    // }
    render: function() {
      return React.DOM.span( null,
        'Hello ' + this.props.fname + ' ' + this.props.lname
      );
    }

  })

  angular
  .module('blocJams')
  .value('HelloComponent', HelloComponent);
})();
