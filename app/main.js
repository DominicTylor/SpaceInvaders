/**
 * Created by Владимир on 22.10.2016.
 */
'use strict';

// общие стили и normalize
import './components/base/style.less';

// экран
import './components/screen/style.less';
import Screen from './components/screen/script.js';

// управление
import './components/controls/style.less';
import Controls from './components/controls/script.js';

// непосредственно жогово
window.onload = function () {
    // имена для событий
    let eventsName = {
        start: 'start',
        left: 'left',
        right: 'right',
    },
        screen = new Screen;

    new Controls({
        screen: screen.screen,
        events: eventsName,
    });
};
