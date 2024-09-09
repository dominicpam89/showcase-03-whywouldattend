# **Showcase 3 - WhyWouldAttend**

This project is a Next.js application designed for managing and displaying events. The goal of this project is to showcase a clean and efficient event management system with Firebase integration for event data handling and image storage, alongside modern UI components and styling with Tailwind CSS and Radix UI. The application implements both server-side rendering (SSR) and static site generation (SSG) to optimize performance.

## **Features**

-  **Event Management**: Fetch, filter, and display events with Firebase Firestore.
-  **Featured Events**: Highlight specific events using Firebase Firestore queries.
-  **Dynamic Filtering**: Filter events based on year and month.
-  **Responsive Design**: Built with Tailwind CSS for responsive and scalable designs.
-  **Interactve UI**: Components from Radix UI for accessibility and interactivity.
-  **Firebase Integration**: Firestore for data handling and Firebase Storage for storing event images.
-  **Typescript**: Strongly typed throughout the codebase, ensuring better maintainability and developer experience.
-  **Nextjs Optimization**: Utilizes both SSR and SSG with the revalidation feature for optimized performance.
-  **Custom Image Optimization for Netlify**: Custom image loading and display with skeleton, instead using next/image

## **Technologies Used**

-  **Nextjs** (v14.2.7): The React framework for server-side rendering and static site generation.
-  **React** (v18): A JavaScript library for building user interfaces.
-  **Typescript** (v5): Ensures type safety and a more robust development experience.
-  **Tailwind** (v3.4.1): A utility-first CSS framework for styling.
-  **Radix UI** A set of accessible, unstyled UI components.
-  **Firebase** (v10.13.1): For authentication, Firestore, and Firebase Storage.
-  **React Hook Form** (v7.53.0): A performant, flexible, and extensible form library.
-  **Framer Motion** (v11.3.31): A library for animations in React.

## Project Structure

-  **pages/**: Contains all the Next.js pages for the application.
-  **components/**: Reusable UI components including event-related components like event lists.
-  **lib/**: : Contains utility functions, react context, types, and Firebase-related logic.

## Key Files

-  **tailwind.config.ts**: Tailwind CSS configuration file. Includes custom color schemes, animations, and font families.
-  **globals.css**: Global styles with custom properties for light and dark themes, along with Tailwind's base, components, and utilities layers.
-  **events.service.ts**: Handles Firebase Firestore queries, fetching event data, and downloading images from Firebase Storage.
-  **event.type.ts**: Defines the structure for event-related types used throughout the project.

## Scripts

-  `dev`: Starts the development server on localhost:3000.
-  `build`: Builds the application for production.
-  `start`: Starts the production server.
-  `lint`: Lints the codebase using ESLint.

## Firebase Usage

The project uses Firebase for storing event data in Firestore and event images in Firebase Storage. Key methods for retrieving and filtering event data are implemented in the events.service.ts file, including fetching events by year, month, or featured status.

## Environment Variables

`NEXT_PUBLIC_FIREBASE_API_KEY=<your-firebase-api-key>
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=<your-firebase-auth-domain>
NEXT_PUBLIC_FIREBASE_PROJECT_ID=<your-firebase-project-id>
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=<your-firebase-storage-bucket>
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=<your-firebase-messaging-sender-id>
NEXT_PUBLIC_FIREBASE_APP_ID=<your-firebase-app-id>`

## Project has no CRUD

Feel free to contribute and to add CRUD functionality by using any kind of services.
