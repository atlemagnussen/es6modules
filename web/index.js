import * as config from './config.js';
import NameMeWhatEver from './module.js';
import { NamedModule } from './namedmodule.js';
import { SubFolderModule } from './subfolder/submodule.js';

class Index {
    constructor() {
        var viewEl = document.getElementById("view");

        let text = `import * as config from './config.js';':<br />config.TestConfigOption:${config.TestConfigOption}<br />config.AnotherOption:${config.AnotherOption}`;
        let p1 = document.createElement('p');
        p1.innerHTML = text;
        viewEl.appendChild(p1);

        let mod = new NameMeWhatEver();
        text = `import NameMeWhatEver from './module.js';':<br />${mod.get()}`;
        let p2 = document.createElement('p');
        p2.innerHTML = text;
        viewEl.appendChild(p2);

        let named = new NamedModule();
        text = `import { NamedModule } from './namedmodule.js';':<br />${named.get()}`;
        let p3 = document.createElement('p');
        p3.innerHTML = text;
        viewEl.appendChild(p3);

        let sub = new SubFolderModule();
        text = `import { SubFolderModule } from './subfolder/submodule.js:<br />${sub.get()}`;
        let p4 = document.createElement('p');
        p4.innerHTML = text;
        viewEl.appendChild(p4);
    }
}
export const index = new Index();
