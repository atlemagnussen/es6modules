# ES6 modules

## Reference with script src in index.html (optional)
```
<script type="module" src="config.js"></script>
<script type="module" src="module.js"></script>
<script type="module" src="subfolder/submodule.js"></script>
<script type="module" src="index.js"></script>
```
## Reference without script src
```
<script type="module">
  'use strict';
  import { Index } from './index.js';
  let index = new Index();
  document.addEventListener("DOMContentLoaded", function() {
      index.init();
  });
</script>
```

## Declare modules (export)
ex config.js with many exports:
```
'use strict';
export const TestConfigOption = "I am export const TestConfigOption";
export const AnotherOption = "I am the other option";

```

ex module.js
```
'use strict';
export class Module {
     get() {
         return "I am export class Module";
     }
}
```
ex subfolder/submodule.js
```
'use strict';
export class SubFolderModule {
     get() {
         return "I am export class SubFolderModule";
     }
}
```

## Use modules (import)
```
'use strict';
import * as config from './config.js';
import { Module } from './module.js';
import { SubFolderModule } from './subfolder/submodule.js';

console.log(config.TestConfigOption);
console.log(config.AnotherOption);

let mod = new Module();
let text = mod.get();
console.log(text);

let sub = new SubFolderModule();
let textsub = sub.get();
console.log(textsub);
```

## Clone repo and test test
