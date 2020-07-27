# cns
A library that allows you to fire events as well as send data between different files or JS code

## Usage:
- In one file:
```JavaScript
//es6
import { CNS } from "./main.js"

document.addEventListener("click", e => {
  CNS.emit("documentClick");
});

```
- In another file:
```JavaScript
var CNS = require("./main.js");

CNS.on("documentClick", function() {
  console.log("click");
});
```

