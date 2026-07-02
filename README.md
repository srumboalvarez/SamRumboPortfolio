# Samuel Rumbo — Portfolio

Portfolio personal de **Samuel Rumbo**, desarrollador de software full-stack. Construido con React, Vite y Tailwind CSS, presenta mis proyectos, experiencia profesional y un formulario de contacto funcional.

🔗 **Demo en vivo:** [samrumboportfolio.vercel.app](https://samrumboportfolio.vercel.app/)

## ✨ Secciones

- **Hero** — presentación y tecnologías principales
- **Sobre mí** — resumen profesional y puntos fuertes
- **Proyectos** — selección de proyectos con enlaces a demo y repositorio
- **Experiencia** — trayectoria profesional y formativa
- **Contacto** — formulario de contacto (vía EmailJS) e información de contacto directo

## 🛠️ Tecnologías

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/) — iconos
- [EmailJS](https://www.emailjs.com/) — envío del formulario de contacto
- [ESLint](https://eslint.org/)

## 📂 Estructura del proyecto

```
src/
├── assets/         # Imágenes (foto de perfil, fondo hero...)
├── components/     # Componentes reutilizables (Button, AnimatedBorderButton...)
├── layout/         # Navbar y Footer
├── sections/       # Secciones de la landing (Hero, About, Projects, Experience, Contact...)
├── App.jsx
└── main.jsx
public/
└── projects/       # Imágenes de los proyectos mostrados en la sección Proyectos
```

## ⚙️ Instalación y uso local

1. Clona el repositorio:

   ```bash
   git clone https://github.com/srumboalvarez/SamRumboPortfolio.git
   cd SamRumboPortfolio
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Crea un archivo `.env.local` en la raíz del proyecto con las credenciales de [EmailJS](https://www.emailjs.com/) para que funcione el formulario de contacto:

   ```
   VITE_EMAILJS_SERVICE_ID=tu_service_id
   VITE_EMAILJS_TEMPLATE_ID=tu_template_id
   VITE_EMAILJS_PUBLIC_KEY=tu_public_key
   ```

4. Arranca el servidor de desarrollo:

   ```bash
   npm run dev
   ```

## 📦 Scripts disponibles

| Script            | Descripción                              |
| ----------------- | ----------------------------------------- |
| `npm run dev`     | Inicia el servidor de desarrollo          |
| `npm run build`   | Genera la build de producción             |
| `npm run preview` | Previsualiza la build de producción       |
| `npm run lint`    | Ejecuta ESLint sobre el proyecto          |

## 📬 Contacto

- **Email:** [srumboalvarez@gmail.com](mailto:srumboalvarez@gmail.com)
- **LinkedIn:** [linkedin.com/in/samuelrumbo](https://www.linkedin.com/in/samuelrumbo)
- **GitLab:** [gitlab.com/e.srumbo](https://gitlab.com/e.srumbo)
