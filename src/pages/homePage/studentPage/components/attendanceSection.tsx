import { GeneralButton } from "../../../../components/buttons/generalButton";
import { useShowReport } from "../../../../store/useShowAttendanceReport";

export const AttendanceSection: React.FC = () => {
    const toggleView = useShowReport((state) => state.toggleView)
    const viewAbsensesReport = () => toggleView();

    return (
        <div className="p-4 md:p-1 h-full flex flex-row w-full justify-center items-center">
            <GeneralButton text="Ver reporte de asistencias" handleClick={viewAbsensesReport} hoverBgWhite={false} />
        </div>
    );
}