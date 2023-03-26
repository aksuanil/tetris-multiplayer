import hoverSfx from '../assets/sounds/hover_1.mp3';
import clickSfx from '../assets/sounds/click_1.mp3';
import errorSfx from '../assets/sounds/error_1.mp3';
import theme_1 from '../assets/sounds/theme_1.mp3';
import theme_2 from '../assets/sounds/theme_2.mp3';
import theme_3 from '../assets/sounds/theme_3.mp3';
import lineClearSfx from '../assets/sounds/clear_1.mp3';
import tetrisClearSfx from '../assets/sounds/tetris_clear.mp3';
import gameLoseSfx from '../assets/sounds/game_lose.mp3'
import gameStartSfx from '../assets/sounds/game_start.mp3'
import messageSfx from '../assets/sounds/message.mp3'
import joinSfx from '../assets/sounds/join_room.mp3'
import move2Sfx from '../assets/sounds/move_2.mp3'
import drop3Sfx from '../assets/sounds/move3.mp3'
import slider2Sfx from '../assets/sounds/slider2.mp3'

export class SoundManager {
    private static instance: SoundManager;
    private audioMap: Map<string, HTMLAudioElement>;

    private themes: string[];
    private themeIndex: number;

    private static masterVolume = 0.5;
    private static sfxVolume = 0.5;
    private static musicVolume = 0.5;

    private constructor() {
        this.audioMap = new Map();

        this.themes = [theme_1, theme_2, theme_3];
        this.themeIndex = 0;
        this.initializeAudio('hover', hoverSfx);
        this.initializeAudio('click', clickSfx);
        this.initializeAudio('error', errorSfx);
        this.initializeAudio('move', move2Sfx); //
        this.initializeAudio('drop', drop3Sfx);
        this.initializeAudio('lineClear', lineClearSfx);
        this.initializeAudio('tetrisClear', tetrisClearSfx);
        this.initializeAudio('gameLose', gameLoseSfx);
        this.initializeAudio('gameWin', gameStartSfx);
        this.initializeAudio('start', gameStartSfx);
        this.initializeAudio('message', messageSfx);
        this.initializeAudio('join', joinSfx);
        this.initializeAudio('slider', slider2Sfx);
        this.initializeAudio('rotate', move2Sfx); //
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