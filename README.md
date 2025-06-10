# Test Task by Kunjan

A React-based web application featuring a multi-step form and product display system.

## Features

- **Multi-Step Form**
  - 3-step form with validation
  - Progress tracking
  - Image upload with preview
  - Form data summary

- **Product Display**
  - Responsive product grid
  - Product cards with ratings
  - Clean and modern UI

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- Shadcn UI
- Axios
- Vite

## Getting Started

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd test-task-by-kunjan
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```
   VITE_API_BASE_URL=your_api_base_url
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

## Project Structure

```
src/
├── components/
│   ├── card/
│   ├── stepper/
│   └── ui/
├── pages/
├── utils/
│   ├── api/
│   └── types/
└── lib/
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Dependencies

### Core
- react
- react-dom
- react-router-dom
- axios
- typescript

### UI
- tailwindcss
- @radix-ui/react-*
- lucide-react
- class-variance-authority
- tailwind-merge

## Development

- Built with Vite
- Uses ESLint for code linting
- TypeScript for type safety
- Tailwind CSS for styling
- Shadcn UI for components
