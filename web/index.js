import * as config from './config.js';
import { Module } from './module.js';
import { SubFolderModule } from './subfolder/submodule.js';

class Index {
    constructor() {
        var viewEl = document.getElementById("view");

        let text = `import * as config from './config.js';':<br />config.TestConfigOption:${config.TestConfigOption}<br />config.AnotherOption:${config.AnotherOption}`;
        let p = document.createElement('p');
        p.innerHTML = text;
        viewEl.appendChild(p);

        let mod = new Module();
        let get = mod.get();
        text = `import { Module } from './module.js':<br />${get}`;
        let pp = document.createElement('p');
        pp.innerHTML = text;
        view.appendChild(pp);

        let sub = new SubFolderModule();
        let getsub = sub.get();
        text = `import { SubFolderModule } from './subfolder/submodule.js:<br />${getsub}`;
        let ppp = document.createElement('p');
        ppp.innerHTML = text;
        view.appendChild(ppp);
    }
}
export const index = new Index();
