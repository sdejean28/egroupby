# egroupby
Group array of objects to create summarize on specific keys

## Install
`npm install --save sdejean28/egroupby`

## Usage

`const { groupby } = require('egroupby');

var source = [
	{ shape: 'square', color: 'red', level: 1, cpus: 1 }, 
	{ shape: 'square', color: 'red', level: 2, cpus: 1 }, 
	{ shape: 'circle', color: 'blue', level: 0, cpus: 0 }, 
	{ shape: 'square', color: 'blue', level: 4, cpus: 4 }, 
	{ shape: 'circle', color: 'red', level: 1, cpus: 1 }, 
	{ shape: 'circle', color: 'red', level: 1, cpus: 0 }, 
	{ shape: 'square', color: 'blue', level: 4, cpus: 5 }, 
	{ shape: 'square', color: 'red', level: 2, cpus: 1 }];

grouped = groupby(source, ['shape', 'color'], ['cpus']);

console.log('grouped', grouped);`

will display:

`grouped [ { shape: 'square', color: 'red', cpus: 3 },
  { shape: 'circle', color: 'blue', cpus: 0 },
  { shape: 'square', color: 'blue', cpus: 9 },
  { shape: 'circle', color: 'red', cpus: 1 } ]`
