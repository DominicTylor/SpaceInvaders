/**
 * Created by Владимир on 22.10.2016.
 */

let SIZE = 1000;

import './style.less';

export default class Draw {
    constructor(screen, sprite, controls) {
        this.sprite      = sprite;
        this.controls    = controls;
        this.screen      = screen;
        this.context     = screen.context;
        this.frames      = 0;
        this.spFrame     = 0;
        this.lvFrame     = 60;
        this.dir         = 1;

        this.initGameObject();
    }

    initGameObject () {
        this.tank = {
            sprite: this.sprite.taSprite,
            x: (SIZE - this.sprite.taSprite.w) / 2,
            y: SIZE/this.screen.aspectRatio - (20 + this.sprite.taSprite.h),
        }

        this.bullets = [];

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

    drawSprite (sp, x, y) {
        x = this.screen.width/(SIZE/x);
        y = this.screen.height/(SIZE/this.screen.aspectRatio/y);
        let w = this.screen.width/(SIZE/sp.w),
            h = this.screen.height/((SIZE/this.screen.aspectRatio)/sp.h);
        this.context.drawImage(this.sprite.spriteImg, sp.x, sp.y, sp.w, sp.h, x, y, w, h);
    };

    render() {

        this.screen.clear();

        this.aliens.forEach((item) => {
            this.drawSprite(item.sprite[this.spFrame], item.x, item.y);
        });

        this.context.save();

        this.bullets.forEach((item) => {
            this.drawBullet(item);
        });

        this.context.restore();

        this.drawSprite(this.tank.sprite, this.tank.x, this.tank.y);
    };

    update () {
        this.frames++;

        if (this.controls.isDown(37)) {
            this.tank.x -= 6;
        }
        if (this.controls.isDown(39)) {
            this.tank.x += 6;
        }
        this.tank.x = Math.max(Math.min(this.tank.x, SIZE - (20 + this.sprite.taSprite.w)), 20);

        if (this.frames % this.lvFrame === 0) {
            this.spFrame = (this.spFrame + 1) % 2;
            let _max = 0, _min = SIZE;

            this.aliens.forEach((item) => {
                item.x += 20 * this.dir;
                _max = Math.max(_max, item.x + item.w);
                _min = Math.min(_min, item.x);
            });

            if (_max > SIZE - 20 || _min < 20) {
                this.dir *= -1;
                this.aliens.forEach((item) => {
                    item.x += 20 * this.dir;
                    item.y += 20;
                });
            }
        }
    };
}
