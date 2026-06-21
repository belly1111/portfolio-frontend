function Divider() {
  const dots = [
    { cx: 60,  cy: 18, r: 2,   color: "#8b5cf6" },
    { cx: 140, cy: 10, r: 1.5, color: "#475569" },
    { cx: 210, cy: 22, r: 2,   color: "#3b82f6" },
    { cx: 300, cy: 12, r: 3,   color: "#8b5cf6" },
    { cx: 380, cy: 20, r: 1.5, color: "#475569" },
    { cx: 460, cy: 10, r: 2,   color: "#3b82f6" },
    { cx: 540, cy: 22, r: 2,   color: "#8b5cf6" },
    { cx: 620, cy: 14, r: 1.5, color: "#475569" },
  ];

  return (
    <div className="divider-wrapper">
      <svg
        viewBox="0 0 680 32"
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
        className="constellation-divider"
      >
        {/* الخطوط بين النقاط */}
        {dots.slice(0, -1).map((dot, i) => (
          <line
            key={i}
            x1={dot.cx} y1={dot.cy}
            x2={dots[i + 1].cx} y2={dots[i + 1].cy}
            stroke="#1e293b"
            strokeWidth="0.8"
          />
        ))}

        {/* النقاط */}
        {dots.map((dot, i) => (
          <g key={i}>
            {/* glow خلفي */}
            <circle
              cx={dot.cx} cy={dot.cy}
              r={dot.r + 3}
              fill={dot.color}
              opacity="0.15"
            />
            {/* النقطة نفسها */}
            <circle
              cx={dot.cx} cy={dot.cy}
              r={dot.r}
              fill={dot.color}
              className="constellation-dot"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}

export default Divider;
