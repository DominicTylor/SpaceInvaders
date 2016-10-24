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
        x = this.screen.width/(this.gameObjects.scale/x);
        y = this.screen.height/(this.gameObjects.scale/this.screen.aspectRatio/y);
        let w = this.screen.width/(this.gameObjects.scale/sp.w),
            h = this.screen.height/((this.gameObjects.scale/this.screen.aspectRatio)/sp.h);
        this.context.drawImage(this.gameObjects.sprite.spriteImg, sp.x, sp.y, sp.w, sp.h, x, y, w, h);
    };

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
