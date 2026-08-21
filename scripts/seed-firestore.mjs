import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDavdBKKwCjuw5pjwIYoZKaiPPlwjlxM8w',
  authDomain: 'portfolio-c2ec0.firebaseapp.com',
  projectId: 'portfolio-c2ec0',
  storageBucket: 'portfolio-c2ec0.firebasestorage.app',
  messagingSenderId: '48349186065',
  appId: '1:48349186065:web:0af34ffbc343305a1549b0',
  measurementId: 'G-XX21C6XGDT'
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const payload = {
  projects: [
    {
      order: 1,
      title: "CEL",
      subtitle: "Centro de Estética & Láser",
      tagline: "FULLSTACK EDITION",
      description: "Plataforma de Reservas & Gestión. Angular & .NET.",
      year: "2024",
      code: "#001",
      image: "assets/projects/project-cel.png",
      heroImage: "assets/projects/detail/cel/cel-hero.png",
      tapeTone: "yellow",
      tilt: "left",
      slug: "cel",
      longDescription: "Sistema integral de gestión clínica y reservas online desarrollado para el Centro de Estética Láser. La solución centraliza la agenda de citas, historiales médicos y control de stock en una plataforma web responsiva.",
      technicalChallenges: [
        {
          "title": "Sincronización en Tiempo Real",
          "description": "Implementación de WebSockets para actualizar la disponibilidad de turnos al instante, evitando solapamientos entre recepcionistas y clientes."
        },
        {
          "title": "Arquitectura Limpia",
          "description": "Backend estructurado en Clean Architecture con .NET 8, desacoplando la lógica de negocio de la persistencia y servicios externos."
        },
        {
          "title": "Seguridad y Roles",
          "description": "Autenticación basada en JWT con control de acceso por roles (Admin, Especialista, Paciente) y encriptación de datos sensibles."
        }
      ],
      techStackDetail: [
        "Angular",
        ".NET Core",
        "SQL Server",
        "Tailwind CSS",
        "Azure"
      ],
      demoUrl: "https://esteticalaser.sackboi.win/",
      repoUrl: "",
      gallery: [
        {
          "src": "assets/projects/detail/cel/cel-01.png",
          "caption": "Panel de administración - Dashboard"
        },
        {
          "src": "assets/projects/detail/cel/cel-02.png",
          "caption": "Módulo de gestión de citas y calendario"
        },
        {
          "src": "assets/projects/detail/cel/cel-03.png",
          "caption": "Ficha médica del paciente e historial"
        },
        {
          "src": "assets/projects/detail/cel/cel-04.png",
          "caption": "Página pública de reserva de turnos"
        }
      ],
      archImage: "assets/projects/detail/cel/cel-arch.png"
    },
    {
      order: 2,
      title: "Self",
      subtitle: "Homelab & Cloudflare Tunnels",
      tagline: "SYSADMIN EDITION",
      description: "Servidor local expuesto con Cloudflared, CasaOS y N8N.",
      year: "2025",
      code: "#002",
      image: "assets/projects/project-self.png",
      heroImage: "assets/projects/detail/self/self-hero.png",
      tapeTone: "primary",
      tilt: "right",
      slug: "self",
      longDescription: "Infraestructura privada basada en Linux desplegada en hardware local, configurada para alojar servicios web, automatizaciones y almacenamiento personal de forma segura y accesible globalmente.",
      technicalChallenges: [
        {
          "title": "Exposición Segura sin Apertura de Puertos",
          "description": "Configuración de Cloudflare Tunnels para conectar servicios internos directamente a la red de Cloudflare, eliminando la necesidad de abrir puertos en el router."
        },
        {
          "title": "Automatización e Integración",
          "description": "Despliegue de instancias de n8n para orquestar flujos de trabajo automatizados entre APIs externas y servicios locales."
        },
        {
          "title": "Cultura DevOps y Escalabilidad",
          "description": "Habilita una infraestructura basada en contenedores que permite la automatización de despliegues y pruebas de servicios, optimizando el uso de recursos en hardware limitado."
        }
      ],
      techStackDetail: [
        "Linux",
        "Cloudflared",
        "N8N",
        "Docker"
      ],
      demoUrl: "https://sackboi.win/",
      repoUrl: "",
      gallery: [
        {
          "src": "assets/projects/detail/self/self-01.png",
          "caption": "Página web: Lobby de aplicaciones"
        },
        {
          "src": "assets/projects/detail/self/self-02.png",
          "caption": "Instancia N8N Self-hosted"
        },
        {
          "src": "assets/projects/detail/self/self-03.png",
          "caption": "Página web: Portfolio"
        },
        {
          "src": "assets/projects/detail/self/self-04.png",
          "caption": "CasaOS: Manejo fácil de contenedores docker"
        }
      ],
      archImage: "assets/projects/detail/self/self-arch.png"
    },
    {
      order: 3,
      title: "Treecify",
      subtitle: "Plataforma de identidad digital",
      tagline: "SAAS EDITION",
      description: "Micro-SaaS de Identidad Digital y QR. VPS & DevOps.",
      year: "2025",
      code: "#003",
      image: "assets/projects/project-treecify.png",
      heroImage: "assets/projects/detail/treecify/treecify-hero.png",
      tapeTone: "blue",
      tilt: "neutral",
      slug: "treecify",
      longDescription: "Treecify es una plataforma Micro-SaaS \"Self-Hosted\" diseñada para que negocios locales y creadores gestionen su identidad digital. Permite crear una página de aterrizaje (\"Link in Bio\") totalmente personalizada, ultra-rápida y generar códigos QR dinámicos para el mundo físico.",
      technicalChallenges: [
        {
          "title": "Identidad centralizada",
          "description": "Unifica perfiles y datos del comercio en un solo panel, sincronizando cambios en tiempo real en todos los canales."
        },
        {
          "title": "QR dinámico",
          "description": "Genera códigos vectoriales por demanda ligados a URLs cortas, con analítica por escaneo y trazabilidad por campaña."
        },
        {
          "title": "Despliegue seguro",
          "description": "Infraestructura en VPS con contenedores y despliegues sin downtime, priorizando aislamiento, backups y control de acceso."
        }
      ],
      techStackDetail: [
        "Node.js",
        "React",
        "Docker",
        "SQLite",
        "Express.js"
      ],
      demoUrl: "https://treecify-demo.sackboi.win/login",
      repoUrl: "https://github.com/Saackboi/treecify",
      gallery: [
        {
          "src": "assets/projects/detail/treecify/treecify-01.png",
          "caption": "Inicio de sesión"
        },
        {
          "src": "assets/projects/detail/treecify/treecify-02.png",
          "caption": "Generador de QR"
        },
        {
          "src": "assets/projects/detail/treecify/treecify-03.png",
          "caption": "Personalización de perfil"
        },
        {
          "src": "assets/projects/detail/treecify/treecify-04.png",
          "caption": "Vista pública del perfil"
        }
      ],
      archImage: "assets/projects/detail/treecify/treecify-arch.png"
    },
    {
      order: 4,
      title: "Vertex",
      subtitle: "Plataforma de Identidad Profesional",
      tagline: "ENTERPRISE EDITION",
      description: "Plataforma para crear y gestionar perfiles profesionales con guardado de progreso y notificaciones en vivo.",
      year: "2026",
      code: "#004",
      image: "assets/projects/project-vertex.png",
      heroImage: "assets/projects/detail/vertex/vertex-hero.png",
      tapeTone: "red",
      tilt: "left",
      slug: "vertex-management-system",
      longDescription: "Vertex es una herramienta para crear perfiles profesionales de forma organizada. Su función principal es un flujo de \"onboarding\" que permite llenar la información por pasos; si el usuario se sale a mitad de camino, no pierde nada porque el sistema guarda borradores automáticamente. Al final, toda esa información temporal se procesa y se guarda de forma definitiva en la base de datos para generar el perfil final. Es una solución pensada para evitar la frustración de perder datos en formularios largos.",
      technicalChallenges: [
        {
          "title": "Arquitectura Limpia",
          "description": "Organiza el proyecto en capas independientes para asegurar un código ordenado, fácil de testear y preparado para crecer sin deuda técnica."
        },
        {
          "title": "Manejo de borradores",
          "description": "Permite almacenar información parcial durante el registro y solo convertirla en un perfil definitivo cuando el usuario completa todos los pasos."
        },
        {
          "title": "Notificaciones en tiempo real",
          "description": "Implementa SignalR para avisar al usuario al instante cuando su progreso se ha sincronizado correctamente con el servidor."
        },
        {
          "title": "Seguridad por Token",
          "description": "Protege la información mediante JWT e Identity, donde el servidor identifica al usuario de forma segura sin exponer datos sensibles en el navegador."
        }
      ],
      techStackDetail: [
        "C#",
        ".NET",
        "Angular",
        "SQL Server",
        "Docker",
        "Microsoft Azure"
      ],
      demoUrl: "https://vertex.sackboi.win/",
      repoUrl: "",
      gallery: [
        {
          "src": "assets/projects/detail/vertex/vertex-06.png",
          "caption": "Página de inicio reactiva"
        },
        {
          "src": "assets/projects/detail/vertex/vertex-01.png",
          "caption": "Inicio de sesión y Auth"
        },
        {
          "src": "assets/projects/detail/vertex/vertex-02.png",
          "caption": "Flujo de onboarding guiado"
        },
        {
          "src": "assets/projects/detail/vertex/vertex-03.png",
          "caption": "Vista resumen de perfil"
        },
        {
          "src": "assets/projects/detail/vertex/vertex-04.png",
          "caption": "Vista del perfil completado real"
        },
        {
          "src": "assets/projects/detail/vertex/vertex-05.png",
          "caption": "Notificaciones en tiempo real"
        }
      ],
      archImage: "assets/projects/detail/vertex/vertex-arch.png"
    }
  ],
  techStack: [
    {
      order: 1,
      id: "languages",
      title: "Lenguajes de Programación",
      tone: "primary",
      badges: [
        "C# .NET",
        "Node.js",
        "TypeScript",
        "Javascript",
        "SQL"
      ],
      badgeTones: [
        "ink",
        "primary",
        "secondary",
        "accent",
        "ink"
      ]
    },
    {
      order: 2,
      id: "frameworks",
      title: "Frameworks & Librerias ",
      tone: "secondary",
      badges: [
        "Angular",
        "React",
        "Express.js",
        "n8n",
        "Power Apps",
        "Google Gemini",
        "Entity Framework Core",
        "Tailwind CSS"
      ],
      badgeTones: [
        "paper",
        "ink",
        "secondary",
        "primary",
        "accent",
        "paper",
        "primary",
        "secondary"
      ]
    },
    {
      order: 3,
      id: "databases",
      title: "Bases de Datos",
      tone: "accent",
      badges: [
        "SQL Server",
        "MySQL",
        "Supabase",
        "SQLite"
      ],
      badgeTones: [
        "ink",
        "accent",
        "paper",
        "secondary"
      ]
    },
    {
      order: 4,
      id: "devops",
      title: "Herramientas & DevOps",
      tone: "ink",
      badges: [
        "Docker",
        "Cloudflare",
        "Linux",
        "Google Cloud",
        "Git",
        "Postman",
        "Visual Studio",
        "Microsoft Azure",
        "GitHub Actions",
        "Figma"
      ],
      badgeTones: [
        "accent",
        "paper",
        "primary",
        "secondary",
        "paper",
        "muted",
        "secondary",
        "muted",
        "ink",
        "primary"
      ]
    }
  ]
};

async function seed() {
  console.log('🚀 Iniciando subida de datos a Firestore...');

  for (const project of payload.projects) {
    const docId = project.slug || project.title.toLowerCase();
    await setDoc(doc(db, 'projects', docId), project);
    console.log(`✅ Proyecto guardado: ${docId}`);
  }

  for (const tech of payload.techStack) {
    const { id, ...techData } = tech;
    await setDoc(doc(db, 'techStack', id), techData);
    console.log(`✅ Tech Category guardada: ${id}`);
  }

  console.log('🎉 ¡Migración de datos a Firestore completada exitosamente!');
  process.exit(0);
}

seed().catch(err => {
  console.error('❌ Error al subir datos:', err);
  process.exit(1);
});
