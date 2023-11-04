import React from "react";

export default function ProgressCircle({ percent }) {
  const dashHarray = Math.PI * 100;
  const dashOffset = Math.PI * (100 - percent);

  const bar = {
    low: "#db2360",
    medium: "#d2d531",
    high: "#21d07a",
    none: "#d4d4d4",
  };

  const track = {
    low: "#571435",
    medium: "#423d0f",
    high: "#204529",
    none: "#666666",
  };

  const greatColor = (rating) => {
    if (rating >= 70) return "high";
    if (rating >= 40) return "medium";
    if (rating > 0) return "low";
    return "none";
  };

  return (
    <div
      className="w-[38px] h-[38px] m-2 bg-bg_circle_progrss
     rounded-full flex justify-center items-center"
    >
      {/**SVG pour la suivi*/}
      <svg
        width="34px"
        height="34px"
        viewBox="0 0 100 100"
        className="rotate-[-90deg]"
      >
        <circle
          cx="52.5"
          cy="52.5"
          r="50"
          fill="transparent"
          stroke={track[greatColor(percent)]}
          strokeWidth={6}
          strokeDasharray={dashHarray}
          className="scale-[0.95]"
        />

        {/**SVG pour la barre de progression*/}

        <circle
          cx="52.5"
          cy="52.5"
          r="50"
          fill="transparent"
          stroke={bar[greatColor(percent)]}
          strokeWidth={6}
          strokeDasharray={dashHarray}
          strokeDashoffset={dashOffset}
          className="scale-[0.95]"
          strokeLinecap="round"
        />
      </svg>
      <div className="font-semibold absolute text-white">
        {percent ? (
          <div>
            {percent}
            <span className="absolute text-[4px] top-[5px]">%</span>
          </div>
        ) : (
          "MR"
        )}
      </div>
    </div>
  );
}
