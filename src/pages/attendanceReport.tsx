type Absence = {
    id: number;
    date: string;
};

type AbsenceReportProps = {
    attendedDays: number;
    absences: Absence[];
};

export const AttendanceReport: React.FC<AbsenceReportProps> = ({
    attendedDays,
    absences,
}) => {
    return (
        <div className="w-full h-full p-1 sm:p-6 flex flex-col gap-3">
            <div className="text-center">
                <h2 className="text-md md:text-2xl font-bold text-titles">
                    Reporte de Asistencias
                </h2>
            </div>

            <div className="flex justify-around text-center border-b p-1">
                <div>
                    <p className="text-md md:text-xl font-semibold">{attendedDays}</p>
                    <p className="text-gray-600 text-sm md:text-md">Días asistidos</p>
                </div>
                <div>
                    <p className="text-md md:text-xl font-semibold">{absences.length}</p>
                    <p className="text-gray-600 text-sm md:text-md">Ausencias</p>
                </div>
                <div>
                    <p className="text-md md:text-xl font-semibold">{33 - attendedDays}</p>
                    <p className="text-gray-600 text-sm md:text-md">Días necesarios</p>
                </div>
            </div>

            {/* Lista de ausencias con scroll interno */}
            <div className="flex flex-col gap-1 flex-grow overflow-hidden">
                <div className="text-center">
                    <h2 className="text-md md:text-lg font-bold text-titles">
                        Fechas de ausencia
                    </h2>
                </div>

                <div className="overflow-y-auto pr-2">
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {absences.map((absence) => (
                            <li key={absence.id} className="flex items-center rounded-xl px-3 py-2 bg-gray-50">
                                {absence.date.slice(0, 10)}
                            </li>
                        ))}

                    </ul>
                </div>
            </div>
        </div>
    );
};
