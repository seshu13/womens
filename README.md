# Trebound Women's Day Special

A modern, responsive landing page for Trebound's Women's Day team building activities.

## Features

- Modern, responsive design
- Interactive activity selection
- Smooth animations and transitions
- Mobile-first approach
- SEO optimized
- Accessible navigation

## Tech Stack

- Nuxt.js 3
- Vue.js 3
- Tailwind CSS
- Headless UI
- TypeScript

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/seshu13/womens.git
cd womens
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Project Structure

- `components/` - Vue components
- `pages/` - Application pages
- `public/` - Static assets
- `composables/` - Reusable Vue composables
- `assets/` - Uncompiled assets

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is proprietary and confidential. All rights reserved.

## Docker Deployment

You can deploy this application using Docker in two ways:

### Using Docker Compose (Recommended)

```bash
# Build and start the application
docker-compose up --build

# Run in detached mode
docker-compose up -d

# Stop the application
docker-compose down
```

### Using Docker Directly

```bash
# Build the image
docker build -t trebound .

# Run the container
docker run -p 3000:3000 trebound

# Run in detached mode
docker run -d -p 3000:3000 trebound
```

The application will be available at http://localhost:3000

### Environment Variables

- `PORT`: Port to run the application (default: 3000)
- `HOST`: Host to bind to (default: 0.0.0.0)
- `NODE_ENV`: Node environment (default: production) 