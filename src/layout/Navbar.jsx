import { Menu, X } from "lucide-react";
import { Button } from "@/components/Button";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const Navbar = () =>{
    const { t } = useTranslation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const navLinks = [
        {href: "#about", label: t("nav.about")},
        {href: "#projects", label: t("nav.projects")},
        {href: "#experience", label: t("nav.experience")},
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return( 
    <header className={`fixed top-0 left-0 right-0 transition-all duration-500 ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5" } z-50`}>
        <nav className="container mx-auto px-6 flex items-center justify-between">
            <a href="#" className="text-xl font-bold tracking-tight hover:text-primary">
                SR<span className="text-primary">.</span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
                <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                    {navLinks.map((link, index) =>(
                        <a href={link.href} key={index} className="cursor-pointer px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface">
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-3">
                <LanguageSwitcher />
                <Button className="cursor-pointer" size="sm" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>{t("nav.contactCta")}</Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-foreground cursor-pointer" onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
                {isMobileMenuOpen ? <X size={24}/> : <Menu size={24}/>}
            </button>
        </nav>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
            <div className="md:hidden glass-strong animate-fade-in">
                <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                    {navLinks.map((link, index) =>(
                        <a 
                            href={link.href} 
                            key={index}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-lg text-muted-foreground hover:text-foreground py-2"
                        >
                            {link.label}
                        </a>
                    ))}
                    <Button onClick={() => {
                        setIsMobileMenuOpen(false);
                        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                    }}>{t("nav.contactCta")}</Button>
                    <LanguageSwitcher />
                </div>
            </div>
        )}
    </header>
    )
}