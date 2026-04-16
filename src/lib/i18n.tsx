import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

type Lang = "es" | "en";

interface I18nContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (es: string, en: string) => string;
}

const I18nContext = createContext<I18nContextType>({
  lang: "es",
  toggleLang: () => {},
  t: (es) => es,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");
  const toggleLang = useCallback(() => setLang((l) => (l === "es" ? "en" : "es")), []);
  const t = useCallback((es: string, en: string) => (lang === "es" ? es : en), [lang]);

  return (
    <I18nContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export const useI18n = () => useContext(I18nContext);
