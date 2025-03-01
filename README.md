# Personal Website

A modern, full-stack personal website and portfolio application built with Next.js (frontend) and Django (backend). This project serves as a platform to showcase your resume, portfolio, and personal projects with a clean, responsive interface.

## Table of Contents

- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Configuration](#configuration)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [Testing](#testing)
- [License](#license)
- [Acknowledgments](#acknowledgments)
- [Troubleshooting](#troubleshooting)

## Project Structure

```
personal_website/
├── backend/                 # Django backend
│   ├── api/                 # Django REST API app
│   ├── personal_website/    # Django project settings
│   ├── compose/             # Docker configuration for Django
│   ├── requirements/        # Python dependencies
│   └── manage.py            # Django management script
├── frontend/                # Next.js frontend
│   ├── compose/             # Docker configuration for Next.js
│   ├── public/              # Static assets
│   ├── src/                 # Source code
│   └── package.json         # Node.js dependencies
├── docker-compose.local.yml     # Docker Compose for local development
├── docker-compose.production.yml # Docker Compose for production
└── docker-compose.staging.yml   # Docker Compose for staging
```

## Prerequisites

- [Docker](https://www.docker.com/get-started) and [Docker Compose](https://docs.docker.com/compose/install/)
- [Node.js](https://nodejs.org/) (v20 or later) and [npm](https://www.npmjs.com/) (for local frontend development)
- [Python](https://www.python.org/) (v3.11 or later) (for local backend development)

## Installation

### Using Docker (Recommended)

1. Clone the repository:

   ```bash
   git clone https://github.com/gidorah/personal_website.git
   cd personal_website
   ```

2. Create required environment files:

   ```bash
   # Create backend environment directory
   mkdir -p backend/.envs/.local

   # Create Django environment file
   echo "DEBUG=True
   SECRET_KEY=your-secret-key
   DJANGO_ALLOWED_HOSTS=localhost 127.0.0.1
   CORS_ALLOWED_ORIGINS=http://localhost:3000" > backend/.envs/.local/.django
   ```

3. Start the Docker containers:
   ```bash
   docker-compose -f docker-compose.local.yml up
   ```

### Manual Installation

#### Backend (Django)

1. Navigate to the backend directory:

   ```bash
   cd personal_website/backend
   ```

2. Create a virtual environment and activate it:

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install requirements:

   ```bash
   pip install -r requirements/local.txt
   ```

4. Set up environment variables:

   ```bash
   export DEBUG=True
   export SECRET_KEY=your-secret-key
   export DJANGO_ALLOWED_HOSTS=localhost,127.0.0.1
   export CORS_ALLOWED_ORIGINS=http://localhost:3000
   ```

5. Run migrations:
   ```bash
   python manage.py migrate
   ```

#### Frontend (Next.js)

1. Navigate to the frontend directory:

   ```bash
   cd personal_website/frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Running the Application

#### Using Docker

```bash
docker-compose -f docker-compose.local.yml up
```

- Access the frontend at: http://localhost:3000
- Access the backend API at: http://localhost:8000/api/
- API documentation at: http://localhost:8000/api/docs/

#### Running Locally

**Backend:**

```bash
cd backend
python manage.py runserver
```

**Frontend:**

```bash
cd frontend
npm run dev
```

### Code Examples

#### Fetching Data from the API

```typescript
// Example of fetching data in a Next.js component
import { useEffect, useState } from 'react';

function ProfilePage() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await fetch('http://localhost:8000/api/profile/');
        const data = await response.json();
        setProfile(data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchProfile();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!profile) return <div>No profile data found</div>;

  return (
    <div>
      <h1>{profile.name}</h1>
      <p>{profile.bio}</p>
      {/* Other profile information */}
    </div>
  );
}
```

## Features

- **Modern Frontend**: Built with Next.js 15 and React 19 with TypeScript support
- **Responsive Design**: Fully responsive UI using Tailwind CSS v4
- **RESTful API**: Django REST Framework backend
- **API Documentation**: Automatic API documentation with DRF-Spectacular
- **Containerization**: Docker and Docker Compose setup for easy deployment
- **Development Environment**: Configured for local, staging, and production environments
- **Cross-Origin Support**: Configured CORS for secure frontend-backend communication

## Configuration

### Environment Variables

#### Backend (Django)

Create a `.env` file in the `backend` directory:

```bash
# Django settings
DEBUG=True
SECRET_KEY=your-secret-key
DJANGO_ALLOWED_HOSTS=localhost,127.0.0.1
CORS_ALLOWED_ORIGINS=http://localhost:3000

# Database settings (if using external database)
DATABASE_URL=sqlite:///data/db.sqlite3
```

#### Frontend (Next.js)

Create a `.env.local` file in the `frontend` directory:

```bash
# API URL
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

### Docker Configuration

The project includes Docker Compose files for different environments:

- `docker-compose.local.yml`: Local development environment
- `docker-compose.staging.yml`: Staging environment
- `docker-compose.production.yml`: Production environment

## API Documentation

The API documentation is automatically generated using DRF-Spectacular and can be accessed at:

- Swagger UI: http://localhost:8000/api/docs/
- ReDoc: http://localhost:8000/api/redoc/
- OpenAPI Schema: http://localhost:8000/api/schema/

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style

- **Backend**: Follow PEP 8 style guide for Python code
- **Frontend**: Follow the ESLint configuration included in the project

## Testing

### Backend Tests

```bash
# Run tests
cd backend
python manage.py test

# Run tests with coverage
coverage run --source='.' manage.py test
coverage report
```

### Frontend Tests

```bash
# Run tests
cd frontend
npm test

# Run tests with coverage
npm test -- --coverage
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework for the Web
- [Django](https://www.djangoproject.com/) - The Web framework for perfectionists with deadlines
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework

## Troubleshooting

### Common Issues

#### Docker Containers Not Starting

Check if ports 3000 or 8000 are already in use:

```bash
# Check for processes using port 3000
lsof -i :3000
# Check for processes using port 8000
lsof -i :8000
```

#### Node Modules Volume Issues

If you encounter issues with node_modules in Docker:

```bash
# Remove the node_modules volume
docker-compose -f docker-compose.local.yml down
# Remove node_modules folder
rm -rf frontend/node_modules
# Start again
docker-compose -f docker-compose.local.yml up
```

#### Database Migrations

If your database is out of sync:

```bash
# Run migrations within the Django container
docker-compose -f docker-compose.local.yml exec django python manage.py migrate
```

---

For more information or support, please open an issue on the repository.
