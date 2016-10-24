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

// Игровые объекты
import GameObjects from './components/game_objects/script.js';

// Рисование
import Draw from './components/draw/script.js';

// непосредственно жогово
window.onload = function () {
    let screen      = new Screen(),
        controls    = new Controls(),
        sprite      = new Sprite(),
        gameObjects = new GameObjects(screen, sprite, controls),
        draw        = new Draw(screen, gameObjects);

    let loop = function() {
        gameObjects.update();
        draw.render();
        window.requestAnimationFrame(loop, screen.canvas);
    };
    window.requestAnimationFrame(loop, screen.canvas);
};
