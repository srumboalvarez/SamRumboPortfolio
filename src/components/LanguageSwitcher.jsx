import { useTranslation } from "react-i18next";

const languages = [
    { code: "es", label: "ES" },
    { code: "ca", label: "CA" },
    { code: "en", label: "EN" },
    { code: "de", label: "DE" },
];

export const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    return (
        <div className="flex items-center gap-1 glass rounded-full px-1 py-1">
            {languages.map((lang) => (
                <button
                    key={lang.code}
                    onClick={() => i18n.changeLanguage(lang.code)}
                    className={`px-2 py-1 text-xs rounded-full transition-colors cursor-pointer ${
                        i18n.resolvedLanguage === lang.code
                            ? "bg-primary text-primary-foreground"
                            : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                    {lang.label}
                </button>
            ))}
        </div>
    );
};
