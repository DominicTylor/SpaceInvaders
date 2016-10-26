/**
 * Created by Владимир on 22.10.2016.
 */

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
        this.context.fillStyle = bullet.c;
        let item = this.scaleCoordinates(bullet.x, bullet.y, bullet.w, bullet.h);
        this.context.fillRect(item.x, item.y, item.w, item.h);
    };

    // функция для отрисовки текста
    drawText (text, fontSize = 30, x = this.gameObjects.scaleW/2, y = this.gameObjects.scaleH/2, direction = 'center') {
        fontSize = this.screen.height/(this.gameObjects.scaleH/fontSize);
        x = this.screen.width/(this.gameObjects.scaleW/x);
        y = this.screen.height/(this.gameObjects.scaleH/y);
        this.context.save();

        this.context.fillStyle = '#fff';
        this.context.font = `${fontSize}px Helvetica`;
        this.context.textAlign = direction;
        this.context.textBaseline = 'middle';
        this.context.fillText(text, x, y);

        this.context.restore();
    };

    // функция для отрисовки дополнительных жизней
    drawLife (life) {
        if (!life) {
            return;
        }
        let sp = this.gameObjects.tank.sprite,
            xOffset = 20+sp.w,
            itemOffset = xOffset,
            item;
        while (life--) {
            item = this.scaleCoordinates(this.gameObjects.scaleW-itemOffset, 10, sp.w, sp.h);
            this.context.drawImage(this.gameObjects.sprite.spriteImg,
                sp.x, sp.y, sp.w, sp.h,
                item.x, item.y, item.w, item.h);
            itemOffset += xOffset;
        }
    };

    // башни
    drawCities () {
        let cities = this.gameObjects.cities,
            item = this.scaleCoordinates(cities.x, cities.y, cities.w, cities.h);
        this.context.drawImage(cities.canvas,
            0, 0, cities.w, cities.h,
            item.x, item.y, item.w, item.h);
    };

    // функция пересчёта координат для текущего размера
    scaleCoordinates (x, y, w, h) {
        return {
            x: this.screen.width/(this.gameObjects.scaleW/x),
            y: this.screen.height/(this.gameObjects.scaleH/y),
            w: this.screen.width/(this.gameObjects.scaleW/w),
            h: this.screen.height/((this.gameObjects.scaleH)/h),
        };
    };

    // рисование фрейма
    render(status) {

        // очищаем
        this.screen.clear();

        // пришельцы
        this.gameObjects.aliens.forEach((item) => {
            this.drawSprite(item.sprite[this.gameObjects.spFrame], item.x, item.y);
        });

        // пульки
        this.context.save();

        this.gameObjects.bulletsT.concat(this.gameObjects.bulletsA).forEach((item) => {
            this.drawBullet(item);
        });

        this.context.restore();

        // башни
        this.drawCities();

        // танчик
        if (! (status == 'win' || status == 'lose')) {
            this.drawSprite(this.gameObjects.tank.sprite, this.gameObjects.tank.x, this.gameObjects.tank.y);
        }

        // очки
        this.drawText(this.gameObjects.score, 20, 20, 20, 'left');

        // жизни
        this.drawLife(this.gameObjects.life);

        // текст посередине
        switch (status) {
            case 'start': {
                this.drawText('Начать игру');
                break;
            }
            case 'pause': {
                this.drawText('Продолжить игру');
                break;
            }
            case 'lose': {
                this.drawText('Попробовать ещё раз');
                break;
            }
            case 'win': {
                this.drawText('Вы победили!');
                break;
            }
        }
    };
}
