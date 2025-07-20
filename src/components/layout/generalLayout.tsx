import { NavBar } from "./components/navBar";
import { Footer } from "./components/footer";

type PropsGeneralLayout = {
  children?: React.ReactNode;
};

export const GeneralLayOut: React.FC<PropsGeneralLayout> = ({ children }) => {
  return (
    <main className="min-h-screen flex flex-col">
      <NavBar />
      <div className="flex-grow min-h-[80vh]">
        {children}
      </div>
      <Footer />
    </main>
  );
};

