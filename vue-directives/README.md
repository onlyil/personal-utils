### debounce

Receive a click method and invoke it debounced.

- The directive receive arg which is the number of milliseconds to delay, default is 300.

``` html
<button v-debounce:1000="handler"></button> //delay 1000ms
```

- A modifier `now` make the method be invoked immediately before delay.

``` html
<button v-debounce.now="handler"></button> // invoke immediately
```

- Other modifier `input` , `scroll`, and will update constantly...

``` html
<input v-debounce.input="handler" />
```

- This directive is limited, the method can not deliver arguments, if need that, recommend import npm `lodash.debounce`.
