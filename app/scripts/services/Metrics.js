(function() {
  function Metrics($rootScope) {
    // Metric will have
    // publish( type, value)
    // get ( type, timeStart, timeEnd, filter)
    $rootScope.data = {};
    $rootScope.types = {};
    // be flexible in the data to track
    // data should be key (data label), arr(val) (data)

    // To protect against typos, key the labels as constants
    // to track new data, must add it's label here first
    var labels = [
      "label1",
      "label2"
    ];
    labels.forEach(function(label) {
      $rootScope.types[label] = label
      $rootScope.data[label] = []
    });

    // the types looks like
    // {
    //   label1: "label1",
    //   label2: "label2"
    // }
    //
    // To add a value to metricData
    //
    // Metric.publish(MetricType.label1, data)
    // metricData looks like
    // {
    //   "labe1": [],
    //   "label2": []
    // }

    return {
      // publish must be called like
      // Metric.publish(MetricTypes.label, {} datum})
      publish: function(type, datum) {
        datum.blocTimestamp = new Date();
        $rootScope.data[type].push(datum);
      },

      get: function(type, filter) {
        //clean way to do it
        var filter = filter || function(o) { return o };

        // note, this returns references to objects.
        // they are not safe to modify, unless you perform a deep clone.
        return $rootScope.data[type].map(filter);
      },

      types: $rootScope.types
    };
  }

  angular
    .module('blocJams')
    .service('Metrics', ['$rootScope', Metrics]);
})();
