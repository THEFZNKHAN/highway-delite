# BookIt: Experiences & Slots

BookIt is a full-stack web application that allows users to browse, book, and manage travel experiences. This project is designed to showcase a complete end-to-end booking flow, from exploring available experiences to completing a booking and receiving confirmation.

## Figma Design

The UI/UX of this project is based on the following Figma design:

[Figma Link](https://www.figma.com/design/8X6E1Ev8YdtZ3erV0Iifvb/HD-booking?node-id=0-1&p=f&t=K4scwnxfIHmfbb2a-0)

## Live Demo

[Link to the hosted application]

## Technologies Used

### Frontend

- **Framework:** React
- **Language:** TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Routing:** React Router
- **State Management:** React Query
- **Form Handling:** React Hook Form
- **Schema Validation:** Zod

### Backend

- **Framework:** Node.js with Express/NestJS (to be implemented)
- **Database:** PostgreSQL/MySQL/MongoDB (to be implemented)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/thefznkhan/bookit-exp-slots.git
    ```
1.  Go to folder
    ```sh
    cd bookit-exp-slots
    ```
2.  Install NPM packages
    ```sh
    npm install
    ```

### Running the Application

To run the application in development mode, use the following command:

```sh
npm run dev
```

This will start the development server at `http://localhost:5173`.

## Available Scripts

In the project directory, you can run:

- `npm run dev`: Runs the app in the development mode.
- `npm run build`: Builds the app for production to the `dist` folder.
- `npm run lint`: Lints the codebase using ESLint.
- `npm run preview`: Serves the production build locally.


## API Endpoints

The frontend application consumes the following backend API endpoints:

- **`GET /experiences`**: Fetches a list of all available experiences.
- **`GET /experiences/:id`**: Fetches the details and available slots for a specific experience.
- **`POST /bookings`**: Submits a new booking.
- **`POST /promo/validate`**: Validates a promo code.

## License

Distributed under the MIT License. See `LICENSE` for more information.
