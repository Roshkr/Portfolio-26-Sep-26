import React from 'react';
import { Minus, Square, X } from 'lucide-react';

export const WindowControls: React.FC = () => (
  <span className="retro-window-controls" aria-hidden="true">
    <span className="retro-window-control"><Minus /></span>
    <span className="retro-window-control"><Square /></span>
    <span className="retro-window-control"><X /></span>
  </span>
);
