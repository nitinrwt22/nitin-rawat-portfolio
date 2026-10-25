import React, { useState, useRef, useEffect } from 'react';
import { useAudio } from '../../hooks/useAudio';

interface MusicPlayerProps {
  className?: string;
  compact?: boolean;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ className = '' }) => {
  const {
    isMuted,
    toggleMute,
    isPlayingMusic,
    toggleMusic,
    musicVolume,
    setMusicVolume,
    currentTrack,
    playSFX,
  } = useAudio();

  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const sliderTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleTogglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    playSFX('latch_click', 0.3);
    toggleMusic();
  };

  const handleToggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    playSFX('button_click', 0.4);
    toggleMute();
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setMusicVolume(val);
  };

  const handleMouseEnter = () => {
    if (sliderTimeoutRef.current) clearTimeout(sliderTimeoutRef.current);
    setShowVolumeSlider(true);
  };

  const handleMouseLeave = () => {
    sliderTimeoutRef.current = setTimeout(() => {
      setShowVolumeSlider(false);
    }, 1200);
  };

  useEffect(() => {
    return () => {
      if (sliderTimeoutRef.current) clearTimeout(sliderTimeoutRef.current);
    };
  }, []);

  const isActuallyPlaying = isPlayingMusic && !isMuted;

  return (
    <div
      className={`relative inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-surface-container-high/60 hover:bg-surface-container-high/90 border border-outline-variant/40 hover:border-outline/50 transition-all select-none backdrop-blur-md ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Equalizer Visualizer Bars */}
      <button
        type="button"
        onClick={handleTogglePlay}
        aria-label={isActuallyPlaying ? 'Pause noname.mp3' : 'Play noname.mp3'}
        className="flex items-end gap-[2.5px] h-4.5 px-0.5 cursor-pointer focus:outline-none"
        title={isActuallyPlaying ? 'Click to Pause Music' : 'Click to Play Music'}
      >
        <span
          className={`w-[2.5px] rounded-full transition-all duration-300 ${
            isActuallyPlaying
              ? 'bg-secondary animate-eq-1'
              : 'h-1.5 bg-outline/40'
          }`}
        />
        <span
          className={`w-[2.5px] rounded-full transition-all duration-300 ${
            isActuallyPlaying
              ? 'bg-secondary animate-eq-2'
              : 'h-2.5 bg-outline/40'
          }`}
        />
        <span
          className={`w-[2.5px] rounded-full transition-all duration-300 ${
            isActuallyPlaying
              ? 'bg-secondary animate-eq-3'
              : 'h-1.5 bg-outline/40'
          }`}
        />
        <span
          className={`w-[2.5px] rounded-full transition-all duration-300 ${
            isActuallyPlaying
              ? 'bg-secondary animate-eq-4'
              : 'h-2 bg-outline/40'
          }`}
        />
      </button>

      {/* Track Label and State */}
      <div className="flex items-center gap-1.5 font-mono text-[11px] tracking-wider">
        <span className="hidden sm:inline text-on-surface-variant/90 uppercase font-semibold">
          OST:
        </span>
        <span
          className="text-on-surface truncate max-w-[85px] sm:max-w-[120px] cursor-pointer hover:text-secondary transition-colors"
          onClick={handleTogglePlay}
          title="soundtrack: noname.mp3"
        >
          {currentTrack}
        </span>
        <span
          className={`hidden md:inline px-1 py-0.2 text-[9px] rounded font-bold uppercase tracking-widest ${
            isActuallyPlaying
              ? 'bg-secondary/20 text-on-secondary-container border border-secondary/30'
              : isMuted
              ? 'bg-surface-container text-outline/70 border border-outline-variant/30'
              : 'bg-surface-container text-on-surface-variant/70 border border-outline-variant/30'
          }`}
        >
          {isActuallyPlaying ? 'LIVE' : isMuted ? 'MUTED' : 'PAUSED'}
        </span>
      </div>

      {/* Play/Pause Button */}
      <button
        type="button"
        onClick={handleTogglePlay}
        aria-label={isActuallyPlaying ? 'Pause Music' : 'Play Music'}
        className="w-5 h-5 flex items-center justify-center rounded-full hover:bg-surface-bright text-on-surface hover:text-secondary transition-colors cursor-pointer focus:outline-none"
        title={isActuallyPlaying ? 'Pause (noname.mp3)' : 'Play (noname.mp3)'}
      >
        <span className="material-symbols-outlined text-[15px]">
          {isActuallyPlaying ? 'pause' : 'play_arrow'}
        </span>
      </button>

      {/* Volume / Mute Button */}
      <button
        type="button"
        onClick={handleToggleMute}
        aria-label={isMuted ? 'Unmute Sound' : 'Mute Sound'}
        className="w-5 h-5 flex items-center justify-center rounded-full hover:bg-surface-bright text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer focus:outline-none"
        title={isMuted ? 'Turn Sound On' : 'Mute All Audio'}
      >
        <span className="material-symbols-outlined text-[15px]">
          {isMuted ? 'volume_off' : musicVolume < 0.3 ? 'volume_down' : 'volume_up'}
        </span>
      </button>

      {/* Interactive Volume Slider Flyout (on hover or click) */}
      {showVolumeSlider && (
        <div className="absolute top-full mt-1.5 right-0 z-50 py-2 px-3 bg-surface-container-high/95 backdrop-blur-xl border border-outline-variant/60 rounded-xl shadow-2xl flex items-center gap-2.5 animate-fadeIn min-w-[150px]">
          <span className="material-symbols-outlined text-[14px] text-outline">
            {musicVolume === 0 || isMuted ? 'volume_off' : 'volume_down'}
          </span>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={isMuted ? 0 : musicVolume}
            onChange={handleVolumeChange}
            aria-label="Soundtrack Volume"
            className="w-20 h-1 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-secondary"
          />
          <span className="font-mono text-[10px] text-on-surface-variant min-w-[28px] text-right">
            {isMuted ? '0%' : `${Math.round(musicVolume * 100)}%`}
          </span>
        </div>
      )}
    </div>
  );
};

export default MusicPlayer;
