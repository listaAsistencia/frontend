interface RadialProgressProps {
  value: number;           // porcentaje (0 a 100)
  size?: number;           // tamaño en px (default 120)
  strokeWidth?: number;    // grosor del círculo (default 12)
  passMark?: number;       // porcentaje para aprobar (default 75)
  className?: string;
}

export const RadialProgress: React.FC<RadialProgressProps> = ({
  value,
  size = 120,
  strokeWidth = 12,
  passMark = 75,
  className,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;
  const faltante = Math.max(passMark - value, 0);

  const textoFaltante =
    faltante > 0
      ? `Necesitas ${faltante.toFixed(1)}% para aprobar`
      : '¡Aprobado!';

  const strokeColor = value >= passMark ? '#14346D' : '#facc15'; // verde o amarillo

  return (
    <div
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={`Progreso: ${value}%. ${textoFaltante}`}
      className={`flex flex-col items-center justify-center ${className ?? ''}`}
    >
      <svg width={size} height={size}>
        <circle
          stroke="#e5e7eb"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          stroke={strokeColor}
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          r={radius}
          cx={size / 2}
          cy={size / 2}
          style={{ transition: 'stroke-dashoffset 0.35s ease' }}
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="central"
          textAnchor="middle"
          fontSize={size * 0.25}
          fill="#14346D"
          fontWeight="bold"
        >
          {`${value}%`}
        </text>
      </svg>

      <p
        className="mt-2 text-center font-semibold text-titles"
        style={{ fontSize: size * 0.13, maxWidth: size + 40 }}
      >
        {textoFaltante}
      </p>
    </div>
  );
};
