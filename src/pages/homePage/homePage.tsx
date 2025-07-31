import { StudentPage } from "./studentPage/studentPage";
import { TeacherPage } from "./teacherPage/teacherPage";

export const HomePage: React.FC = () => {
    const userRole =localStorage.getItem('userRole');
    return(
        <>
            {userRole === 'estudiante'?<StudentPage/> : <TeacherPage/>}
        </>
    );
}