/**
 * Creates an object composed of keys generated from the results of running
 * each element of `collection` with `keys_grouping` and summing with 'keys_summing'.
 *
 * @since 0.0.1
 * @param {Array of Objects} The collection to group.
 * @param {Array of String} The keys to group.
 * @param {Array of String} The keys to calculate the sum.
 * @returns {Array of Objects} Returns the group array limited to keys processed
 * @example
 *
 * groupBy([{ color : 'blue', shape:'square', count : 1, level : 2}, 
 *			{ color : 'blue', shape:'square', count : 2, level : 4},
 *			{ color : 'blue', shape:'circle', count : 4, level : 12},
 *			{ color : 'red', shape:'circle', count : 6, level : 0}], [ 'color', 'shape' ], [ 'count' ])
 * => [ { color: 'blue', shape: 'square', count: 3 },
 * 		{ color: 'blue', shape: 'circle', count: 4 },
 * 		{ color: 'red', shape: 'circle', count: 6 } ]
 */
 
// Utility function to create base returned elements
function initObject(o, keys_grouping, final_keys ) {
  var rv = {};

  for (var i = 0; i < final_keys.length; ++i)
  {	 
	if (keys_grouping.indexOf(final_keys[i])>=0) {
		rv[final_keys[i]] = o[final_keys[i]];
	} else {
		rv[final_keys[i]] = 0;
	}
	
  }
  return rv;
}
	
function groupby(array, keys_grouping, keys_summing) {

	var final_keys = [...keys_grouping, ...keys_summing];
	var hash = Object.create(null),
	grouped = [];

    array.forEach(function (o) {
		var key = keys_grouping.map(function (k) { return o[k]; }).join('|');
		if (!hash[key]) {
			hash[key] = initObject(o, keys_grouping, final_keys);	
			grouped.push(hash[key]);
		}
		keys_summing.forEach(function (k) { hash[key][k] += o[k]; });
	});

	return grouped;
}

modules.export = groupby;