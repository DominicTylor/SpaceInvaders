/**
 * Created by Владимир on 22.10.2016.
 */

// условная ширина для холста, нужна для масштабирования
let SCALE = 700;

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

    // создание пульки
    initBullet (x, y, velocity, w, h, color) {
        return {
            x: x,
            y: y,
            velocity: velocity,
            width: w,
            height: h,
            color: color,
        }
    };

    // обновление положения пули
    updateBullet(bullet) {
        bullet.y += bullet.velocity;
    };

    // проверка на персечение осей двух объектов
    AABBIntersect (ax, ay, aw, ah, bx, by, bw, bh) {
        return ax < bx+bw && bx < ax+aw && ay < by+bh && by < ay+ah;
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
            this.bullets.push(this.initBullet(this.tank.x + 10, this.tank.y, -3, 2, 6, '#fff'));
        }

        for (let i = 0, len = this.bullets.length; i < len; i++) {
            let b = this.bullets[i];
            this.updateBullet(b);

            if (b.y + b.height < 0 || b.y > this.scale/this.screen.aspectRatio) {
                this.bullets.splice(i, 1);
                i--;
                len--;
                continue;
            }

            // попадания в пришельцев
            for (var j = 0, len2 = this.aliens.length; j < len2; j++) {
                var a = this.aliens[j];
                if (this.AABBIntersect(b.x, b.y, b.width, b.height, a.x, a.y, a.w, a.h)) {
                    this.aliens.splice(j, 1);
                    j--;
                    len2--;
                    this.bullets.splice(i, 1);
                    i--;
                    len--;

                    // изменение скорости движения пришельцев
                    // при уменьшении их количества
                    switch (len2) {
                        case 40: {
                            this.lvFrame = 40;
                            break;
                        }
                        case 30: {
                            this.lvFrame = 28;
                            break;
                        }
                        case 20: {
                            this.lvFrame = 20;
                            break;
                        }
                        case 10: {
                            this.lvFrame = 12;
                            break;
                        }
                        case 5: {
                            this.lvFrame = 6;
                            break;
                        }
                        case 1: {
                            this.lvFrame = 4;
                            break;
                        }
                    }
                }
            }
        }

        // добавляем выстрелы пришельцов
        if (Math.random() < 0.03 && this.aliens.length > 0) {
            // выбираем произвольного пришельца
            let a = this.aliens[Math.round(Math.random() * (this.aliens.length - 1))];
            // проверяем чтоб выстрелы были только из первой линиии
            // пробегаем по всему массиву и если есть совпадение по
            // одной линии уходим на пришельца вниз
            this.aliens.forEach((item) => {
                if (this.AABBIntersect(a.x, a.y, a.w, 100, item.x, item.y, item.w, item.h)) {
                    a = item;
                }
            });
            this.bullets.push(this.initBullet(a.x + a.w*0.5, a.y + a.h, 3, 2, 4, "#fff"));
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
