import React from "react";
import IconChip from "@/components/IconChip";
import { getIconForStatLabel } from "@/lib/sectionIcons";

export interface StatItemData {
  number: string;
  label: string;
  icon?: string;
  chipClass?: "chip-mint" | "chip-teal" | "chip-gold" | "chip-lilac" | "chip-pink";
}

const defaultStatChips: StatItemData["chipClass"][] = [
  "chip-mint",
  "chip-teal",
  "chip-gold",
];

interface StatBarProps {
  stats?: StatItemData[];
}

export default function StatBar({
  stats = [
    {
      number: "3",
      label: "Products",
    },
    {
      number: "6+",
      label: "Team Members",
    },
    {
      number: "100%",
      label: "Commitment",
    },
  ],
}: StatBarProps) {
  return (
    <div
      className="stat-bar"
      style={{
        width: "100%",
        maxWidth: "100%",
        gridTemplateColumns: `repeat(${stats.length}, 1fr)`,
      }}
    >
      {stats.map((item, index) => {
        const chipClass = item.chipClass ?? defaultStatChips[index % defaultStatChips.length];
        const icon = item.icon ?? getIconForStatLabel(item.label);

        return (
          <div key={index} className="stat-item">
            <IconChip icon={icon} chipClass={chipClass} />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span className="stat-number">{item.number}</span>
              <span className="stat-label">{item.label}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
