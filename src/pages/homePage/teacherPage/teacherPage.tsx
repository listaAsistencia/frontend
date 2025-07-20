import { GeneralLayOut } from "../../../components/layout/generalLayout";
import { ProfileCard } from "../../../components/cards/profileCard";
import { ManageStudentsCard } from "./components/manageStudentsCard";
import { PassAttendanceCard } from "./components/AttendanceCard";

export const TeacherPage: React.FC = () => {
    return (
        <GeneralLayOut>
            <div className="flex flex-col flex-wrap md:grid grid-cols-5 grid-rows-4 gap-4 md:p-6">
                <div className="col-span-2 row-span-4">
                    <ProfileCard/>
                </div>
                <div className="col-span-3 row-span-2 col-start-3">
                    <ManageStudentsCard/>
                </div>
                <div className="col-span-3 row-span-2 col-start-3 row-start-3">
                    <PassAttendanceCard/>
                </div>
            </div>
        </GeneralLayOut>
    );
}