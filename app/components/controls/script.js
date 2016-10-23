/**
 * Created by Владимир on 22.10.2016.
 */

import './style.less';

export default class Controls {
    constructor() {
        this.down    = {};
        this.pressed = {};

        document.addEventListener('keydown', (e) => {
            this.down[e.keyCode] = true;
        });

        document.addEventListener('keyup', (e) => {
            delete this.down[e.keyCode];
            delete this.pressed[e.keyCode];
        });
    }

    isDown (code) {
        return this.down[code];
    };

    isPressed (code) {
        if (this.pressed[code]) {
            return false;
        } else if (this.down[code]) {
            return this.pressed[code] = true;
        }
        return false;
    };
}
