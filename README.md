# PrimeStone Full-Stack Application

This repository contains the full-stack application consisting of a **Django** backend and a **React** frontend.

## 🏗 Project Architecture

The project is split into two main components:

1.  **Backend:** A RESTful API built with Django and Django REST Framework. It handles data persistence, authentication, and business logic.
2.  **Frontend:** A modern single-page application built with React and Vite. It provides the user interface and communicates with the backend via asynchronous HTTP requests (Axios).

## Project Structure

- `/Backend`: Django REST Framework API.
- `/PrimeStone`: React.js application (Vite-powered).

---

## 🛠 Technologies Used

- **Backend:** Django, Django REST Framework, SQLite/PostgreSQL.
- **Frontend:** React, Vite, Axios, CSS/Sass.

---

## Backend (Django)

### Prerequisites

- Python 3.x
- pip
- virtualenv

### Setup

1. Navigate to the backend directory: `cd backend`
2. Create a virtual environment: `python -m venv venv`
3. Activate the environment:
   - Windows: `venv\Scripts\activate`
   - macOS/Linux: `source venv/bin/activate`
4. Install dependencies: `pip install -r requirements.txt`
5. Run migrations: `python manage.py migrate`
6. Start the server: `python manage.py runserver`

The API will be available at `http://127.0.0.1:8000/`.

---

## ⚛️ Frontend (React)

### Prerequisites

- Node.js (v14+)
- npm or yarn

### Setup

1. Navigate to the frontend directory: `cd PrimeStone`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`

The app will be available at `http://localhost:5173/` (default Vite port).

---

## 🔄 Integration

By default, the React frontend is configured to communicate with the Django backend at `http://127.0.0.1:8000/`. If you change the backend port, ensure you update the API base URL in your frontend Axios configuration.

## 📝 License

This project is licensed under the MIT License.
