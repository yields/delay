
# delay

  delay the given `fn`.

## Installation

    $ component install yields/delay

## Example

```js
var el = document.querySelector('#search');
var delay = require('delay');
el.onkeyup = delay(200, function(e){
  var val = e.target.value;
  // do ajax search or something.
});
```

## License

  MIT
