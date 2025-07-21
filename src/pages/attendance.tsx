import { GeneralLayOut } from "../components/layout/generalLayout";
import {useForm} from "react-hook-form"
import { AttendaceProps, mockNames } from "./mock";
import { Link } from "react-router-dom";

interface AttendanceFormProps {
    date: string,
    students: AttendaceProps[];
}

export const AttendancePage: React.FC = () => {
    const { register, handleSubmit } = useForm<AttendanceFormProps>({
    defaultValues: {
        students: mockNames,
    }
    });

    //obtener y formatear fecha para enviar a bd
    const getTodayISOString = (): string => {
    return new Date().toISOString();
    };

    const date = getTodayISOString();

    const onSubmit = (data) => {
        return console.log(data);
    }
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
                    {/* Fecha */}
                    <div className="flex flex-row justify-between">
                        <label htmlFor="fecha" className="text-sm mb-1">
                            Fecha:
                        </label>
                        <p className="text-sm">{date.split("T")[0]}</p>
                        <input
                            type="date"
                            id="fecha"
                            className="hidden"
                            defaultValue={date}
                            {...register("date")}

                        />
                    </div>

                    <div className="space-y-3 max-h-64 overflow-y-auto pr-1">
                        {mockNames.map((student, index) => (
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
                    className="w-full bg-primary text-white py-2 rounded-xl text-sm font-medium hover:bg-secondary hover:text-black transition-colors duration-300 ease-in-out">
                        Guardar asistencia
                    </button>
                    
                    <Link to={"/home"}>
                        <button 
                        type="submit" 
                        className="w-full bg-secondary text-black py-2 rounded-xl text-sm font-medium border-1 border-secondary hover:bg-white hover:border hover:border-black hover:text-black transition-colors duration-300 ease-in-out">
                            regresar
                        </button>
                    </Link>
                </form>
            </div>
        </div>
        </GeneralLayOut>
    );
}