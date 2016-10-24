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
        this.sounds   = {
            explosion: document.getElementById('explosion'),
            fastinvader1: document.getElementById('fastinvader1'),
            fastinvader2: document.getElementById('fastinvader2'),
            fastinvader3: document.getElementById('fastinvader3'),
            fastinvader4: document.getElementById('fastinvader4'),
            invaderkilled: document.getElementById('invaderkilled'),
            shoot: document.getElementById('shoot'),
        }

        this.initGameObject();
    }

    // создаём игровые объекты
    initGameObject () {
        this.frames    = 0;
        this.spFrame   = 0;
        this.lvFrame   = 60;
        this.dir       = 1;
        this.moveSound = 0;
        // танчик
        this.tank = {
            sprite: this.sprite.taSprite,
            x: (this.scale - this.sprite.taSprite.w) / 2,
            y: this.scale/this.screen.aspectRatio - (20 + this.sprite.taSprite.h),
        }

        // массив пуль танка
        this.bulletsT = [];

        // массив пуль пришельцев
        this.bulletsA = [];

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
    initBullet (x, y, v, w, h, c) {
        return {
            x: x,
            y: y,
            v: v,
            w: w,
            h: h,
            c: c,
        }
    };

    // обновление положения пули
    updateBullet(bullet) {
        bullet.y += bullet.v;
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
            this.bulletsT.push(this.initBullet(this.tank.x + 10, this.tank.y-6, -3, 2, 6, '#fff'));
            this.sounds.shoot.play();
        }

        // попадания в танчик
        for (let i = 0, len = this.bulletsA.length; i < len; i++) {
            let b = this.bulletsA[i];
            this.updateBullet(b);

            if (b.y > this.scale/this.screen.aspectRatio) {
                this.bulletsA.splice(i, 1);
                i--;
                len--;
                continue;
            }

            if (this.AABBIntersect(
                    b.x, b.y, b.w, b.h,
                    this.tank.x,
                    this.tank.y,
                    this.tank.sprite.w,
                    this.tank.sprite.h,
                    )) {
                this.lose = 'lose';
                this.bulletsA.splice(i, 1);
                i--;
                len--;
                this.sounds.explosion.play();
                continue;
            }
        }

        // попадания в пришельцев
        for (let i = 0, len = this.bulletsT.length; i < len; i++) {
            let b = this.bulletsT[i];
            this.updateBullet(b);

            if (b.y + b.h < 0) {
                this.bulletsT.splice(i, 1);
                i--;
                len--;
                continue;
            }

            for (var j = 0, len2 = this.aliens.length; j < len2; j++) {
                var a = this.aliens[j];
                if (this.AABBIntersect(b.x, b.y, b.w, b.h, a.x, a.y, a.w, a.h)) {
                    this.aliens.splice(j, 1);
                    j--;
                    len2--;
                    this.bulletsT.splice(i, 1);
                    i--;
                    len--;
                    this.sounds.invaderkilled.play();

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

        // движения пришельцев
        if (this.frames % this.lvFrame === 0) {

            if (!this.aliens.length) {
                this.lose = 'win';
                return;
            }

            this.spFrame = (this.spFrame + 1) % 2;
            let _max = 0, _min = this.scale, _down = 20;

            this.aliens.forEach((item) => {
                item.x += 20 * this.dir;
                _max = Math.max(_max, item.x + item.w);
                _min = Math.min(_min, item.x);
                _down = Math.max(_down, item.y + item.h);
            });

            if (_max > this.scale - 20 || _min < 20) {
                this.dir *= -1;
                this.aliens.forEach((item) => {
                    item.x += 20 * this.dir;
                    item.y += 20;
                });
            }

            if (++this.moveSound>4) {
                this.moveSound = 1
            }

            this.sounds['fastinvader'+this.moveSound].play();

            if (_down > this.tank.y) {
                this.lose = 'lose';
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
            this.bulletsA.push(this.initBullet(a.x + a.w*0.5, a.y + a.h, 3, 2, 4, "#fff"));
            this.sounds.shoot.play();
        }
    };
}
