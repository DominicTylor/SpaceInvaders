/**
 * Created by Владимир on 22.10.2016.
 */
// полифил для ie у которого своё понимание как должны быть добавлены свои события
import 'custom-event-polyfill/custom-event-polyfill.js';

const CONTROLS_CLASS = 'controls';

export default class Controls {
    constructor(obj) {
        this.screen = obj.screen;
        this.events = obj.events;

        this.controls = document.createElement('div');
        this.screen.appendChild(this.controls);
        this.controls.className = CONTROLS_CLASS;

        this.initEvent();

    }

    initEvent () {
        this.startEvent = new CustomEvent(this.events.start);
        this.leftEvent = new CustomEvent(this.events.left);
        this.rightEvent = new CustomEvent(this.events.right);

        this.controls.addEventListener('click', () => {
            window.console.log('Knock Knock');
            this.screen.dispatchEvent(this.startEvent);
        });
        if ('ontouchstart' in window) {
            this.touchControlsInit();
        }
    }

    touchControlsInit () {
        window.console.log('Mobile control');
    }
}
