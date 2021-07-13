   
	
function initObject(o) {
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
	
exports.groupby = function(array, keys_grouping, keys_summing) {
  console.log("This is a message from the demo package");

	var final_keys = [...keys_grouping, ...keys_summing];
	var hash = Object.create(null),
	grouped = [];

  array.forEach(function (o) {
    var key = keys_grouping.map(function (k) { return o[k]; }).join('|');
    if (!hash[key]) {
		hash[key] = initObject(o);	
        grouped.push(hash[key]);
    }
    keys_summing.forEach(function (k) { hash[key][k] += o[k]; });
});
  
}