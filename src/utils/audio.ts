// Moteur audio procedural Web Audio API pour le Launcher Halloween
// 100% autonome, sans fichier externe, reactif et persistant

let audioCtx: AudioContext | null = null;
let bgmGain: GainNode | null = null;
let masterGain: GainNode | null = null;
let bgmOscs: { osc: OscillatorNode; gain: GainNode }[] = [];
let bgmInterval: number | null = null;

const STORAGE_MUTED = 'halloween_launcher_muted';
const STORAGE_VOL = 'halloween_launcher_vol';

export function getAudioContext(): AudioContext {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    audioCtx = new AudioContextClass();
    masterGain = audioCtx.createGain();
    masterGain.connect(audioCtx.destination);
    
    bgmGain = audioCtx.createGain();
    const savedVol = parseFloat(localStorage.getItem(STORAGE_VOL) || '0.35');
    const isMuted = localStorage.getItem(STORAGE_MUTED) === 'true';
    bgmGain.gain.setValueAtTime(isMuted ? 0 : savedVol, audioCtx.currentTime);
    bgmGain.connect(masterGain);
  }
  if (audioCtx.state === 'suspended') {
    void audioCtx.resume();
  }
  return audioCtx;
}

export function isAudioMuted(): boolean {
  return localStorage.getItem(STORAGE_MUTED) === 'true';
}

export function getAudioVolume(): number {
  return parseFloat(localStorage.getItem(STORAGE_VOL) || '0.35');
}

export function setAudioMuted(muted: boolean): void {
  localStorage.setItem(STORAGE_MUTED, muted ? 'true' : 'false');
  if (bgmGain && audioCtx) {
    const vol = muted ? 0 : getAudioVolume();
    bgmGain.gain.setTargetAtTime(vol, audioCtx.currentTime, 0.1);
  }
}

export function setAudioVolume(vol: number): void {
  const clamped = Math.max(0, Math.min(1, vol));
  localStorage.setItem(STORAGE_VOL, clamped.toString());
  if (bgmGain && audioCtx && !isAudioMuted()) {
    bgmGain.gain.setTargetAtTime(clamped, audioCtx.currentTime, 0.05);
  }
}

// BGM : Arpege & nappe gothique lente (accords de Re mineur, Sol mineur, La mineur)
const CHORDS = [
  [146.83, 220.00, 261.63, 293.66], // D3, A3, C4, D4
  [130.81, 196.00, 233.08, 261.63], // C3, G3, Bb3, C4
  [116.54, 174.61, 233.08, 293.66], // Bb2, F3, Bb3, D4
  [110.00, 164.81, 220.00, 277.18], // A2, E3, A3, C#4
];

let currentChordIdx = 0;

export function startBgm(): void {
  const ctx = getAudioContext();
  if (bgmInterval !== null) return;

  function playNextChord() {
    if (!ctx || !bgmGain) return;
    
    // Stop previous oscillators with smooth fade out
    bgmOscs.forEach(({ osc, gain }) => {
      gain.gain.setTargetAtTime(0, ctx.currentTime, 0.8);
      setTimeout(() => {
        try { osc.stop(); osc.disconnect(); } catch { /* ignore */ }
      }, 1000);
    });
    bgmOscs = [];

    const freqs = CHORDS[currentChordIdx];
    currentChordIdx = (currentChordIdx + 1) % CHORDS.length;

    freqs.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const noteGain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      // Son feutre type orgue / violoncelle
      osc.type = idx === 0 ? 'triangle' : 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      // Leger detune pour effet de choeur spectral
      osc.detune.setValueAtTime((idx % 2 === 0 ? 3 : -3), ctx.currentTime);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(650, ctx.currentTime);

      noteGain.gain.setValueAtTime(0, ctx.currentTime);
      noteGain.gain.linearRampToValueAtTime(0.08 / (idx + 1), ctx.currentTime + 1.2);
      noteGain.gain.setTargetAtTime(0.04 / (idx + 1), ctx.currentTime + 2.5, 1.5);

      osc.connect(filter);
      filter.connect(noteGain);
      noteGain.connect(bgmGain!);

      osc.start();
      bgmOscs.push({ osc, gain: noteGain });
    });
  }

  playNextChord();
  bgmInterval = window.setInterval(playNextChord, 4200);
}

export function stopBgm(): void {
  if (bgmInterval !== null) {
    clearInterval(bgmInterval);
    bgmInterval = null;
  }
  if (audioCtx) {
    bgmOscs.forEach(({ osc, gain }) => {
      gain.gain.setTargetAtTime(0, audioCtx!.currentTime, 0.4);
      setTimeout(() => {
        try { osc.stop(); osc.disconnect(); } catch { /* ignore */ }
      }, 500);
    });
    bgmOscs = [];
  }
}

// SFX 1 : Bruissement de parchemin ancien au survol
export function playHoverSfx(): void {
  if (isAudioMuted()) return;
  try {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(280, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(120, ctx.currentTime + 0.12);

    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(320, ctx.currentTime);
    filter.Q.setValueAtTime(3, ctx.currentTime);

    gain.gain.setValueAtTime(0.04, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(masterGain!);

    osc.start();
    osc.stop(ctx.currentTime + 0.12);
  } catch { /* AudioContext not ready */ }
}

// SFX 2 : Tintement spectral au clic sur un filtre
export function playClickSfx(): void {
  if (isAudioMuted()) return;
  try {
    const ctx = getAudioContext();
    [587.33, 880.00].forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.03);

      gain.gain.setValueAtTime(0.08, ctx.currentTime + idx * 0.03);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35 + idx * 0.03);

      osc.connect(gain);
      gain.connect(masterGain!);

      osc.start(ctx.currentTime + idx * 0.03);
      osc.stop(ctx.currentTime + 0.38 + idx * 0.03);
    });
  } catch { /* AudioContext not ready */ }
}

// SFX 3 : Grondement d orgue gothique au lancement d un jeu
export function playLaunchSfx(): void {
  try {
    const ctx = getAudioContext();
    [73.42, 110.00, 146.83, 220.00].forEach((freq) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(450, ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(150, ctx.currentTime + 0.6);

      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.7);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(masterGain!);

      osc.start();
      osc.stop(ctx.currentTime + 0.7);
    });
  } catch { /* AudioContext not ready */ }
}
