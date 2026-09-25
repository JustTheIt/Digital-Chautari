import React from "react";
import { Package, Users, Award, ShieldCheck, Zap } from "lucide-react";

export interface StatItemData {
  icon?: React.ReactNode;
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
      icon: <Package size={22} />,
      chipClass: "chip-teal",
    },
    {
      number: "6+",
      label: "Team Members in KTM",
      icon: <Users size={22} />,
      chipClass: "chip-mint",
    },
    {
      number: "100%",
      label: "Client Commitment",
      icon: <Award size={22} />,
      chipClass: "chip-gold",
    },
  ],
}: StatBarProps) {
  return (
    <div
      className="stat-bar"
      style={{
        width: "100%",
        maxWidth: "920px",
        gridTemplateColumns: `repeat(${stats.length}, 1fr)`,
      }}
    >
      {stats.map((item, index) => (
        <div key={index} className="stat-item">
          <div className={`icon-chip ${item.chipClass || "chip-teal"}`}>
            {item.icon}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span className="stat-number">{item.number}</span>
            <span className="stat-label">{item.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
