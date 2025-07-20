import { GeneralLayOut } from "../../../components/layout/generalLayout";
import { AttendanceSection } from "./components/attendanceSection";
import { ProfileCard } from "../../../components/cards/profileCard";
import { TutorCard } from "./components/tutorCard";
import { AttendanceProgress } from "./components/attendanceProgess";

export const StudentPage: React.FC = () => {
    return (
        <GeneralLayOut>
            <div className="p-2 min-h-[80vh] w-full grid md:grid-cols-3 md:grid-rows-1 gap-4">
                {/* Columna izquierda (perfil + tutor) - Ocupa toda la altura */}
                <div className="md:row-span-1 h-full flex flex-col gap-5 justify-center">
                    <div className="flex-1 max-h-[80%]">
                        <ProfileCard />
                    </div>
                    <div className="h-24">
                        <TutorCard />
                    </div>
                </div>

                {/* Contenedor derecho (agrupa progreso + asistencias) */}
                <div className="md:col-span-2 h-full flex flex-col justify-center gap-4">
                    {/* Sección de progreso */}
                    <div className="flex-[2] flex flex-col justify-center items-center gap-5 rounded-lg p-4 border-2 border-gray-200 shadow-inner">
                        <p className="text-titles text-2xl font-bold w-full text-center">
                            Tu progreso en este curso
                        </p>
                        <AttendanceProgress value={80} size={180} strokeWidth={16} />
                    </div>

                    {/* Sección de asistencias */}
                    <div className="flex-1 rounded-lg border-2 border-gray-200 shadow-inner">
                        <AttendanceSection />
                    </div>
                </div>
            </div>
        </GeneralLayOut>
    );
};


