import React, { createContext, useContext, useEffect, useRef, useState } from 'react';

export interface AudioContextType {
  isMuted: boolean;
  toggleMute: () => void;
  playSFX: (name: string, volume?: number) => void;
  startLoop: (name: string, volume?: number) => void;
  stopLoop: (name: string) => void;
  fadeLoopOut: (name: string, duration: number) => void;
  initializeAudio: () => void;
  // Background Soundtrack Controls (noname.mp3)
  isPlayingMusic: boolean;
  toggleMusic: () => void;
  playMusic: () => void;
  pauseMusic: () => void;
  musicVolume: number;
  setMusicVolume: (volume: number) => void;
  currentTrack: string;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMuted, setIsMuted] = useState(() => {
    return localStorage.getItem('audio_muted') === 'true';
  });

  const [isPlayingMusic, setIsPlayingMusic] = useState<boolean>(false);
  const [musicVolume, setMusicVolumeState] = useState<number>(() => {
    const saved = localStorage.getItem('music_volume');
    return saved !== null ? Math.max(0, Math.min(1, parseFloat(saved))) : 0.35;
  });
  const [userPausedMusic, setUserPausedMusic] = useState<boolean>(() => {
    return localStorage.getItem('music_paused') === 'true';
  });
  const currentTrack = 'noname.mp3';

  const audioCtxRef = useRef<AudioContext | null>(null);
  const buffersRef = useRef<Record<string, AudioBuffer>>({});
  const activeSourcesRef = useRef<Record<string, { source: AudioScheduledSourceNode; gainNode: GainNode }>>({});
  const musicAudioRef = useRef<HTMLAudioElement | null>(null);

  const soundUrls: Record<string, string> = {
    ambient_drone: '/audio/ambient_drone.mp3',
    paper_rustle_unfold: '/audio/paper_rustle_unfold.mp3',
    stamp_heavy: '/audio/stamp_heavy.mp3',
    ember_crackle_loop: '/audio/ember_crackle_loop.mp3',
    stamp_impact: '/audio/stamp_impact.mp3',
    paper_slide: '/audio/paper_slide.mp3',
    latch_click: '/audio/latch_click.mp3',
    morph_sweep: '/audio/morph_sweep.mp3',
  };

  // Dedicated HTMLAudioElement for streaming /music/noname.mp3
  useEffect(() => {
    const audio = new Audio('/music/noname.mp3');
    audio.loop = true;
    audio.volume = musicVolume;
    audio.muted = isMuted;
    audio.preload = 'auto';

    const handlePlay = () => setIsPlayingMusic(true);
    const handlePause = () => setIsPlayingMusic(false);

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);

    musicAudioRef.current = audio;

    // Autoplay attempt if unmuted and user hasn't explicitly paused
    if (!isMuted && !userPausedMusic) {
      audio.play().catch(() => {
        // Handled cleanly via user interaction listener below
      });
    }

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.pause();
      musicAudioRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const initializeAudio = async () => {
    if (audioCtxRef.current) return;

    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return;

    const ctx = new AudioContextClass();
    audioCtxRef.current = ctx;

    // Trigger asynchronous fetches
    Object.entries(soundUrls).forEach(async ([name, url]) => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const arrayBuffer = await response.arrayBuffer();
        ctx.decodeAudioData(arrayBuffer, (decodedBuffer) => {
          buffersRef.current[name] = decodedBuffer;
        });
      } catch (err) {
        // Log error and fallback to procedural synthesis when requested
        console.warn(`Failed to preload audio asset "${name}" from "${url}". Procedural synthesizers will stand by.`, err);
      }
    });
  };

  useEffect(() => {
    const handleInteraction = () => {
      if (audioCtxRef.current && audioCtxRef.current.state === 'suspended' && !isMuted) {
        audioCtxRef.current.resume().catch(() => {});
      }

      if (musicAudioRef.current && !isMuted && !userPausedMusic && musicAudioRef.current.paused) {
        musicAudioRef.current.play().catch(() => {});
      }
    };

    window.addEventListener('click', handleInteraction, { passive: true });
    window.addEventListener('touchstart', handleInteraction, { passive: true });
    window.addEventListener('keydown', handleInteraction, { passive: true });
    return () => {
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
    };
  }, [isMuted, userPausedMusic]);

  const toggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    localStorage.setItem('audio_muted', String(nextMuted));

    if (audioCtxRef.current) {
      if (nextMuted) {
        audioCtxRef.current.suspend().catch(() => {});
      } else {
        audioCtxRef.current.resume().catch(() => {});
      }
    }

    if (musicAudioRef.current) {
      musicAudioRef.current.muted = nextMuted;
      if (nextMuted) {
        musicAudioRef.current.pause();
      } else if (!userPausedMusic) {
        musicAudioRef.current.play().catch(() => {});
      }
    }
  };

  const playMusic = () => {
    setUserPausedMusic(false);
    localStorage.setItem('music_paused', 'false');
    if (isMuted) {
      setIsMuted(false);
      localStorage.setItem('audio_muted', 'false');
    }
    if (musicAudioRef.current) {
      musicAudioRef.current.muted = false;
      musicAudioRef.current.play().catch((err) => {
        console.warn('Unable to play music:', err);
      });
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume().catch(() => {});
    }
  };

  const pauseMusic = () => {
    setUserPausedMusic(true);
    localStorage.setItem('music_paused', 'true');
    if (musicAudioRef.current) {
      musicAudioRef.current.pause();
    }
  };

  const toggleMusic = () => {
    if (isPlayingMusic) {
      pauseMusic();
    } else {
      playMusic();
    }
  };

  const setMusicVolume = (volume: number) => {
    const clamped = Math.max(0, Math.min(1, volume));
    setMusicVolumeState(clamped);
    localStorage.setItem('music_volume', String(clamped));
    if (musicAudioRef.current) {
      musicAudioRef.current.volume = clamped;
    }
  };

  // Procedural Synthesis Fallbacks
  const synthesizeSFX = (name: string, ctx: AudioContext, volume: number) => {
    const now = ctx.currentTime;
    
    if (name === 'stamp_heavy' || name === 'stamp_impact') {
      // Wood-impact rubber stamp synthesis: Low pitch sweep + short white noise burst
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(100, now);
      osc.frequency.exponentialRampToValueAtTime(15, now + 0.15);
      
      gainNode.gain.setValueAtTime(volume * 0.8, now);
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
      
      osc.connect(gainNode);
      gainNode.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.16);

      // Noise component for rustle/dust
      const bufferSize = ctx.sampleRate * 0.05;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }
      const noise = ctx.createBufferSource();
      noise.buffer = buffer;
      const noiseFilter = ctx.createBiquadFilter();
      noiseFilter.type = 'lowpass';
      noiseFilter.frequency.setValueAtTime(400, now);
      
      const noiseGain = ctx.createGain();
      noiseGain.gain.setValueAtTime(volume * 0.3, now);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
      
      noise.connect(noiseFilter);
      noiseFilter.connect(noiseGain);
      noiseGain.connect(ctx.destination);
      noise.start(now);
    } 
    else if (name === 'latch_click') {
      // Direct high frequency transient for typewriter key or latch latching
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();
      
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(1800, now);
      osc.frequency.setValueAtTime(1200, now + 0.005);
      
      gainNode.gain.setValueAtTime(volume * 0.1, now);
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.02);
      
      osc.connect(gainNode);
      gainNode.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.025);
    }
    else if (name === 'paper_slide') {
      // White noise bandpass filter sweep to simulate paper rubbing
      const bufferSize = ctx.sampleRate * 0.3;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }
      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(800, now);
      filter.frequency.exponentialRampToValueAtTime(300, now + 0.3);
      filter.Q.setValueAtTime(1.5, now);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(volume * 0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      noise.start(now);
    }
  };

  const playSFX = (name: string, volume = 1.0) => {
    if (isMuted || !audioCtxRef.current) return;
    const ctx = audioCtxRef.current;
    
    // Play static buffer if loaded
    const buffer = buffersRef.current[name];
    if (buffer) {
      const source = ctx.createBufferSource();
      source.buffer = buffer;
      const gainNode = ctx.createGain();
      gainNode.gain.setValueAtTime(volume, ctx.currentTime);
      source.connect(gainNode);
      gainNode.connect(ctx.destination);
      source.start(0);
    } else {
      // Synthesize on the fly
      synthesizeSFX(name, ctx, volume);
    }
  };

  const startLoop = (name: string, volume = 0.5) => {
    if (isMuted || !audioCtxRef.current) return;
    const ctx = audioCtxRef.current;
    
    if (activeSourcesRef.current[name]) {
      stopLoop(name);
    }

    const buffer = buffersRef.current[name];
    if (buffer) {
      const source = ctx.createBufferSource();
      source.buffer = buffer;
      source.loop = true;
      const gainNode = ctx.createGain();
      gainNode.gain.setValueAtTime(volume, ctx.currentTime);
      source.connect(gainNode);
      gainNode.connect(ctx.destination);
      source.start(0);
      activeSourcesRef.current[name] = { source, gainNode };
    } 
    else if (name === 'ambient_drone' || name === 'music' || name === 'noname') {
      // Ensure streaming background soundtrack is playing
      if (!isMuted && !userPausedMusic && musicAudioRef.current && musicAudioRef.current.paused) {
        musicAudioRef.current.play().catch(() => {});
      }

      // Synthesize 40Hz hum sub-bass drone and pan it
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(40, ctx.currentTime);
      
      const gainNode = ctx.createGain();
      gainNode.gain.setValueAtTime(volume * 0.4, ctx.currentTime);
      
      // Basic panning using StereoPannerNode (if available) or standard nodes
      let panner: StereoPannerNode | null = null;
      if (ctx.createStereoPanner) {
        panner = ctx.createStereoPanner();
        panner.pan.setValueAtTime(0, ctx.currentTime);
        osc.connect(panner);
        panner.connect(gainNode);
      } else {
        osc.connect(gainNode);
      }
      
      gainNode.connect(ctx.destination);
      osc.start(0);
      
      // Store the oscillator as the source node to track it
      activeSourcesRef.current[name] = { source: osc as any, gainNode };
    }
    else if (name === 'ember_crackle_loop') {
      // Synthesize crackle loop using filtered white noise impulses
      const bufferSize = ctx.sampleRate * 2;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        // Crackle is silent except for occasional micro impulses
        data[i] = Math.random() < 0.0005 ? (Math.random() * 2 - 1) : 0;
      }
      
      const noise = ctx.createBufferSource();
      noise.buffer = buffer;
      noise.loop = true;
      
      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(2500, ctx.currentTime);
      
      const gainNode = ctx.createGain();
      gainNode.gain.setValueAtTime(volume * 0.2, ctx.currentTime);
      
      noise.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(ctx.destination);
      noise.start(0);
      
      activeSourcesRef.current[name] = { source: noise as any, gainNode };
    }
  };

  const stopLoop = (name: string) => {
    const active = activeSourcesRef.current[name];
    if (active) {
      try {
        active.source.stop();
      } catch {}
      delete activeSourcesRef.current[name];
    }
  };

  const fadeLoopOut = (name: string, duration: number) => {
    const active = activeSourcesRef.current[name];
    if (active && audioCtxRef.current) {
      const ctx = audioCtxRef.current;
      const now = ctx.currentTime;
      active.gainNode.gain.setValueAtTime(active.gainNode.gain.value, now);
      active.gainNode.gain.exponentialRampToValueAtTime(0.001, now + duration);
      setTimeout(() => {
        stopLoop(name);
      }, duration * 1000);
    }
  };

  return (
    <AudioContext.Provider
      value={{
        isMuted,
        toggleMute,
        playSFX,
        startLoop,
        stopLoop,
        fadeLoopOut,
        initializeAudio,
        isPlayingMusic,
        toggleMusic,
        playMusic,
        pauseMusic,
        musicVolume,
        setMusicVolume,
        currentTrack,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};

export default useAudio;
