export const Footer = () => {
  return (
    <footer className="bg-primary text-white p-6 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Main sections */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <AboutUs/>
            <Employment/>
            <Projects/>
            <CentralLocation/>
        </div>
        <PolicyAndPrivacy/>
      </div>
    </footer>
  );
};

const AboutUs: React.FC = () => {
    return (
          <div>
            <h2 className="text-lg font-bold mb-4">¿Quiénes somos?</h2>
            <ul className="space-y-2">
              <li>
                <a href="https://fusalmo.org/salesianos/?view=aboutus&about=salesianity" className="hover:underline">Salesianos</a>
              </li>
              <li>
                <a href="https://fusalmo.org/salesianos/?view=aboutus&about=fusalmo" className="hover:underline">Fusalmo</a>
              </li>
              <li>
                <a href="https://fusalmo.org/salesianos/?view=aboutus&about=installation" className="hover:underline">Instalaciones</a>
              </li>
            </ul>
          </div>
    );
}

const Employment: React.FC = () => {
    return (
          <div>
            <h2 className="text-lg font-bold mb-4">Empleo</h2>
            <ul className="space-y-2">
              <li>
                <a href="https://fusalmo.org/salesianos/?view=jobs&jobs=employeebag" className="hover:underline">Bolsa de empleo juvenil</a>
              </li>
              <li>
                <a href="https://fusalmo.org/salesianos/?view=jobs&jobs=fusalmojobs" className="hover:underline">Plazas en FULSAMO</a>
              </li>
              <li>
                <a href="https://fusalmo.org/salesianos/?view=jobs&jobs=consultancies" className="hover:underline">Servicios profesionales</a>
              </li>
            </ul>
          </div>
    );
}

const Projects: React.FC = () => {
    return (
          <div>
            <h2 className="text-lg font-bold mb-4">Programas y proyectos</h2>
            <ul className="space-y-2">
              <li>Programas educativos</li>
              <li>Proyectos tecnológicos</li>
              <li>Formación laboral</li>
            </ul>
          </div>
    );
}

const CentralLocation: React.FC = () => {
    return (
          <div>
            <h2 className="text-lg font-bold mb-2">Sede Central</h2>
            <p className="mb-4">
              Centro Juvenil Salesiano FUSALMO <br/>
              Intersección Carretera a San Miguel y Calle a
              Tonacatepeque despues del paso a desnivel de
              Unicentro Soyapango, San Salvador, El Salvador
            </p>
          </div>
    );
}

const PolicyAndPrivacy: React.FC = () => {
    return(
        <div className="border-t border-secondary-300 pt-6">
          {/* Privacy and copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <p>Política de Privacidad</p>
              <span>|</span>
              <p>Términos y condiciones</p>
            </div>
            <div>
              <p>Copyright © 2022 - 2025</p>
            </div>
          </div>
        </div>
    );
}