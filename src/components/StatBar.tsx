import React from "react";

export interface StatItemData {
  number: string;
  label: string;
  chipClass?: "chip-mint" | "chip-teal" | "chip-gold" | "chip-lilac" | "chip-pink";
}

interface StatBarProps {
  stats?: StatItemData[];
}

export default function StatBar({
  stats = [
    {
      number: "3",
      label: "Ventures & Products",
    },
    {
      number: "6+",
      label: "Team Members in KTM",
    },
    {
      number: "100%",
      label: "Client Commitment",
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
      {stats.map((item, index) => (
        <div key={index} className="stat-item">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span className="stat-number">{item.number}</span>
            <span className="stat-label">{item.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
