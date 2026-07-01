const experiences = [
    {
        period: "oct. 2025 - mar. 2026",
        role: "Junior Developer",
        company: "Tecnocim Innova",
        description: "Desarrollador de API REST en Spring Boot desde cero para gestionar programas de bonificaciones fiscales en I+D+i, apoyándome en agentes de inteligencia artificial para optimizar los resultados.",
        technologies: ["Spring Boot", "PostgreSQL", "IA"],
        current: false
    },
    {
        period: "feb. 2025 - sept. 2025",
        role: "Desarrollador (prácticas)",
        company: "Tecnocim Innova",
        description: "Desarrollé una API REST en Spring Boot desde cero, incluyendo el diseño y la creación de la base de datos en PostgreSQL.",
        technologies: ["Spring Boot", "PostgreSQL", "IA"],
        current: false
    },
    {
        period: "jun. 2024",
        role: "Desarrollador de Software",
        company: "Playoff Informática",
        description: "Realización de pruebas y mejora de la aplicación de la empresa. Ampliación y corrección de funcionalidades de la API e implementación de controles avanzados con operaciones de base de datos.",
        technologies: ["JavaScript", "Cypress"],
        current: false
    },
    {
        period: "sept. 2023 - jun. 2026",
        role: "Desarrollo de Aplicaciones Multiplataforma (DAM)",
        company: "I.E.S. Sabadell",
        description: "Ciclo formativo donde aprendemos a convertirnos en programadores full-stack usando diferentes lenguajes y frameworks como Spring Boot, .NET, Django, Laravel o React.",
        technologies: ["Spring Boot", ".NET", "Django", "Laravel", "React"],
        current: true
    },
    {
        period: "mar. 2022 - ago. 2023",
        role: "Asistente de Docencia",
        company: "Meimersdorf Schule / Schule am Heidenberger Teich",
        description: "Proporcioné apoyo educativo y orientación a estudiantes en diversos entornos escolares.",
        technologies: [],
        current: false
    },
    {
        period: "ago. 2017 - may. 2021",
        role: "Carpintero",
        company: "Die Hoftischlerei, Ludwig Hauschild GmbH",
        description: "Especialización en carpintería personalizada, instalación y gestión de proyectos de construcción, con un enfoque en la artesanía de calidad.",
        technologies: [],
        current: false
    },
    {
        period: "ago. 2017 - jul. 2020",
        role: "Formación Profesional como Carpintero",
        company: "Walther-Lehmkuhl-Schule",
        description: "Programa de formación profesional alemán especializado en carpintería y artesanía de la madera, el punto de partida del viaje que me llevaría, años después, al desarrollo de software.",
        technologies: [],
        current: false
    }
]

export const Experience = () =>{
    return( 
    <section id="experience" className="py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"/>

        <div className="container mx-auto px-6 relative z-10">
            {/* SECTION HEADER */}
            <div className="max-w-3xl mb-16">
                <span className="text-secondary-foreground text-sm front-medium tracking-wider uppercase animate-fade-in">Curriculum</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                    Aquí te presento 
                    <span className="font-serif italic font-normal text-white"> mi aventura personal</span>
                </h2>
                
                <p className="text-muted-foreground animate-fade-in animation-delay-200">
                    Mi crecimiento profesional ha sido un viaje lleno de experiencias diversas, 
                    desde la carpintería hasta el desarrollo de software. Cada etapa ha contribuido a mi 
                    desarrollo integral, permitiéndome adquirir habilidades técnicas y blandas que me han 
                    preparado para enfrentar desafíos en el mundo laboral actual.
                </p>
            </div>

            {/* TIMELINE */}
            <div className="relative">
                <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]"/>
                
                {/* EXPERIENCE ITEMS */}
                <div className="space-y-12">
                    {experiences.map((exp, idx) => (
                        <div key={idx} className="relative grid md:grid-cols-2 gap-8 animate-fade-in" style={{ animationDelay: `${(idx + 1) * 150}ms`}}>
                        
                            {/* Timeline dot */}
                            <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                                {exp.current && (<span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"/>)}
                            </div>

                            {/* Content */}
                            <div className={`pl-8 md:pl-0 ${idx % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}>
                                <div className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}>
                                    
                                    <span className="text-sm text-primary font-medium">{exp.period}</span>
                                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                                    <p className="text-muted-foreground">{exp.company}</p>
                                    <p className="text-sm text-muted-foreground mt-4">{exp.description}</p>
                                    
                                    <div className={`flex flex-wrap gap-2 mt-4 ${idx % 2 === 0 ? "md:justify-end" : ""}`}>
                                        {exp.technologies.map((tech, techIdx) =>(
                                            <span className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground" key={techIdx}>
                                                {tech}
                                                </span>
                                        ))}
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    </section>
    )
}