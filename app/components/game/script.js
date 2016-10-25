/**
 * Created by Владимир on 22.10.2016.
 */

import './style.less';

export default class Game {
    constructor(screen, gameObjects, draw) {
        this.screen = screen;
        this.gameObjects = gameObjects;
        this.draw = draw;
        this.status = 'start';

        this.screen.screen.addEventListener('click', () => {
            if (this.status === 'start' || this.status === 'pause') {
                this.status = 'run';
                this.gameObjects.lose = false;
                this.run();
            } else if (this.status === 'win' || this.status === 'lose') {
                this.gameObjects.initGameObject();
                this.status = 'run';
                this.gameObjects.lose = false;
                this.run();
            } else if (this.status === 'run') {
                this.status = 'pause';
            }
        });

        window.addEventListener('resize', () => {
            if (this.status !== 'run') {
                this.run();
            }
        });
    }

    run () {
        if (this.status === 'run') {
            this.gameObjects.update();
        }

        if (this.gameObjects.lose) {
            this.status = this.gameObjects.lose;
        }

        this.draw.render(this.status);
        if (this.status === 'run') {
            window.requestAnimationFrame(this.run.bind(this));
        }
    };
}
