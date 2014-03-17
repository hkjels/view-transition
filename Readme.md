
# view-transition

  Add transition-effect to views

## Installation

  Install with [component(1)](http://component.io):

    $ component install hkjels/view-transition

## API

```javascript
var View = require('SomeView');
var addTransition = require('view-transition');

View = addTransition(View);

View.once('hidden', function(){
  View.dispose();
});
View.hide();
```

## License

  MIT

