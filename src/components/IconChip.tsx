import React from "react";
import type { ChipColor } from "@/components/Card";

interface IconChipProps {
  icon: string;
  chipColor?: ChipColor;
  chipClass?: string;
  size?: number;
  style?: React.CSSProperties;
}

export default function IconChip({
  icon,
  chipColor = "mint",
  chipClass,
  size = 44,
  style,
}: IconChipProps) {
  const chipClassName = chipClass ?? `chip-${chipColor}`;

  return (
    <div
      className={`icon-chip ${chipClassName}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        fontSize: size >= 44 ? "1.25rem" : "1.05rem",
        ...style,
      }}
      aria-hidden="true"
    >
      {icon}
    </div>
  );
}
