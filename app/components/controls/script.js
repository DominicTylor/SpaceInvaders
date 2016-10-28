/**
 * Created by Владимир on 22.10.2016.
 */

import './style.less';

const MOBILE_LAUNCH_CLASS = 'mobile__button mobile__button--launch';
const MOBILE_LEFT_CLASS = 'mobile__button mobile__button--move-left';
const MOBILE_RIGHT_CLASS  = 'mobile__button mobile__button--move-right';

export default class Controls {
    constructor() {
        this.down    = {};
        this.pressed = {};
        this.mobile  = false;

        document.addEventListener('keydown', e => {
            this.pushButton(e, e.keyCode);
        });
        document.addEventListener('keyup', e => {
            this.unpushButton(e, e.keyCode);
        });

        if ('ontouchstart' in document.documentElement) {
            this.mobile = true;
            this.mobileInit();
        }
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

    mobileInit () {
        let mobileButton = {
            buttonLaunch: {
                class: MOBILE_LAUNCH_CLASS,
                symbol: '⇪',
            },
            buttonLeftMove: {
                class: MOBILE_LEFT_CLASS,
                symbol: '◀',
            },
            buttonRightMove: {
                class: MOBILE_RIGHT_CLASS,
                symbol: '▶',
            },
        }
        for (let key in mobileButton) {
            this[key] = document.createElement('div');
            this[key].className = mobileButton[key].class;
            this[key].appendChild(document.createTextNode(mobileButton[key].symbol));
            document.body.appendChild(this[key]);
        }

        // стрельба на touch устройствах
        this.buttonLaunch.addEventListener('touchstart', e  => {
            this.pushButton(e, 32);
        }).addEventListener('touchend', e => {
            this.unpushButton(e, 32);
        });


        // движение влево на touch устройствах
        this.buttonLeftMove.addEventListener('touchstart', e => {
            this.pushButton(e, 37);
        }).addEventListener('touchend', e => {
            this.unpushButton(e, 37);
        });

        // движение вправо на touch устройствах
        this.buttonRightMove.addEventListener('touchstart', e => {
            this.pushButton(e, 39);
        }).buttonRightMove.addEventListener('touchend', e => {
            this.unpushButton(e, 39);
        });
    }

    pushButton (event, keyCode) {
        this.down[keyCode] = true;
        if (this.mobile) {
            event.target.classList.add('active');
        }
    }

    unpushButton (event, keyCode) {
        delete this.down[keyCode];
        delete this.pressed[keyCode];
        if (this.mobile) {
            event.target.classList.remove('active');
        }
    }
}
