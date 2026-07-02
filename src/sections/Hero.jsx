import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { Button } from "@/components/Button";
import { ArrowRight, ChevronDown, Gitlab, Linkedin, Download} from "lucide-react";
import bgHero from "@/assets/bg-hero.jpg";
import fotoPerfil from "@/assets/fotoperfil.png";

const dots = [...Array(30)].map(() => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
    animationDelay: `${Math.random() * 5}s`
}));

const skills = [
    "React",
    "Next.js",
    "Laravel",
    "TypeScript",
    "Django",
    "PostgreSQL",
    "MongoDB",
    "Angular",
    ".NET",
    "Spring Boot",
    "HTML / CSS",
    "JavaScript",
    "Tailwind CSS",
    "Bootstrap"
];

export const Hero = () =>{

    return( 
    <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
            <img src={bgHero}
            alt="Hero Image" 
            className="w-full h-full object-cover opacity-40"/>
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background"/>

        {/* Green Dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {dots.map((style, i) => (
                <div
                    key={i}
                    className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                    style={{ backgroundColor: "#20B2A6", ...style }}
                />
            ))}
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Column - Text content*/}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"/>
                            Full Stack Software Developer
                        </span>
                    </div>
                    {/* Headline */}
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animated-delay-100">
                            Creando <span className="text-primary glow-text">soluciones digitales</span><br/>
                            <span className="text-primary">Always</span> <span className="font-serif italic font-normal text-white">learning</span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-lg animate-fade-in  animated-delay-200">
                            Me especializo en el desarrollo de aplicaciones web y móviles, utilizando tecnologías modernas para crear experiencias digitales atractivas y funcionales.
                        </p>
                    </div>
                    {/* CTAs */}
                    <div className="flex flex-wrap gap-4 animate-fade-in animated-delay-300">
                        <Button size="lg" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                            Contacto <ArrowRight className="w-5 h-5"/>
                        </Button>
                        <AnimatedBorderButton>
                            <Download className="w-5 h-5"/>
                            Descargar CV
                        </AnimatedBorderButton>
                    </div>
                    {/* Social Links */}
                    <div className="flex items-center gap-4 animate-fade-in animated-delay-400">
                        <span className="text-sm text-muted-foreground">Sígueme: </span>
                        {[
                            {icon: Gitlab, href:"https://gitlab.com/e.srumbo"},
                            {icon: Linkedin, href:"https://www.linkedin.com/in/samuelrumbo"},
                        ].map((social, idx) =>(
                            <a key={idx} href={social.href} className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300">
                                {<social.icon className="w-5 h-5"/>}
                            </a>
                        ))}
                    </div>
                </div>
                {/* Right Column - Profile Pic */}
                <div className="relative animate-fade-in animated-delay-300">
                    {/* Profile Image */}
                    <div className="relative max-w-md mx-auto">
                        <div
                            className="absolute inset-0
                            rounded-3xl bg-linear-to-br
                            from-primary/30 via-transparent
                            to-primary/10 blur-2xl animate-pulse"
                        />
                        <div className="relative glass rounded-3xl p-2 glow-border">
                            <img 
                                src={fotoPerfil}
                                alt="Samuel Rumbo" 
                                className="w-full aspect-3/5 object-cover rounded-2xl"
                            />
                            {/* Floating Badge */}
                            <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"/>
                                    <span className="text-sm font-medium">Listo para trabajar</span>
                                </div>
                            </div>
                            {/* Stats Badge */}
                            <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animated-delay-500">
                                <div className="text-2xl font-bold text-primary">1+ año de experiencia</div>
                                <div className="text-xl font-bold text-primary">Spring Boot / Next.js / PostgreSQL</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Skills Section */}
            <div className="mt-20 animate-fade-in animated-delay-600">
                <p className="text-sm text-muted-foreground mb-6 text-center">
                    Tecnologías con las que he trabajado:
                </p>
                <div className="relative overflow-hidden">
                    <div className="flex animate-marquee">
                        {[...skills, ...skills].map((skill, idx) => (
                            <div key={idx} className="shrink-0 px-8 py-4">
                                <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">{skill}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animated-delay-800">
            <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
                <span className="text-xs uppercase tracking-wider">
                    Scroll
                </span>
                <ChevronDown className="w-6 h-6 animate-bounce"/>
            </a>
        </div>
    </section>
    )
}