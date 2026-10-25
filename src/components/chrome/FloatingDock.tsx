import React from 'react';

export interface DockScene {
  id: string;
  label: string;
  path: string;
}

export const DOCK_SCENES: DockScene[] = [
  { id: 'scene-01-darkness', label: '01 DARK', path: '#scene-01-darkness' },
  { id: 'scene-02-newspaper-wanted', label: '02 WANTED', path: '#scene-02-newspaper-wanted' },
  { id: 'scene-03-case-file-dossier', label: '03 DOSSIER', path: '#scene-03-case-file-dossier' },
  { id: 'scene-04-engineering-evidence', label: '04 EVIDENCE', path: '#scene-04-engineering-evidence' },
  { id: 'scene-05-capabilities', label: '05 MATRIX', path: '#scene-05-capabilities' },
  { id: 'scene-06-case-history', label: '06 HISTORY', path: '#scene-06-case-history' },
  { id: 'scene-07-dossier-contact', label: '07 CONTACT', path: '#scene-07-dossier-contact' },
];

interface FloatingDockProps {
  activeSceneId: string;
  onSelectScene: (sceneId: string) => void;
}

export const FloatingDock: React.FC<FloatingDockProps> = ({ activeSceneId, onSelectScene }) => {
  return (
    <aside
      className="fixed bottom-space-lg left-1/2 -translate-x-1/2 z-40 max-w-fit px-space-md py-space-xs bg-surface-container/90 backdrop-blur-xl rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.8)] border border-outline-variant/30 select-none"
      role="navigation"
      aria-label="Scene navigation"
    >
      <nav className="flex items-center gap-space-xs">
        {DOCK_SCENES.map((scene) => {
          const isActive = activeSceneId === scene.id;
          return (
            <a
              key={scene.id}
              href={scene.path}
              data-path={scene.id}
              aria-current={isActive ? 'page' : undefined}
              onClick={(e) => {
                e.preventDefault();
                onSelectScene(scene.id);
              }}
              className={
                isActive
                  ? 'px-space-sm py-space-xs rounded-full transition-all bg-primary text-on-primary font-bold font-label-sm text-label-sm cursor-pointer'
                  : 'px-space-sm py-space-xs rounded-full font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface transition-all cursor-pointer'
              }
            >
              {scene.label}
            </a>
          );
        })}
      </nav>
    </aside>
  );
};

export default FloatingDock;
