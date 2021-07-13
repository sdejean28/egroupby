var array = [{ shape: 'square', color: 'red', used: 1, instances: 1 }, { shape: 'square', color: 'red', used: 2, instances: 1 }, { shape: 'circle', color: 'blue', used: 0, instances: 0 }, { shape: 'square', color: 'blue', used: 4, instances: 4 }, { shape: 'circle', color: 'red', used: 1, instances: 1 }, { shape: 'circle', color: 'red', used: 1, instances: 0 }, { shape: 'square', color: 'blue', used: 4, instances: 5 }, { shape: 'square', color: 'red', used: 2, instances: 1 }],
 
hash = Object.create(null),
grouped = [];
    
var keys_grouping = ['shape', 'color'];
var keys_summing = ['instances'];

var final_keys = [...keys_grouping, ...keys_summing];
	
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
	
array.forEach(function (o) {
    var key = keys_grouping.map(function (k) { return o[k]; }).join('|');
    if (!hash[key]) {
		hash[key] = initObject(o);	
        grouped.push(hash[key]);
    }
    keys_summing.forEach(function (k) { hash[key][k] += o[k]; });
});

console.log('final_keys', final_keys);

console.log('source', array);
console.log('grouped', grouped);

