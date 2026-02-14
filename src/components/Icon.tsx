"use client"; // VERY IMPORTANT

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

// Export all icons as client-ready components
export const Icons = {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
};

// Optional: A helper component for dynamic icon rendering
// export function Icon({ name, ...props }: { name: keyof typeof Icons } & React.SVGProps<SVGSVGElement>) {
//   const IconComponent = Icons[name];
//   return <IconComponent {...props} />;
// }
