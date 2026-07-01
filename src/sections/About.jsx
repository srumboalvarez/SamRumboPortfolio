import { Brain, Code2, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Codigo Limpio",
    description:
      "Escribiendo código limpio y mantenible que sigue las mejores prácticas de la industria.",
  },
  {
    icon: Rocket,
    title: "Optimizacion de Rendimiento",
    description:
      "Optimizando para velocidad y ofreciendo experiencias de usuario extremadamente rápidas.",
  },
  {
    icon: Users,
    title: "Trabajo en Equipo",
    description: "Trabajando en estrecha colaboración con equipos para dar vida a ideas.",
  },
  {
    icon: Brain,
    title: "Innovación",
    description:
      "Manteniéndome al día con las últimas tecnologías y prácticas recomendadas.",
  },
];
export const About = () =>{

    return( 
        <section id="about" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                                Sobre mí
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                            Haciendo realidad ideas, <br/>
                            <span className="font-serif italic font-normal text-white">
                                {" "}
                                creando soluciones.
                            </span>
                        </h2>
                        <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                            <p>
                                Hola, soy Samuel Rumbo, un desarrollador de software fullstack apasionado 
                                por crear soluciones digitales innovadoras. He trabajado con una gran variedad de
                                lenguajes y frameworks, incluyendo Spring Boot, Next.js, TypeScript, 
                                Laravel y Django.
                            </p>
                            <p>
                                {/* AÑADIR MAS DETALLES EN EL FUTURO */}
                            </p>
                            <p>
                                Si no estoy escribiendo código, probablemente me encuentres explorando 
                                nuevas tecnologías, haciendo deporte, jugando videojuegos o disfrutando de un buen libro. 
                                Siempre estoy buscando aprender y crecer como desarrollador y persona.
                            </p>
                        </div>

                        <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                            <p className="text-lg font-medium italic text-foreground">
                                "Mi objetivo es crear experiencias digitales que no sean solo funcionales,
                                sino que también sean atractivas, fáciles de usar y que aporten valor a los usuarios."
                            </p>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {highlights.map((item, idx) => (
                            <div
                                key={idx}
                                className="glass p-6 rounded-2xl animate-fade-in"
                                style={{ animationDelay: `${(idx + 1) * 100}ms`}}
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                    <item.icon className="w-6 h-6 text-primary"/>
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

