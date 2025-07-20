import { StudentPage } from "./studentPage/studentPage";
import { TeacherPage } from "./teacherPage/teacherPage";
type HomePageProps = { isStudent: boolean }

export const HomePage: React.FC = () => {
    let isStudent = false;
    return(
        <>
            {isStudent ? <StudentPage/> : <TeacherPage/>}
        </>
    );
}