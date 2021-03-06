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
      console.log(this.props.data)
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
        <Recharts.LineChart width={600} height={300} data={data}
              margin={{top: 5, right: 30, left: 20, bottom: 5}}>
         <Recharts.XAxis dataKey="name"/>
         <Recharts.YAxis/>
         <Recharts.CartesianGrid strokeDasharray="3 3"/>
         <Recharts.Tooltip/>
         <Recharts.Legend />
         <Recharts.Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
         <Recharts.Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </Recharts.LineChart>
      )
    }

  })

  angular
  .module('blocJams')
  .value('HelloComponent', HelloComponent);
})();
