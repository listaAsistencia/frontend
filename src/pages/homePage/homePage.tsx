import { StudentPage } from "./studentPage/studentPage";
import { TeacherPage } from "./teacherPage/teacherPage";

export const HomePage: React.FC = () => {
    let isStudent = false;
    return(
        <>
            {isStudent ? <StudentPage/> : <TeacherPage/>}
        </>
    );
}