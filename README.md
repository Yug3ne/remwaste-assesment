# Remwaste Assessment

This project is a modern web application built with a focus on a great developer experience and a robust, maintainable codebase.

## Core Technologies

This project is built upon a foundation of modern web technologies to ensure a high-quality user and developer experience.

- **[React](https://react.dev/):** A JavaScript library for building user interfaces. We chose React for its component-based architecture, which allows us to create reusable UI elements and manage application state effectively.

- **[Vite](https://vitejs.dev/):** A next-generation frontend tooling. Vite provides an extremely fast development server with Hot Module Replacement (HMR) and an optimized build process, which significantly speeds up development and improves performance.

- **[TypeScript](https://www.typescriptlang.org/):** A statically typed superset of JavaScript. TypeScript helps in writing more robust and maintainable code by catching errors during development and improving code clarity.

## Styling

The user interface is styled using a combination of utility-first CSS and a curated component library.

- **[Tailwind CSS](https://tailwindcss.com/):** A utility-first CSS framework that allows for rapid UI development without writing custom CSS. It's highly customizable and helps in maintaining a consistent design system.

- **[shadcn/ui](https://ui.shadcn.com/):** A collection of beautifully designed, accessible, and reusable UI components. It's not a component library but a set of components that can be copied into the project and customized. This gives us full control over the components.

- **[Lucide React](https://lucide.dev/):** A simply beautiful and consistent icon set.

### Dark Theme

This application includes a dark theme implementation using `shadcn/ui`. The theme can be toggled between light, dark, and system modes. The `ThemeProvider` context, located in `src/lib/context/ThemeContext.tsx`, manages the theme state and persists it to local storage.


## Data Fetching

We use a combination of a powerful server-state library and a promise-based HTTP client for data fetching.

- **[TanStack React Query](https://tanstack.com/query/latest):** A powerful library for fetching, caching, and managing server state in React applications. It simplifies data fetching logic, handles caching, and provides a great developer experience with features like automatic refetching.

- **[Axios](https://axios-http.com/):** A promise-based HTTP client for the browser and Node.js. It makes it easy to send asynchronous HTTP requests to REST endpoints.

## Development Tools

- **[ESLint](https://eslint.org/):** A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript and TypeScript. It helps in maintaining code quality and enforcing coding standards.

