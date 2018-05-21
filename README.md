# ES6 modules

## Reference with script src in index.html (optional)
```
<script type="module" src="index.js"></script>
```
## Reference without script src
```
<script type="module">
  import { Index } from './index.js';
  let index = new Index(); // or export as new Index() as in this source code
</script>
```

## Declare modules (export)
ex config.js with many exports:
```
export const TestConfigOption = "I am export const TestConfigOption";
export const AnotherOption = "I am the other option";

```

ex module.js
```
export class Module {
     get() {
         return "I am export class Module";
     }
}
```
ex subfolder/submodule.js
```
export class SubFolderModule {
     get() {
         return "I am export class SubFolderModule";
     }
}
```

## Use modules (import)
```
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
