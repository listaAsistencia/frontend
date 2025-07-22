import { GeneralLayOut } from "../../../components/layout/generalLayout";
import { ProfileCard } from "../../../components/cards/profileCard";
import { SettingsCard } from "./components/settingsCard";
import { PassAttendanceCard } from "./components/AttendanceCard";

export const TeacherPage: React.FC = () => {
    return (
        <GeneralLayOut>
            <div className="min-h-[80vh] w-full flex flex-col items-center lg:flex-row flex-wrap justify-between gap-4 p-6 sm:p-3">
                <div className="w-full sm:w-[60%] lg:w-[30%] h-[400px]">
                    <ProfileCard />
                </div>
                <div className="w-full sm:w-[60%] lg:w-[30%] h-[400px]">
                    <SettingsCard />
                </div>
                <div className="w-full sm:w-[60%] lg:w-[30%] h-[400px]">
                    <PassAttendanceCard />
                </div>
            </div>
        </GeneralLayOut>
    );
};
