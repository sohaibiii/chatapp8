import React from "react";

export const GiphyIcon = ({ title }: { title: string }) => (
  <svg viewBox="0 0 140 180" height="18">
    <title>{title}</title>
    <defs>
      <style>
        {
          ".cls-1{fill:#0f9;}.cls-1,.cls-2,.cls-3,.cls-4,.cls-5,.cls-6{fill-rule:evenodd;}.cls-2{fill:#93f;}.cls-3{fill:#fff35c;}.cls-4{opacity:0.4;}.cls-5{fill:#0cf;}.cls-6{fill:#f66;}"
        }
      </style>
    </defs>
    <polygon
      className="cls-1"
      points="0 7 0 29.19 0 52.05 0 74.91 0 97.76 0 120.62 0 143.48 0 167 20 167 20 143.48 20 120.62 20 97.76 20 74.91 20 52.05 20 29.19 20 7 0 7"
    />
    <polygon
      className="cls-2"
      points="120 47 120 70.33 120 94.33 120 118.33 120 142.33 120 167 140 167 140 142.33 140 118.33 140 94.33 140 70.33 140 47 120 47"
    />
    <polygon
      className="cls-3"
      points="67.5 0 45 0 22.5 0 0 0 0 20 22.5 20 45 20 67.5 20 87 20 87 0 67.5 0"
    />
    <polygon className="cls-4" points="60 20 90 20 80 0 60 20" />
    <polygon className="cls-4" points="140 60 120 50 120 80 140 60" />
    <polygon
      className="cls-5"
      points="120 160 100 160 80 160 60 160 40 160 20 160 0 160 0 180 20 180 40 180 60 180 80 180 100 180 120 180 140 180 140 160 120 160"
    />
    <polygon
      className="cls-6"
      points="120 40 120 20 100 20 100 0 80 0 80 16.33 80 36.33 80 60 100 60 120 60 140 60 140 40 120 40"
    />
  </svg>
);
