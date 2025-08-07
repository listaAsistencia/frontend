import { GeneralLayOut } from "../components/layout/generalLayout";
import { useForm } from "react-hook-form";
import { useUsers } from "../hooks/users";
import type { UserProps } from "../hooks/users";
import { Link, useNavigate } from "react-router-dom";
import { showErrorNotification, showSuccessNotification } from "../utils/notifications/toasts";
import { patchRequest } from "../utils/requests/patch";

interface AttendanceFormProps {
    students: UserProps[];
}

export const AttendancePage: React.FC = () => {
    const navigate = useNavigate();
    const { users, loading, error } = useUsers();

    const { register, handleSubmit } = useForm<AttendanceFormProps>({
        defaultValues: {
            students: users || []
        }
    });

    const getTodayISOString = (): string => {
        return new Date().toISOString().split("T")[0];
    };

    const date = getTodayISOString();

    const onSubmit = async (data: AttendanceFormProps) => {
        try {
            await patchRequest({ route: "/attendance", body: data });
            navigate("/home");
            showSuccessNotification("Asistencia guardada exitosamente");
        } catch (error) {
            console.error(error);
            showErrorNotification("Hubo un error al guardar la asistencia");
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <GeneralLayOut>
            <div className="flex items-center justify-center min-h-[80vh] bg-gray-100">
                <div className="max-w-md w-full p-6 bg-white rounded-2xl shadow-md mx-auto">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                        Lista de Asistencia
                    </h2>

                    <form
                        className="flex flex-col gap-3"
                        onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-row justify-between">
                            <label htmlFor="fecha" className="text-sm mb-1">
                                Fecha:
                            </label>
                            <p className="text-sm">{date}</p>
                        </div>

                        <div className="space-y-3 max-h-64 overflow-y-auto pr-1">
                            {users.map((student, index) => (
                                <div
                                    key={student.id}
                                    className="flex items-center justify-between rounded-xl px-3 py-2 bg-gray-50 min-h-[2.5rem]"
                                >
                                    <input
                                        {...register(`students.${index}.id`)}
                                        type="hidden"
                                        defaultValue={student.id}
                                    />
                                    <input
                                        {...register(`students.${index}.name`)}
                                        type="text"
                                        defaultValue={student.name}
                                        readOnly
                                    />
                                    <input
                                        {...register(`students.${index}.isPresent`)}
                                        type="checkbox"
                                        defaultChecked={student.isPresent}
                                        className="w-4 h-4 rounded border border-gray-300 accent-primary"
                                    />
                                </div>
                            ))}
                        </div>

                        <button
                            type="submit"
                            className="w-full text-white bg-primary py-2 rounded-xl text-sm font-medium border-1 border-primary hover:bg-white hover:text-black hover:border hover:border-black transition-colors duration-300 ease-in-out">
                            Guardar asistencia
                        </button>

                        <Link to={"/home"}>
                            <button
                                type="button"
                                className="w-full bg-secondary text-black py-2 rounded-xl text-sm font-medium border-1 border-secondary hover:bg-white hover:border hover:border-black hover:text-black transition-colors duration-300 ease-in-out">
                                Regresar
                            </button>
                        </Link>
                    </form>
                </div>
            </div>
        </GeneralLayOut>
    );
};