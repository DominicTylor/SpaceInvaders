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

// Спрайт
import Sprite from './components/sprite/script.js';

// Рисование
import Draw from './components/draw/script.js';

// непосредственно жогово
window.onload = function () {
    let screen   = new Screen(),
        controls = new Controls(),
        sprite   = new Sprite(),
        draw     = new Draw(screen, sprite, controls);

    let loop = function() {
        draw.update();
        draw.render();
        window.requestAnimationFrame(loop, screen.canvas);
    };
    window.requestAnimationFrame(loop, screen.canvas);
};
