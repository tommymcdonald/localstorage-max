# localstorage-max
LocalStorage extension to store more than strings


### Usage / API
(ES6)
```JavaScript
import LSMax from 'localstorage-max'

LSMax.set('testKey', { foo: 'bar' });

LSMax.get('testKey'); // "{foo:'bar'}"

LSMax.remove('testKey');
```
