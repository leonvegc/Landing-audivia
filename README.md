# AUDIVIA — Audiología Karol Vega

Landing page responsiva desarrollada para la clínica de audiología **AUDIVIA**, ubicada en Costa Rica. Proyecto correspondiente al **Laboratorio #1** del curso Programación en Ambiente Web I (ISW-521) de la Universidad Técnica Nacional (UTN).

---

## Descripción del proyecto

AUDIVIA es una clínica especializada en audiología liderada por la Audióloga Karol Vega. Esta landing page presenta los servicios de la clínica, información institucional y datos de contacto, con un diseño profesional, responsivo y accesible.

---

## Tecnologías utilizadas

- **HTML5** semántico
- **CSS3** nativo (Flexbox + CSS Grid + variables CSS)
- **JavaScript** nativo (Web Storage API)
- **Google Fonts** — Montserrat y Open Sans

> No se utilizó ningún framework CSS ni librería JavaScript externa.

---

## Estructura de archivos

```
laboratorio-01/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── img/
    ├── karol-portada.jpg
    ├── karol-examen.jpg
    ├── karol-consulta.jpg
    ├── karol-escritorio.jpg
    └── equipos-audiologia.jpg
```

---

## Secciones de la página

| Sección | Descripción |
|---|---|
| **Hero** | Título principal y botón de llamada a la acción con enlace a WhatsApp |
| **Servicios** | Tres tarjetas con fotografías: Evaluación Auditiva, Audífonos y Limpieza de Oídos |
| **Nosotros** | Información institucional con fotografía de la audióloga y dato estadístico destacado |
| **Contacto** | WhatsApp, dirección e Instagram de la clínica |

---

## Requerimientos técnicos implementados

### HTML5 Semántico
Uso correcto de etiquetas estructurales: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>` y `<footer>`. Sin tablas para layout.

### CSS3 — Flexbox y Grid
- **Flexbox**: barra de navegación, sección hero, sección nosotros
- **CSS Grid**: cuadrícula de servicios (3 columnas en desktop, 1 en móvil)
- **Media queries**: breakpoints en `768px` (tablet) y `480px` (móvil)

### Accesibilidad WCAG 2.1 Nivel A
- Atributos ARIA: `role`, `aria-label`
- Atributo `alt` descriptivo en todas las imágenes
- Contraste de texto mínimo 4.5:1
- Indicador de foco (`:focus`) visible en todos los elementos interactivos
- Navegación completa por teclado

### Web Storage
Modo oscuro/claro con persistencia mediante `localStorage`. La preferencia del usuario se guarda con la clave `"tema"` y se aplica automáticamente al recargar la página.

---

## Paleta de colores

| Variable | Modo claro | Modo oscuro |
|---|---|---|
| `--color-primario` | `#1B3A6B` | `#2A5298` |
| `--color-acento` | `#C14E15` | `#C14E15` |
| `--color-fondo` | `#FFFFFF` | `#0F1F3D` |
| `--color-fondo-secundario` | `#F5F7FA` | `#162848` |
| `--color-texto` | `#1B3A6B` | `#E8EDF5` |

---

## Información de la clínica

- **WhatsApp:** 8615-4823
- **Dirección:** Frente al Hospital San Carlos, Edificio Amore, segunda planta, consultorio 3
- **Instagram:** [@audiviacr](https://www.instagram.com/audiviacr)

---

