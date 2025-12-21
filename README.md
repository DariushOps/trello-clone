# Trello Clone

A **production-ready Trello-inspired task management application** built with **Next.js 16** and **React 19**.  
The app allows users to manage boards, lists, and cards with a clean, accessible, and fully responsive interface.

Authentication, drag & drop interactions, and scalable UI architecture are core focuses of this project.

---

## Features

- Secure authentication with **Clerk**
- Create and manage boards
- Add, edit, and delete lists and cards
- Smooth drag & drop for lists and cards using **dnd-kit**
- Clean and accessible UI with **shadcn/ui**
- Fully responsive design (desktop, tablet, mobile)
- Scalable component-based architecture
- Optimized rendering with Next.js App Router
- Ready for deployment on Vercel

---

## Tech Stack

### Core

- **Next.js 16 (App Router)**
- **React 19**
- **TypeScript**

### UI & Styling

- **Tailwind CSS v4**
- **shadcn/ui**
- **Radix UI primitives**
- **Lucide Icons**
- **class-variance-authority**
- **clsx & tailwind-merge**
- **tw-animate-css**

### Authentication & Backend

- **Clerk** – Authentication and user management
- **Supabase (SSR)** – Backend and database integration

### Drag & Drop

- **@dnd-kit/core**
- **@dnd-kit/sortable**
- **@dnd-kit/utilities**

### Tooling

- **ESLint**
- **PostCSS**
- **Node.js & npm**

---

## Getting Started

### Install dependencies and Run the development server

```bash
npm install

npm run dev
```

## How It Works

- Authentication and session management are handled by Clerk, providing secure access and user-based data separation.

- The UI is built using shadcn/ui components powered by Radix UI, ensuring accessibility and flexibility while maintaining full design control with Tailwind CSS.

- Boards contain multiple lists, and each list holds multiple cards.
  Cards and lists can be reordered using dnd-kit, providing smooth and performant drag & drop interactions.

- The application follows a modular, component-driven architecture, making it easy to extend features and maintain clean code.

- The layout is fully responsive and optimized for performance using Next.js App Router and React 19 features.

## Project Purpose

- This project was built to:

- Practice building real-world, production-ready applications

- Work with Next.js App Router & React 19

- Implement authentication and backend integration

- Build accessible and scalable UI systems

- Implement complex interactions like drag & drop
