/**
 * Created by Владимир on 22.10.2016.
 */

// условная ширина для холста, нужна для масштабирования
let SCALE = 700;

import './style.less';

export default class Draw {
    constructor(screen, sprite, controls, sounds) {
        this.sprite   = sprite;
        this.controls = controls;
        this.screen   = screen;
        this.scaleW   = SCALE;
        this.scaleH   = SCALE/this.screen.aspectRatio;
        this.sounds   = sounds;
        this.life     = 0;
        this.score    = 0;

        this.initGameObject();
    }

    // создаём игровые объекты
    initGameObject () {
        this.frames       = 0;
        this.spFrame      = 0;
        this.lvFrame      = 60;
        this.dir          = 1;

        // танчик
        this.tank = {
            sprite: this.sprite.taSprite,
            x: (this.scaleW- this.sprite.taSprite.w) / 2,
            y: this.scaleH - (20 + this.sprite.taSprite.h),
        }

        // массив пуль танка
        this.bulletsT = [];

        // массив пуль пришельцев
        this.bulletsA = [];

        // массив пришельцев
        this.aliens = [];
        [2, 1, 1, 0, 0].forEach((item, i) => {
            for (let j = 0; j < 10; j++) {
                this.aliens.push({
                    sprite: this.sprite.alSprite[item],
                    x: 20 + j*30 + [0, 0, 4][item],
                    y: 40 + i*30,
                    w: this.sprite.alSprite[item][0].w,
                    h: this.sprite.alSprite[item][0].h,
                    coast: (item+1)*10,
                });
            }
        });

        // башни
        this.cities = (() => {
            let obj = {
                    canvas: document.createElement('canvas'),
                    y: this.tank.y - (30 + this.sprite.ciSprite.h),
                    w: this.scaleW,
                    h: this.sprite.ciSprite.h,
                };
            obj.canvas.width = this.scaleW;
            obj.canvas.height = this.scaleH;
            obj.context = obj.canvas.getContext('2d');
            for (let i = 0; i < 4; i++) {
                obj.context.drawImage(this.sprite.spriteImg, this.sprite.ciSprite.x, this.sprite.ciSprite.y,
                    this.sprite.ciSprite.w, this.sprite.ciSprite.h,
                    this.scaleW/5*(i+1)-this.sprite.ciSprite.w/2, obj.y, this.sprite.ciSprite.w, this.sprite.ciSprite.h);
            }
            return obj;
        })();
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

    // обновление очков
    scoreUpdate(score) {
        this.score += score;
        if (this.score >= 1000) {
            this.lifeUpdate();
        }
    }

    // обновление дополнительных жизней
    lifeUpdate(n = 0) {
        if (this.life < 3) {
            this.life += n;
        }

        if (this.score >= 1000 && this.life < 3) {
            this.life++;
            this.score -= 1000;
        }

        if (!~this.life) {
            this.lose = 'lose';
            this.life = 0;
        }
    }

    // создание повреждений
    generateDamage (x, y) {
        let context = this.cities.context;
        context.clearRect(x-2, y-2, 4, 4);
        context.clearRect(x+2, y-4, 2, 4);
        context.clearRect(x+4, y, 2, 2);
        context.clearRect(x+2, y+2, 2, 2);
        context.clearRect(x-4, y+2, 2, 2);
        context.clearRect(x-6, y, 2, 2);
        context.clearRect(x-4, y-4, 2, 2);
        context.clearRect(x-2, y-6, 2, 2);
    };

    // проверка на прозрачность пиксела
    // и создание повреждения
    hits (x, y) {
        let data = this.cities.context.getImageData(x, y, 1, 1);
        if (data.data[3] !== 0) {
            this.generateDamage(x, y);
            return true;
        }
        return false;
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
        this.tank.x = Math.max(Math.min(this.tank.x, this.scaleW- (20 + this.sprite.taSprite.w)), 20);

        // выстрелы
        if (this.controls.isPressed(32)) {
            this.bulletsT.push(this.initBullet(this.tank.x + 10, this.tank.y-6, -3, 2, 6, '#fff'));
            this.sounds.playSound('shoot');
        }

        // попадания в танчик
        for (let i = 0, len = this.bulletsA.length; i < len; i++) {
            let b = this.bulletsA[i];
            this.updateBullet(b);

            // убираем вылетевшие за экран пульки
            if (b.y > this.scaleH) {
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
                this.lifeUpdate(-1);
                this.bulletsA.splice(i, 1);
                i--;
                len--;
                this.sounds.playSound('explosion');
                continue;
            }
        }

        // попадания в пришельцев
        for (let i = 0, len = this.bulletsT.length; i < len; i++) {
            let b = this.bulletsT[i];
            this.updateBullet(b);

            // убираем вылетевшие за экран пульки
            if (b.y + b.h < 0) {
                this.bulletsT.splice(i, 1);
                i--;
                len--;
                continue;
            }

            for (let j = 0, len2 = this.aliens.length; j < len2; j++) {
                let a = this.aliens[j];
                if (this.AABBIntersect(b.x, b.y, b.w, b.h, a.x, a.y, a.w, a.h)) {
                    this.scoreUpdate(this.aliens[j].coast);
                    this.aliens.splice(j, 1);
                    j--;
                    len2--;
                    this.bulletsT.splice(i, 1);
                    i--;
                    len--;
                    this.sounds.playSound('invaderkilled');

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

        // попадания в башни
        for (let i = 0,
                 len1 = this.bulletsA.length,
                 concatArr = this.bulletsA.concat(this.bulletsT),
                 len = concatArr.length,
                 b = ''; i < len; i++) {
            b = concatArr[i];
            if (this.cities.y < b.y && b.y < this.cities.y + this.cities.h) {
                if (this.hits(b.x, b.y)) {
                    if (i < len1) {
                        this.bulletsA.splice(i, 1);
                        i--;
                        len--;
                    } else {
                        this.bulletsT.splice(i-len1, 1);
                        i--;
                        len--;
                    }
                    continue;
                }
            }

        }

        // движения пришельцев
        if (this.frames % this.lvFrame === 0) {

            if (!this.aliens.length) {
                this.lose = 'win';
                this.lifeUpdate(1);
                return;
            }

            this.spFrame = (this.spFrame + 1) % 2;
            let _max = 0, _min = this.scaleW, _down = 20;

            this.aliens.forEach((item) => {
                item.x += 20 * this.dir;
                _max = Math.max(_max, item.x + item.w);
                _min = Math.min(_min, item.x);
                _down = Math.max(_down, item.y + item.h);
            });

            if (_max > this.scaleW- 20 || _min < 20) {
                this.dir *= -1;
                this.aliens.forEach((item) => {
                    item.x += 20 * this.dir;
                    item.y += 20;
                });
            }

            this.sounds.playSound('fastinvader');

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
            this.sounds.playSound('shoot');
        }
    };
}
