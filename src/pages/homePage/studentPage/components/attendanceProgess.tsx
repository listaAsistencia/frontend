interface RadialProgressProps {
  attendedDays: number;
  size?: number;
  strokeWidth?: number;
  passMark?: number;
  className?: string;
}

const NoAttendance: React.FC = () => {
  return (
    <p className="text-titles text-lg font-bold w-full text-center">
      Por el momento no tienes asistencias registradas
    </p>)
}

export const AttendanceProgress: React.FC<RadialProgressProps> = ({
  attendedDays,
  size = 120,
  strokeWidth = 12,
  passMark = 75,
  className,
}) => {
  if (attendedDays === 0 || isNaN(attendedDays)) {
    return <NoAttendance />;
  }

  const totalDays = 33;
  const rawPercentage = (attendedDays / totalDays) * 100;
  const percentage = Math.min(rawPercentage, 100);
  const roundedPercentage = Math.floor(percentage);

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (roundedPercentage / 100) * circumference;

  const missingPercent = Math.max(passMark - roundedPercentage, 0);
  const missingText =
    missingPercent > 0
      ? `Necesitas ${missingPercent}% para aprobar`
      : '¡Aprobado!';

  const strokeColor = roundedPercentage >= passMark ? '#14346D' : '#facc15';

  return (
    <div
      role="progressbar"
      aria-valuenow={roundedPercentage}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={`Progreso: ${roundedPercentage}%. ${missingText}`}
      className={`flex flex-col items-center h-auto justify-center ${className ?? ''}`}
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
          {`${roundedPercentage}%`}
        </text>
      </svg>

      <p
        className="mt-2 text-center font-semibold text-titles text-md sm:text:lg"
        style={{ fontSize: size * 0.13, maxWidth: size + 40 }}
      >
        {missingText}
      </p>
    </div>
    

    
  );
};