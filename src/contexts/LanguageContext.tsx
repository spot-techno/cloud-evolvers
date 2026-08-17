import { createContext, useContext, useState, useEffect, useCallback, useRef, ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export type Language = 'en' | 'nl';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isLoading: boolean;
  isEnglish: boolean;
  isDutch: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

const STORAGE_KEY = 'app-language';

function isLanguage(value: string | null | undefined): value is Language {
  return value === 'en' || value === 'nl';
}

function languageFromLocation(pathname: string, search: string): Language | null {
  const params = new URLSearchParams(search);
  const queryLang = params.get('lang');
  if (isLanguage(queryLang)) return queryLang;

  const practice = pathname.match(/^\/practice\/(en|nl)(?:\/|$)/);
  if (practice && isLanguage(practice[1])) return practice[1];

  return null;
}

function readInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'en';
  const fromUrl = languageFromLocation(window.location.pathname, window.location.search);
  if (fromUrl) return fromUrl;
  const saved = localStorage.getItem(STORAGE_KEY);
  return isLanguage(saved) ? saved : 'en';
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>(readInitialLanguage);

  const setLanguage = useCallback((newLanguage: Language) => {
    setLanguageState(newLanguage);
    localStorage.setItem(STORAGE_KEY, newLanguage);
    localStorage.setItem('language', newLanguage);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value = {
    language,
    setLanguage,
    isLoading: false,
    isEnglish: language === 'en',
    isDutch: language === 'nl',
  };

  return (
    <LanguageContext.Provider value={value}>
      <LanguageUrlSync />
      {children}
    </LanguageContext.Provider>
  );
}

/**
 * Keeps ?lang=nl shareable, persists the choice across client navigations,
 * and moves /practice/en <-> /practice/nl with the site language.
 */
function desiredLocation(pathname: string, search: string, language: Language) {
  const nextParams = new URLSearchParams(search);
  if (language === 'nl') {
    nextParams.set('lang', 'nl');
  } else if (nextParams.get('lang') === 'nl' || nextParams.get('lang') === 'en') {
    nextParams.delete('lang');
  }

  let nextPath = pathname;
  const practice = pathname.match(/^\/practice\/(en|nl)(\/.*)?$/);
  if (practice && practice[1] !== language) {
    nextPath = `/practice/${language}${practice[2] || ''}`;
  }

  const nextSearch = nextParams.toString();
  return {
    pathname: nextPath,
    search: nextSearch ? `?${nextSearch}` : '',
  };
}

function LanguageUrlSync() {
  const { language, setLanguage } = useLanguageContext();
  const location = useLocation();
  const navigate = useNavigate();
  const prevLanguage = useRef(language);

  useEffect(() => {
    const languageChanged = prevLanguage.current !== language;
    prevLanguage.current = language;

    if (languageChanged) {
      const next = desiredLocation(location.pathname, location.search, language);
      if (next.pathname !== location.pathname || next.search !== (location.search || '')) {
        navigate({ pathname: next.pathname, search: next.search, hash: location.hash }, { replace: true });
      }
      return;
    }

    const fromUrl = languageFromLocation(location.pathname, location.search);
    if (fromUrl && fromUrl !== language) {
      setLanguage(fromUrl);
      return;
    }

    const next = desiredLocation(location.pathname, location.search, language);
    if (next.pathname !== location.pathname || next.search !== (location.search || '')) {
      navigate({ pathname: next.pathname, search: next.search, hash: location.hash }, { replace: true });
    }
  }, [language, location.hash, location.pathname, location.search, navigate, setLanguage]);

  return null;
}

export function useLanguageContext() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguageContext must be used within a LanguageProvider');
  }
  return context;
}
