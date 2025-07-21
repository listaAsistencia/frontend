import { GeneralLayOut } from "../../../components/layout/generalLayout";
import { ProfileCard } from "../../../components/cards/profileCard";
import { ManageStudentsCard } from "./components/manageStudentsCard";
import { PassAttendanceCard } from "./components/AttendanceCard";

export const TeacherPage: React.FC = () => {
    return (
        <GeneralLayOut>
            <div className="flex flex-col md:grid grid-cols-4 grid-rows-2 gap-4 p-4">
                <div className="col-span-2 row-span-2">
                    <ProfileCard/>
                </div>
                <div className="col-span-2 col-start-3">
                    <ManageStudentsCard/>
                </div>
                <div className="col-span-2 col-start-3 row-start-2">
                    <PassAttendanceCard/>
                </div>
            </div>
        </GeneralLayOut>
    );
}