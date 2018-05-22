# ES6 modules
A brief summary and how to use ECMAscript 6 modules in browser

## Reference with script src in index.html (optional)
```html
<script type="module" src="index.js"></script>
```
## Reference without script src
```html
<script type="module">
  import { Index } from './index.js';
  let index = new Index(); // or export as new Index() as in this source code
</script>
```

## Declare modules (export)
ex config.js with many exports:
```javascript
export const TestConfigOption = "I am export const TestConfigOption";
export const AnotherOption = "I am the other option";

```

ex module.js
```javascript
export default class {
     get() {
         return "I am export class Module";
     }
}
```

ex namedmodule.js
```javascript
export class NamedModule {
     get() {
         return "I am named export called class NamedModule";
     }
}
```
ex subfolder/submodule.js
```javascript
export class SubFolderModule {
     get() {
         return "I am export class SubFolderModule";
     }
}
```

## Use modules (import)
```javascript
import * as config from './config.js';
import NameMeWhatEver from './module.js';
import { NamedModule } from './namedmodule.js';
import { SubFolderModule } from './subfolder/submodule.js';
  
console.log(config.TestConfigOption);
console.log(config.AnotherOption);
  
let mod = new NameMeWhatEver();
console.log(mod.get());
  
let named = NamedModule();
console.log(named.get());
  
let sub = new SubFolderModule();
console.log(sub.get());
```

## Clone repo and test it
