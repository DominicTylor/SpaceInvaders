/**
 * Created by Владимир on 22.10.2016.
 */
const SRC_IMG = 'inviders.png';

import './style.less';

export default class Draw {
    constructor(context) {
        this.context   = context;
        this.spriteImg = SRC_IMG;
    }

    drawSprite (sp, x, y) {
        this.context.drawImage(sp.img, sp.x, sp.y, sp.w, sp.h, x, y, sp.w, sp.h);
    };

    getSprite (img, x, y, w, h) {
        this.img = img;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
}
