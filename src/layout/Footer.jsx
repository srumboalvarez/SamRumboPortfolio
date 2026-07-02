import { Gitlab, Linkedin, Mail, ArrowUp } from "lucide-react";

const navLinks = [
    { href: "#about", label: "Sobre mí" },
    { href: "#projects", label: "Proyectos" },
    { href: "#experience", label: "Experiencia" },
    { href: "#contact", label: "Contacto" },
];

const socialLinks = [
    { icon: Gitlab, href: "https://gitlab.com/e.srumbo" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/samuelrumbo" },
    { icon: Mail, href: "mailto:srumboalvarez@gmail.com" },
];

export const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="relative border-t border-border/50 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 py-12 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Brand */}
                    <a href="#" className="text-xl font-bold tracking-tight hover:text-primary">
                        SR<span className="text-primary">.</span>
                    </a>

                    {/* Nav Links */}
                    <div className="flex flex-wrap items-center justify-center gap-2">
                        {navLinks.map((link, idx) => (
                            <a
                                key={idx}
                                href={link.href}
                                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map((social, idx) => (
                            <a
                                key={idx}
                                href={social.href}
                                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                            >
                                <social.icon className="w-5 h-5" />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="mt-10 pt-8 border-t border-border/50 flex flex-col-reverse md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-muted-foreground text-center">
                        © {year} Samuel Rumbo. Todos los derechos reservados.
                    </p>

                    <a
                        href="#"
                        className="flex items-center gap-2 p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300 text-sm text-muted-foreground"
                    >
                        Volver arriba <ArrowUp className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </footer>
    );
};
