// ColorModeContext.tsx
import React, { createContext, useContext, useState } from 'react';

type ColorMode = 'light' | 'dark';

export type ColorModeContextType = {
    colorMode: ColorMode;
    toggleColorMode: () => void;
  };
  

const ColorModeContext = createContext<ColorModeContextType | undefined>(undefined);

export const ColorModeProvider: React.FC = ({ children }) => {
  const [colorMode, setColorMode] = useState<ColorMode>('light');

  const toggleColorMode = () => {
    setColorMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ColorModeContext.Provider value={{ colorMode, toggleColorMode }}>
      {children}
    </ColorModeContext.Provider>
  );
};



export const useColorMode = () => {
  const context = useContext(ColorModeContext);
  if (context === undefined) {
    //throw new Error('useColorMode must be used within a ColorModeProvider');
  }
  return context;
};
