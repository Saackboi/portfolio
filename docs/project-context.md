# Contexto General del Proyecto

## 1) Objetivo del producto
Portfolio personal con identidad visual "Sketch-Punk", construido en Angular standalone.
La regla principal es mantener coherencia visual y de experiencia con la plantilla base: los cambios deben preservar el lenguaje grafico, el ritmo de animacion y la estructura UX ya establecida.

## 2) Stack y arquitectura tecnica
- Framework: Angular standalone con Signals y ChangeDetection `OnPush`.
- Estilos: Tailwind v4 en archivos CSS (`@apply`), tokens globales en `src/styles.css`.
- Datos dinamicos: Google Sheets expuesto como JSON (CMS ligero en runtime).
- Contacto: EmailJS desde cliente (sin backend propio).
- SEO: metatags + canonical por vista (home y detalle de proyecto).
- Shell global: carga contenido inicial, controla overlay de carga y top-nav persistente.

## 3) Estructura del codigo (regla de organizacion)
- `src/app/core`: layout global, servicios, modelos y logica transversal.
- `src/app/features/landing`: Home por secciones (Hero, About, Projects, Contact).
- `src/app/features/project-detail`: Vista de detalle modular (nav, hero, scope, tech, footage, cta).
- `src/app/shared`: piezas reutilizables y estilos compartidos.
- Regla: evitar componentes monoliticos; dividir por feature/seccion con responsabilidades claras.

## 4) Logica de negocio vigente
### 4.1 Variables y configuracion (environment)
- Se gestiona a traves de `src/environments/environment.ts` (con plantilla `src/environments/environment.example.ts`).
- Variables esperadas:
  - `production`
  - `googleSheetsApiUrl`
  - `emailJsServiceId`
  - `emailJsTemplateId`
  - `emailJsPublicKey`
- Si falta alguna variable (e.g. `googleSheetsApiUrl`), los servicios degradan con fallback seguro sin romper la app.


### 4.2 CMS (Google Sheets) y contenido
- `PortfolioContentService` consume el JSON del CMS una sola vez por sesion (`loadedState`).
- Expone signals/computed: `projects`, `techStack`, `loading`.
- Si falla URL o request: retorna payload vacio (no crash).
- Tiene delay minimo de carga para evitar parpadeo de UI.

### 4.3 Navegacion y rutas
- Rutas activas:
  - `/` -> Landing (dentro de `ShellComponent`).
  - `/projects/:slug` -> detalle de proyecto.
- Regla de negocio: si `slug` no existe, redirigir a `/` con fragmento `#proyectos`.

### 4.4 SEO
- Landing y Project Detail deben setear:
  - `title`
  - `description`
  - Open Graph/Twitter tags
  - canonical
- En detalle, imagen OG se resuelve por prioridad:
  - `heroImage` -> `image` -> primera de `gallery` -> fallback local.

### 4.5 Tema (dark/light)
- La clase `dark` se alterna en `<html>` (comportamiento identico a plantilla).
- Persistencia en `localStorage` clave `theme`.
- Tambien se actualiza atributo `data-theme` (`dark`/`light`).

### 4.6 Contacto
- Formulario reactivo con validaciones:
  - nombre: requerido
  - correo: requerido + formato email
  - mensaje: requerido + minimo 10 caracteres
- Envio mediante EmailJS (`sendForm`) con IDs runtime.
- Maneja estado UX completo: enviando, exito/error, toast autocierre.
- Si falta config de EmailJS, debe fallar de forma controlada.

## 5) Modelo de datos (contrato operativo)
- `SheetsPayload`:
  - `projects: ProjectCard[]`
  - `techStack: TechCategory[]`
- `ProjectCard` admite detalle extendido (slug, hero, desafios tecnicos, stack, gallery, links demo/repo, etc.).
- Regla: cualquier ampliacion de modelo debe mantener compatibilidad hacia atras con datos parciales del CMS.

## 6) Sistema de diseno y UI (reglas obligatorias)
- Mantener estetica "Sketch-Punk"/brutalist: bordes marcados, sombras duras, texturas, inclinaciones y sensacion manual.
- Tokens de color/fuentes/utilidades compartidas viven en `src/styles.css`.
- Usar clases semanticas por componente (`hero__*`, `top-nav__*`, etc.); no ensuciar templates con utilidades Tailwind masivas.
- Las animaciones deben ser sutiles y con fallback de accesibilidad (`prefers-reduced-motion`).
- Responsividad obligatoria: mobile/tablet/desktop sin solapes ni overflow visual.

## 7) Convenciones de implementacion
- Usar control flow moderno de Angular (`@if`, `@for`), evitar `*ngIf` y `*ngFor`.
- Priorizar Signals/computed/effect para estado derivado y sincronizacion UI.
- Mantener `OnPush` en componentes de feature.
- Cada cambio nuevo debe respetar separacion `core` vs `features` vs `shared`.
- Commits atomicos y semanticos (sin mezclar cambios no relacionados).

## 8) Estado funcional actual (que ya existe y debe preservarse)
- Top navigation brutalist con menu movil y toggle de tema persistente.
- Landing completa: Hero, About/KnowMe, Tech Stack, Projects, Contact.
- Gallery de proyectos estilo polaroid con acentos visuales.
- Vista `Project Detail` completa con secciones modulares y estilos compartidos.
- Integracion CMS para proyectos y tech stack en runtime.
- SEO dinamico en home y detalle.
- Ajustes responsive y paridad de tema en detalle.

## 9) Guia para futuras implementaciones (para otros agentes)
- Antes de construir: revisar si el cambio vive en `landing` o `project-detail`; no duplicar logica transversal.
- Si se agrega contenido dinamico nuevo, integrarlo al contrato `SheetsPayload` con fallback seguro.
- Si se toca UI, preservar lenguaje visual existente (no introducir estilos que rompan la identidad).
- Si se agrega ruta nueva, incluir estrategia SEO y comportamiento de scroll coherente con Shell.
- Si se agrega interaccion async, contemplar estado de carga/error y experiencia de transicion.
- Si un cambio contradice estas reglas, documentar la excepcion dentro del mismo PR/commit.
