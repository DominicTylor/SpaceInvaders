/**
 * Created by Владимир on 22.10.2016.
 */

const WRAPPER_CLASS = 'sound-wrapper';

import './style.less';

export default class Sounds {
    constructor() {
        this.soundWrapper = document.createElement('div');
        this.soundWrapper.className = WRAPPER_CLASS;
        document.body.appendChild(this.soundWrapper);
        this.sounds   = {
            explosion: this.addAudio('explosion'),
            fastinvader1: this.addAudio('fastinvader1'),
            fastinvader2: this.addAudio('fastinvader2'),
            fastinvader3: this.addAudio('fastinvader3'),
            fastinvader4: this.addAudio('fastinvader4'),
            invaderkilled: this.addAudio('invaderkilled'),
            shoot: this.addAudio('shoot'),
        }
        this.invidersSound = 1;
    }

    addAudio (fileName, folder = 'sounds', format = 'mp3') {
        let audio = document.createElement('audio');
        audio.src = (`${folder}/${fileName}.${format}`);
        this.soundWrapper.appendChild(audio);
        audio.preload = 'auto';
        audio.load();
        return audio;
    }

    playSound(name) {
        if (name === 'fastinvader') {
            if (++this.invidersSound>4) {
                this.invidersSound = 1
            }
            name = `fastinvader${this.invidersSound}`;
        }
        if (this.sounds[name]) {
            this.sounds[name].play();
        }
    }

    pauseSound(name) {
        if (name === 'fastinvader') {
            name = `fastinvader${this.invidersSound}`;
        }
        if (this.sounds[name]) {
            this.sounds[name].pause();
        }
    }
}
