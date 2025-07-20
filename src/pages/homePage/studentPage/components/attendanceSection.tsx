import { GeneralButton } from "../../../../components/buttons/generalButton";

export const AttendanceSection: React.FC = () => {
    const viewAbsensesReport = () => console.log("*Muestra reporte de inasistencias*");
    return (
        <div className="p-4 md:p-1 h-full flex flex-row w-full justify-around items-center">
            <p className="font-semibold text-base md:text-xl">Tienes: 21 asistencias</p>
            <GeneralButton text="Ver reporte de inasistencias" handleClick={viewAbsensesReport} hoverBgWhite={false} />
        </div>
    );
}