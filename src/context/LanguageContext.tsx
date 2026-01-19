import React, { createContext, useContext, useState, useCallback, useMemo, type ReactNode } from 'react';
import { en } from '../translations/en.ts';
import { it } from '../translations/it.ts';

type Language = 'IT' | 'EN';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, any> = { EN: en, IT: it };

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>('IT');

  const setLang = useCallback((newLang: Language) => {
    setLangState(newLang);
  }, []);

  const t = useCallback((path: string) => {
    const value = path.split('.').reduce((obj, key) => obj?.[key], translations[lang]);
    return value !== undefined ? value : path;
  }, [lang]);

  const contextValue = useMemo(() => ({
    lang,
    setLang,
    t
  }), [lang, setLang, t]);

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useTranslation must be used within a LanguageProvider");
  return context;
};
