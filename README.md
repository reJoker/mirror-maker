# mirror-maker

Create an object with values equal to keys from an object or an array.

# Usage
`npm install mirror-maker`

```javascript
var mirrorMaker = require('mirror-maker');

console.log(mirrorMaker(['a', 'b']));
// {a: 'a', b: 'b'}
console.log(mirrorMaker({a: 1, b: 2}));
// {a: 'a', b: 'b'}
```
