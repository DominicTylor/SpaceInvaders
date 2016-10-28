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

// Звуки
import Sounds from './components/sounds/script.js';

// Игра
import Game from './components/game/script.js';

// непосредственно жогово
document.addEventListener('DOMContentLoaded', function () {
    let sprite   = new Sprite(),
        screen   = new Screen(),
        controls = new Controls(),
        sounds   = new Sounds();

    sprite.spriteImg.addEventListener('load', function () {
        sprite.initSprite();
        let gameObjects = new GameObjects(screen, sprite, controls, sounds),
            draw        = new Draw(screen, gameObjects),
            game        = new Game(screen, gameObjects, draw);
        game.run();
    });
});
