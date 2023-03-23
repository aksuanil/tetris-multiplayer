import hoverSfx from '../assets/sounds/hover_1.wav';
import clickSfx from '../assets/sounds/click_1.wav';
import errorSfx from '../assets/sounds/error_1.wav';
import BladeRunnertheme from '../assets/sounds/theme_1.wav';
import moveSfx from '../assets/sounds/move_1.wav';
import lineClearSfx from '../assets/sounds/line_clear.wav';
import tetrisClearSfx from '../assets/sounds/tetris_clear.wav';
import gameLoseSfx from '../assets/sounds/game_lose.wav'
import gameStartSfx from '../assets/sounds/game_start.mp3'
import messageSfx from '../assets/sounds/message.wav'
import joinSfx from '../assets/sounds/join_room.wav'
import sliderSfx from '../assets/sounds/slider.wav'

export class SoundManager {
    private static instance: SoundManager;
    private audioMap: Map<string, HTMLAudioElement>;

    private themes: string[];
    private themeIndex: number;

    private static masterVolume = 0.5;
    private static sfxVolume = 0.5;
    private static musicVolume = 0.0;

    private constructor() {
        this.audioMap = new Map();

        this.themes = [BladeRunnertheme];
        this.themeIndex = 0;
        this.initializeAudio('hover', hoverSfx);
        this.initializeAudio('click', clickSfx);
        this.initializeAudio('error', errorSfx);
        this.initializeAudio('move', moveSfx);
        this.initializeAudio('lineClear', lineClearSfx);
        this.initializeAudio('tetrisClear', tetrisClearSfx);
        this.initializeAudio('gameLose', gameLoseSfx);
        this.initializeAudio('gameWin', gameStartSfx);
        this.initializeAudio('start', gameStartSfx);
        this.initializeAudio('message', messageSfx);
        this.initializeAudio('join', joinSfx);
        this.initializeAudio('slider', sliderSfx);
        this.initializeAudio('theme', this.themes[this.themeIndex]);
    }

    public static getInstance(): SoundManager {
        if (!SoundManager.instance) {
            SoundManager.instance = new SoundManager();
        }
        return SoundManager.instance;
    }

    public static getMasterVolume(): number {
        return SoundManager.masterVolume;
    }

    public static getSfxVolume(): number {
        return SoundManager.sfxVolume;
    }

    public static getMusicVolume(): number {
        return SoundManager.musicVolume;
    }

    private initializeAudio(type: string, src: string, loop = false): void {
        const audio = new Audio(src);
        audio.loop = loop;
        this.audioMap.set(type, audio);

    }

    public playSound(type: string): void {
        const audio = this.audioMap.get(type);
        if (!audio) return;

        if (type === "theme") {
            audio.addEventListener("ended", () => {
                this.themeIndex = (this.themeIndex + 1) % this.themes.length;
                this.audioMap.get("theme")!.src = this.themes[this.themeIndex];
                this.audioMap.get("theme")?.play();
            });
            audio.volume = Math.max(0, Math.min(SoundManager.masterVolume, SoundManager.musicVolume));
            audio.play();
            return
        }

        if (audio.ended) {
            audio.play()
        } else {
            const newAudio = new Audio(audio.src);
            newAudio.volume = Math.max(0, Math.min(SoundManager.masterVolume, SoundManager.sfxVolume));
            newAudio.play();

        }
    }

    public stopSound(type: string): void {
        const audio = this.audioMap.get(type);
        if (audio) {
            audio.pause();
            audio.currentTime = 0;
        }
    }

    public setMasterVolume(volume: number): void {
        SoundManager.masterVolume = Math.max(0, volume);

        this.audioMap.get('theme')!.volume = Math.max(0, Math.min(SoundManager.masterVolume, SoundManager.musicVolume));
    }

    public setSfxVolume(volume: number): void {
        SoundManager.sfxVolume = volume;

        this.audioMap.forEach((audio, value) => {
            if (value != 'theme') audio.volume = SoundManager.sfxVolume;
        });
    }

    public setMusicVolume(volume: number): void {
        SoundManager.musicVolume = volume;

        this.audioMap.get('theme')!.volume = Math.max(0, Math.min(SoundManager.masterVolume, SoundManager.musicVolume));
    }
}