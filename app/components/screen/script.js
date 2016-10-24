/**
 * Created by Владимир on 22.10.2016.
 */

import './style.less';

const SCREEN_ASPECT_RATIO = 16/9;
const WRAPPER_CLASS       = 'wrapper';
const CANVAS_CLASS        = 'canvas';
const MAX_WIDTH           = 1000;

export default class Screen {
    constructor() {
        this.aspectRatio = SCREEN_ASPECT_RATIO;
        this.screen = document.createElement('div');
        this.canvas = document.createElement('canvas');

        this.setScreenSize();

        document.body.appendChild(this.screen);
        this.screen.appendChild(this.canvas);

        this.screen.className = WRAPPER_CLASS;
        this.canvas.className = CANVAS_CLASS;

        this.context = this.canvas.getContext('2d');

        window.addEventListener('resize', () => {
            this.setScreenSize();
        });
    }

    // масштабирование экрана
    setScreenSize () {
        this.windowWidth  = document.documentElement.clientWidth;
        this.windowHeight = document.documentElement.clientHeight;
        this.width        = this.windowWidth*0.98>MAX_WIDTH ? MAX_WIDTH : this.windowWidth*0.98;
        this.height       = this.width/SCREEN_ASPECT_RATIO;

        if (this.height > this.windowHeight * 0.98) {
            this.height  = this.windowHeight * 0.98;
            this.width = this.windowHeight * 0.98 * SCREEN_ASPECT_RATIO;
        }
        this.canvas.width        = this.width;
        this.canvas.height       = this.height;
        this.screen.style.height = this.height  + 'px';
        this.screen.style.width  = this.width + 'px';
    };

    // очистка холста
    clear () {
        this.context.clearRect(0, 0, this.width, this.height);
    };
}
