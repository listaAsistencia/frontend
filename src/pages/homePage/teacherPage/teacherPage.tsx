import { GeneralLayOut } from "../../../components/layout/generalLayout";
import { ProfileCard } from "../../../components/cards/profileCard";
import { ManageStudentsCard } from "./components/manageStudentsCard";
import { PassAttendanceCard } from "./components/AttendanceCard";

export const TeacherPage: React.FC = () => {
    return (
        <GeneralLayOut>
            <div className="min-h-[80vh] w-full flex flex-col justify-center items-center lg:flex-row flex-wrap justify-between gap-4 p-6 sm:p-3">
                <div className="w-full sm:w-[60%] lg:w-[30%]">
                    <ProfileCard/>
                </div>
                <div className="w-full sm:w-[60%] lg:w-[30%]">
                    <ManageStudentsCard/>
                </div>
                <div className="w-full sm:w-[60%] lg:w-[30%]">
                    <PassAttendanceCard/>
                </div>
            </div>
        </GeneralLayOut>
    );
}