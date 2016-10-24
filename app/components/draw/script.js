/**
 * Created by Владимир on 22.10.2016.
 */

import './style.less';

export default class Draw {
    constructor(screen, gameObjects) {
        this.gameObjects = gameObjects;
        this.screen      = screen;
        this.context     = screen.context;
    }

    // функция для отрисовки объекта
    drawSprite (sp, x, y) {
        let item = this.scaleCoordinates(x, y, sp.w, sp.h);
        this.context.drawImage(this.gameObjects.sprite.spriteImg, sp.x, sp.y, sp.w, sp.h, item.x, item.y, item.w, item.h);
    };

    // функция для отрисовки пульки
    drawBullet (bullet) {
        this.context.fillStyle = bullet.color;
        let item = this.scaleCoordinates(bullet.x, bullet.y, bullet.width, bullet.height);
        this.context.fillRect(item.x, item.y, item.w, item.h);
    }

    // фукнкция пересчёта координат для текущего размера
    scaleCoordinates (x, y, w, h) {
        return {
            x: this.screen.width/(this.gameObjects.scale/x),
            y: this.screen.height/(this.gameObjects.scale/this.screen.aspectRatio/y),
            w: this.screen.width/(this.gameObjects.scale/w),
            h: this.screen.height/((this.gameObjects.scale/this.screen.aspectRatio)/h),
        };
    }

    // рисование фрейма
    render() {

        this.screen.clear();

        this.gameObjects.aliens.forEach((item) => {
            this.drawSprite(item.sprite[this.gameObjects.spFrame], item.x, item.y);
        });

        this.context.save();

        this.gameObjects.bullets.forEach((item) => {
            this.drawBullet(item);
        });

        this.context.restore();

        this.drawSprite(this.gameObjects.tank.sprite, this.gameObjects.tank.x, this.gameObjects.tank.y);
    };
}
