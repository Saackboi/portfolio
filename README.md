# Koji | Portfolio

![Koji hero](https://i.postimg.cc/NjSt0wL9/image.png)


<p align="center">
  <img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white" alt="Angular">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind">
    <img src="https://img.shields.io/badge/Google_Sheets_CMS-34A853?style=for-the-badge&logo=googlesheets&logoColor=white" alt="Google Sheets">
  <img src="https://img.shields.io/badge/EmailJS-F2A60D?style=for-the-badge&logo=mail-dot-ru&logoColor=white" alt="EmailJS">
    <img src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white" alt="GitHub Actions">
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker">
</p>

This is my personal portfolio, built with **Angular**. I developed this project to explore creative **UI/UX** while maintaining a functional and scalable architecture. The "Sketch-Punk" aesthetic is powered by a **Google Sheets** integration that acts as a dynamic CMS, allowing me to manage my projects and tech stack in real-time without redeployments.

<p align="center">
  <a href="https://portfolio.sackboi.win/" target="_blank">
    <img src="https://i.postimg.cc/nzhdmXX7/image.png" alt="Launch Live Demo" width="300">
  </a>
</p>

---

### Key Features

* **Custom "Sketch-Punk" UI**: A unique visual identity based on a hand-drawn aesthetic using **CSS/SCSS** with custom properties.
* **Light/Dark Mode**: Persistent theme toggling across the entire application.
* **Google Sheets CMS**: Dynamic data synchronization for projects and tech badges from a public spreadsheet.
* **Serverless Contact Form**: Integrated with **EmailJS** for direct communication without a custom backend.
* **Responsive Design**: A fluid layout that adapts perfectly from desktop monitors to mobile devices.

---

## CI/CD & Deployment

This project follows modern DevOps practices to ensure automated and reliable delivery:

* **Automated Workflow**: I use **GitHub Actions** to trigger automated builds and deployments on every push to the `main` branch.
* **Containerization**: Managed through **CasaOS** and **Docker** to ensure environment consistency and easy scaling.
* **Remote Access**: Exposed to the internet using secures connections, allowing me to share the portfolio with potential employers and collaborators without compromising security.

---

### High‑level Architecture

#### **Google Sheets as a Lightweight CMS**
* I keep the projects and tech list in Google Sheets so content can be updated without rebuilding the site.
* The site reads published sheet data at runtime and maps columns to the site model (e.g., `slug`, `title`, `description`, `images`, `tags`).

#### **EmailJS for Client‑side Contact**
* The contact form sends messages directly from the browser using EmailJS (`emailjs.sendForm`).
* The form maps values to the template fields: `name`, `email`, `title`, `message`, and `time`.
* Public service and template IDs are provided at runtime, so no private server is required for the contact flow.

---

### Core Technologies & Standards

* **Frontend**: Angular (Standalone Components + **Signals**).
* **Styling**: Tailwind CSS (Component styles using `@apply`) and custom SCSS.
* **Integrations**: `@emailjs/browser` & Google Sheets API.
* **Workflow**: Use of **Conventional Commits** and semantic versioning to maintain a professional development history.

---

### Runtime Config (Public Identifiers)

The site expects public runtime identifiers for client integrations. These are not secrets; they are parameters the client needs to function.

```json
{
  "emailJsServiceId": "service_xxx",
  "emailJsTemplateId": "template_xxx",
  "emailJsPublicKey": "public_xxx"
}
```

---

### Contact

Feel free to reach out via the contact form on the site. Messages are delivered through EmailJS and include a timestamp for better context and traceability.