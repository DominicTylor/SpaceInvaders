/**
 * Created by Владимир on 22.10.2016.
 */

import './style.less';

export default class Sprite {
    constructor() {
        this.spriteImg     = new Image();
        this.spriteImg.src = 'data:image/png;base64,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';
    };

    getSprite (x, y, w, h) {
        return {
            x: x,
            y: y,
            w: w,
            h: h,
        };
    };

    // создаём спрайт для объектов
    initSprite () {
        // пришельцы, в порядке увеличения очков за них,
        // две версии, для 'движения'

        this.alSprite = [
            [this.getSprite(38, 0, 24, 16), this.getSprite(38, 16, 24, 16)],
            [this.getSprite(0, 0, 22, 16), this.getSprite(0, 16, 22, 16)],
            [this.getSprite(22, 0, 16, 16), this.getSprite(22, 16, 16, 16)]
        ];

        // танчик
        this.taSprite = this.getSprite(62, 0, 22, 16);

        // башня
        this.ciSprite = this.getSprite(84, 8, 36, 24);
    };
}
