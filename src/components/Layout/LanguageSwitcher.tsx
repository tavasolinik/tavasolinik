import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { i18n, t } = useTranslation();

  const languages = [
    { code: 'fa', name: 'فارسی', dir: 'rtl' },
    { code: 'en', name: 'English', dir: 'ltr' },
  ];

  const changeLanguage = (langCode: string) => {
    const selectedLang = languages.find(lang => lang.code === langCode);
    
    if (selectedLang) {
      i18n.changeLanguage(langCode);
      document.documentElement.dir = selectedLang.dir;
      document.documentElement.lang = langCode;
      localStorage.setItem('language', langCode);
    }
  };

  return (
    <div className="relative group">
      <button className="flex items-center p-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-colors">
        <Globe className="w-5 h-5 ml-2" />
        <span className="text-sm font-medium">
          {languages.find(lang => lang.code === i18n.language)?.name || 'فارسی'}
        </span>
      </button>
      
      <div className="absolute left-0 mt-2 w-40 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="py-1">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => changeLanguage(language.code)}
              className={`w-full text-right px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${
                i18n.language === language.code ? 'bg-primary-50 text-primary-600' : 'text-gray-700'
              }`}
            >
              {language.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcher;