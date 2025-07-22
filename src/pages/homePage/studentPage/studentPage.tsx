import { GeneralLayOut } from "../../../components/layout/generalLayout";
import { AttendanceSection } from "./components/attendanceSection";
import { ProfileCard } from "../../../components/cards/profileCard";
import { TutorCard } from "./components/tutorCard";
import { AttendanceProgress } from "./components/attendanceProgess";
import { AttendanceReport } from "../../attendanceReport";
import { useShowReport } from "../../../store/useShowAttendanceReport";
import { absences } from "../mocks/absences";

export const StudentPage: React.FC = () => {
  const viewReport = useShowReport((state) => state.showAttendanceReport);
  return (
    <GeneralLayOut>
      <div className="flex items-center justify-center min-h-[80vh] w-full p-2">
        <div className="grid md:grid-cols-3 gap-4 w-full max-w-[1280px] h-full">
          {/* Columna izquierda */}
          <div className="h-full flex flex-col">
            <div className="flex-1 flex justify-center items-center">
              <ProfileCard />
            </div>
          </div>

          {/* Columna derecha */}
          <div className="md:col-span-2 flex flex-col gap-4 h-full">
            {/* Contenedor principal */}
            <div className="w-full flex flex-col justify-center items-center gap-5 rounded-lg p-4 border-2 border-gray-200 shadow-inner h-[290px] sm:h-[320px] md:h-[400px] max-h-[475px] overflow-hidden sm:overflow-auto">
              <p className="text-titles text-2xl font-bold w-full text-center">
                {!viewReport && "Tu progreso en este curso"}
              </p>

              {viewReport ? (
                <AttendanceReport attendedDays={21} absences={absences} />
              ) : (
                <AttendanceProgress value={80} size={180} strokeWidth={16} />
              )}
            </div>

            {/* opciones */}
            <div className="w-full flex flex-col md:flex-row justify-center items-center md:items-stretch gap-4">
              <div className="w-full md:w-1/2 rounded-lg border-2 border-gray-200 shadow-inner p-2 flex justify-center items-center">
                <TutorCard />
              </div>
              <div className="w-full md:w-1/2 rounded-lg border-2 border-gray-200 shadow-inner p-2 flex justify-center items-center">
                <AttendanceSection />
              </div>
            </div>
          </div>
        </div>
      </div>
    </GeneralLayOut>
  );
};
