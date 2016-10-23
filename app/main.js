/**
 * Created by Владимир on 22.10.2016.
 */
'use strict';

// общие стили и normalize
import './components/base/style.less';

// экран
import Screen from './components/screen/script.js';

// управление
import Controls from './components/controls/script.js';

// управление
import Draw from './components/draw/script.js';

// непосредственно жогово
window.onload = function () {
    let screen   = new Screen,
        controls = new Controls(),
        draw     = new Draw(screen);
};
