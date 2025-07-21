import { GeneralLayOut } from "../components/layout/generalLayout";

export const AttendancePage: React.FC = () => {
    const nombres = ["Lionel Messi", "Bad Bunny", "Cristiano Ronaldo", "J Balvin", "Neymar Jr", "Rosalía", "Kylian Mbappé", "Shakira", "Sergio Ramos", "Maluma", "Luka Modrić", "Ozuna", "Kevin De Bruyne", "Karol G", "Robert Lewandowski", "Daddy Yankee"];

    //formatear fecha para input
    const getTodayISODate = (): string => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
    };

    const date = getTodayISODate();

    return (
        <GeneralLayOut>
        <div className="flex items-center justify-center min-h-[80vh] bg-gray-100">
        <div className="max-w-md w-full p-6 bg-white rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Lista de Asistencia</h2>

            <form className="space-y-6">
            {/* Fecha */}
            <div className="flex flex-row justify-between">
                <label htmlFor="fecha" className="text-sm mb-1">
                    Fecha:
                </label>
                <p className="text-sm">{date}</p>
                <input
                    type="date"
                    id="fecha"
                    name="fecha"
                    className="hidden"
                    defaultValue={date}
                />
            </div>

            {/* Lista de asistencia */}
            <div className="space-y-3 max-h-64 overflow-y-auto pr-1">
                {nombres.map((nombre, index) => (
                    <div
                    key={index}
                    className="flex items-center justify-between rounded-xl px-3 py-2 bg-gray-50 min-h-[2.5rem] transform will-change-transform"
                    >
                    <span className="text-sm">{nombre}</span>
                    <input
                    type="checkbox"
                    name={`asistencia-${index}`}
                    className="w-4 h-4 rounded border border-gray-300 accent-primary"
                    />
                </div>
                ))}
            </div>

            {/* Botón Guardar */}
            <button
                type="submit"
                className="w-full bg-primary text-white py-2 rounded-xl text-sm font-medium hover:bg-secondary hover:text-black transition-colors duration-300 ease-in-out"
            >
                Guardar
            </button>
            </form>
        </div>
        </div>
        </GeneralLayOut>
    );
}