# ApexLaunch: High-Conversion SaaS Landing Page

A visually stunning, high-conversion SaaS landing page featuring a minimalist design, smooth animations, and a clear call-to-action for email submission.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/zaffys/apexlaunch-app)

## Key Features

-   **Minimalist Design Excellence**: A clean, spacious, and modern UI designed for maximum user engagement and conversion.
-   **Compelling Hero Section**: A powerful opening with a clear value proposition and a prominent call-to-action.
-   **Elegant Feature Showcase**: A dedicated section to highlight the core features of your SaaS product in a visually appealing way.
-   **Social Proof**: Build trust with a beautifully designed testimonials section.
-   **Transparent Pricing**: A clear and responsive pricing table to outline different subscription tiers.
-   **Functional Email Capture**: A seamless email submission form with client-side validation and instant user feedback.
-   **Smooth Animations**: Subtle, performant animations and micro-interactions powered by Framer Motion to create a delightful user experience.
-   **Responsive Perfection**: A mobile-first approach ensuring a flawless experience across all devices, from mobile phones to widescreen desktops.

## Technology Stack

-   **Frontend**: React, Vite, TypeScript
-   **Backend**: Cloudflare Workers, Hono
-   **Styling**: Tailwind CSS, shadcn/ui
-   **Animation**: Framer Motion
-   **Form Management**: React Hook Form
-   **Validation**: Zod
-   **UI Components**: Lucide React, Sonner (Toasts)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

-   [Bun](https://bun.sh/) installed on your machine.
-   [Git](https://git-scm.com/) for version control.

### Installation

1.  **Clone the repository:**
    ```sh
    git clone <repository-url>
    ```

2.  **Navigate to the project directory:**
    ```sh
    cd apex-launch-saas-landing
    ```

3.  **Install dependencies:**
    ```sh
    bun install
    ```

### Running Locally

To start the development server, run the following command:

```sh
bun run dev
```

This will start the Vite development server, and you can view the application by navigating to `http://localhost:3000` in your browser.

## Project Structure

-   `src/pages/HomePage.tsx`: The main entry point for the landing page, composing all sections.
-   `src/components/`: Contains reusable React components like `Header.tsx`, `Footer.tsx`, and `EmailForm.tsx`.
-   `src/components/ui/`: Pre-installed shadcn/ui components.
-   `worker/userRoutes.ts`: Defines the API endpoints for the Cloudflare Worker backend.
-   `tailwind.config.js`: Configuration file for Tailwind CSS, including the custom color palette and fonts.

## Available Scripts

In the project directory, you can run:

-   `bun run dev`: Runs the app in development mode.
-   `bun run build`: Builds the app for production.
-   `bun run deploy`: Deploys the built application to Cloudflare Pages.
-   `bun run lint`: Lints the codebase using ESLint.

## Deployment

This project is optimized for deployment on the Cloudflare network.

### Prerequisites

-   A Cloudflare account.
-   The [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/) installed and authenticated.

### Deploying to Cloudflare

To deploy your application, simply run the deploy script:

```sh
bun run deploy
```

This command will build the project and deploy it using Wrangler.

Alternatively, you can deploy directly from your GitHub repository with a single click.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/zaffys/apexlaunch-app)

## Contributing

Contributions are welcome! Please feel free to open an issue or submit a pull request if you have a way to improve this project.

## License

This project is licensed under the MIT License.