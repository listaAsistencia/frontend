import { GeneralLayOut } from "../components/layout/generalLayout";
import { useUsers } from "../hooks/users";
import { Link, useNavigate } from "react-router-dom";
import { showErrorNotification, showSuccessNotification } from "../utils/notifications/toasts";
import { patchRequest } from "../utils/requests/patch";
import { useState } from "react";

const ConfirmModal = ({ open, onClose, student }) => {
    const navigate = useNavigate();

    if (!open) return null;

    const onSubmit = async (selectedStudent) => {
        try {
            await patchRequest({ route: `/auth/suspend/${selectedStudent.id}` });
            navigate("/home");
            showSuccessNotification("Estudiante suspendido exitosamente");
        } catch (error) {
            console.error(error);
            showErrorNotification("Hubo un error al suspender al estudiante");
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-gray-100 rounded-2xl shadow-lg p-6 max-w-sm w-full animate-fade-in">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Confirmar suspensión
                </h3>
                <p className="text-sm text-gray-600 mb-6">
                    ¿Estás seguro de que quieres suspender a{" "}
                    <span className="font-medium">{student?.name}</span>?
                </p>

                <div className="flex justify-end gap-3">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 text-sm rounded-xl bg-gray-200 hover:bg-gray-300 transition"
                    >
                        Cancelar
                    </button>
                    <button
                        onClick={() => {
                            onSubmit(student);
                            onClose();
                        }}
                        className="px-4 py-2 text-sm rounded-xl bg-red-500 text-white hover:bg-red-600 transition"
                    >
                        Suspender
                    </button>
                </div>
            </div>
        </div>
    );
}

export const ManageStudents: React.FC = () => {

    const [selectedStudent, setSelectedStudent] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);


    const { users, loading, error } = useUsers();

    const getTodayISOString = (): string => {
        return new Date().toISOString().split("T")[0];
    };

    const date = getTodayISOString();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;


    return (
        <GeneralLayOut>
            <div className="flex items-center justify-center min-h-[80vh] bg-gray-100">
                <div className="max-w-md w-full p-6 bg-white rounded-2xl shadow-md mx-auto">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                        Lista de Asistencia
                    </h2>

                    <div
                        className="flex flex-col gap-3"
                    >
                        <div className="flex flex-row justify-between">
                            <label htmlFor="fecha" className="text-sm mb-1">
                                Fecha:
                            </label>
                            <p className="text-sm">{date}</p>
                        </div>

                        <div className="space-y-3 max-h-64 overflow-y-auto pr-1">
                            {users.map((student, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-between rounded-xl px-3 py-2 bg-gray-50 min-h-[2.5rem]"
                                >
                                    <input
                                        type="hidden"
                                        defaultValue={student.id}
                                    />
                                    <input
                                        type="text"
                                        defaultValue={student.name}
                                        readOnly
                                        className="bg-transparent border-none outline-none text-sm font-medium"
                                    />

                                    <button
                                        type="button"
                                        onClick={() => {
                                            setSelectedStudent(student);
                                            setModalOpen(true);
                                        }}
                                        className="px-3 py-1 text-xs font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 transition"
                                    >
                                        Suspender
                                    </button>
                                </div>
                            ))}
                        </div>

                        <Link to={"/home"}>
                            <button
                                type="button"
                                className="w-full text-white bg-primary py-2 rounded-xl text-sm font-medium border-1 border-primary hover:bg-white hover:text-black hover:border hover:border-black transition-colors duration-300 ease-in-out"
                            >
                                Regresar
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <ConfirmModal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                student={selectedStudent}
            />
        </GeneralLayOut>

    );
};