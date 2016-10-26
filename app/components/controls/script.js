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

        document.addEventListener('keydown', (e) => {
            this.down[e.keyCode] = true;
        });

        document.addEventListener('keyup', (e) => {
            delete this.down[e.keyCode];
            delete this.pressed[e.keyCode];
        });

        if ('ontouchstart' in document.documentElement) {
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
        this.buttonLaunch.addEventListener('touchstart', (event) => {
            this.pushMobileButton(event, 32);
        });
        this.buttonLaunch.addEventListener('touchend', (event) => {
            this.unpushMobileButton(event, 32);
        });


        // движение влево на touch устройствах
        this.buttonLeftMove.addEventListener('touchstart', (event) => {
            this.pushMobileButton(event, 37);
        });
        this.buttonLeftMove.addEventListener('touchend', (event) => {
            this.unpushMobileButton(event, 37);
        });

        // движение вправо на touch устройствах
        this.buttonRightMove.addEventListener('touchstart', (event) => {
            this.pushMobileButton(event, 39);
        });
        this.buttonRightMove.addEventListener('touchend', (event) => {
            this.unpushMobileButton(event, 39);
        });
    }

    pushMobileButton (event, keyCode) {
        event.preventDefault();
        event.stopPropagation();
        this.down[keyCode] = true;
        event.target.classList.add('active');
    }

    unpushMobileButton (event, keyCode) {
        event.preventDefault();
        event.stopPropagation();
        delete this.down[keyCode];
        delete this.pressed[keyCode];
        event.target.classList.remove('active');
    }
}
