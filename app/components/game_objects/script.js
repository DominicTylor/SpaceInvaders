/**
 * Created by Владимир on 22.10.2016.
 */

// условная ширина для холста, нужна для масштабирования
let SCALE = 1000;

import './style.less';

export default class Draw {
    constructor(screen, sprite, controls) {
        this.sprite   = sprite;
        this.controls = controls;
        this.screen   = screen;
        this.scale    = SCALE;
        this.frames   = 0;
        this.spFrame  = 0;
        this.lvFrame  = 60;
        this.dir      = 1;

        this.initGameObject();
    }

    // создаём игровые объекты
    initGameObject () {
        // танчик
        this.tank = {
            sprite: this.sprite.taSprite,
            x: (this.scale - this.sprite.taSprite.w) / 2,
            y: this.scale/this.screen.aspectRatio - (20 + this.sprite.taSprite.h),
        }

        // массив для пуль
        this.bullets = [];

        // массив пришельцев
        this.aliens = [];
        [1, 0, 0, 2, 2].forEach((item, i) => {
            for (let j = 0; j < 10; j++) {
                this.aliens.push({
                    sprite: this.sprite.alSprite[item],
                    x: 20 + j*30 + [0, 4, 0][item],
                    y: 20 + i*30,
                    w: this.sprite.alSprite[item][0].w,
                    h: this.sprite.alSprite[item][0].h
                });
            }
        });
    };

    // обновление положения для объектов и просчёт попаданий
    update () {
        this.frames++;

        // движение танчика
        if (this.controls.isDown(37)) {
            this.tank.x -= 6;
        }
        if (this.controls.isDown(39)) {
            this.tank.x += 6;
        }
        this.tank.x = Math.max(Math.min(this.tank.x, this.scale - (20 + this.sprite.taSprite.w)), 20);

        // выстрелы
        if (this.controls.isPressed(32)) {
            this.bullets.push(this.initBullet(this.tank.x + 10, this.tank.y, -8, 2, 6, "#fff"));
        }

        // движения пришельцев
        if (this.frames % this.lvFrame === 0) {
            this.spFrame = (this.spFrame + 1) % 2;
            let _max = 0, _min = this.scale;

            this.aliens.forEach((item) => {
                item.x += 20 * this.dir;
                _max = Math.max(_max, item.x + item.w);
                _min = Math.min(_min, item.x);
            });

            if (_max > this.scale - 20 || _min < 20) {
                this.dir *= -1;
                this.aliens.forEach((item) => {
                    item.x += 20 * this.dir;
                    item.y += 20;
                });
            }
        }
    };
}
