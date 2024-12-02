import { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

// Define el tipo del contexto
interface BackgroundContextType {
  background: string;
  setBackground: Dispatch<SetStateAction<string>>;
}

// Valor inicial del contexto
const BackgroundContext = createContext<BackgroundContextType>({
  background: "light", // Valor predeterminado
  setBackground: () => {}, // Función vacía como placeholder
});

// Define el tipo de las props del provider
interface BackgroundProviderProps {
  children: ReactNode;
}

 function BackgroundProviderWrapper({ children }: BackgroundProviderProps) {
  const [background, setBackground] = useState<string>("light");

  return (
    <BackgroundContext.Provider value={{ background, setBackground }}>
      {children}
    </BackgroundContext.Provider>
  );
} 

 
  

export { BackgroundContext, BackgroundProviderWrapper };
