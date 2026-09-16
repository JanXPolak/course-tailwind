# Tailwind Shoes

A Nike-themed shoe store front end built while following a Tailwind CSS v4 +
React course. Single-product detail view, a browsable "New Arrivals" grid,
a slide-out cart, dark mode, and toast feedback on every cart action.

## Features

- Browse shoes in a "New Arrivals" grid and select one to view its details
- Add to cart with quantity and size selection
- Update quantity/size for an item already in the cart, remove items
- Slide-out cart sidebar with live contents
- Dark mode toggle, persisted across reloads via `localStorage`
- Toast notifications on every "Add to bag" action, driven by the CSS
  animation lifecycle (`onAnimationEnd`) instead of a hardcoded timer
- Custom Tailwind v4 theme: keyframe animations (`float`, `wiggle`, `fadeIn`,
  `fadeInAndOut`) and a class-based dark mode variant
- Fully typed with TypeScript — shared interfaces for shoes, cart entries and
  component props

## Tech stack

- **React 19** + **Vite**
- **TypeScript** – static typing across the codebase
- **Tailwind CSS 4** – utility-first styling, custom `@theme` tokens and
  animations
- **react-icons** – icon set (nav, cart, dark mode toggle, toast)
- **tw-merge** – merging conditional Tailwind classes
- **ESLint** – linting and consistency

## Gained skills

- Structuring a Tailwind v4 theme: `@theme`, custom `@keyframes`, and a
  `@custom-variant` for class-based dark mode
- Typing a component tree end-to-end in TypeScript — props interfaces, shared
  domain types (`Shoe`, `CartEntry`), typed `useState`
- Building a small reusable `Select` component instead of duplicating markup
- Correctly sequencing a CSS animation with its removal from the DOM via
  `onAnimationEnd`, instead of a duration guessed in JavaScript
- Persisting UI state (dark mode) to `localStorage` and rehydrating it on load
- Responsive, mobile-first layout with Tailwind's breakpoint variants

## Demo

Live version: https://course-tailwind.vercel.app/

## Course

Built while following **[Tailwind CSS V4 (+ React) - The beginner guide]** on [Udemy](https://www.udemy.com/course/tailwind-css-the-beginner-guide/).

Certificate of completion: [[CERTIFICATE_URL](https://www.udemy.com/certificate/UC-2cec2a97-2a1e-4a14-8476-f2febc1fc373/)]

## Running locally

**Prerequisites:** Node.js 20+ and npm.

```bash
npm install
npm run dev