<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

# 🚀 Register point API

Welcome to the operating point record api! This project is designed to manage user registrations and time logs using GraphQL, NestJS, PostgreSQL, Docker, and TypeORM.

## 📚 Table of Contents

- [Features](#-features)
- [Technologies](#-technologies-used)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Running the Application](#-running-the-application)
- [Using Docker](#-using-docker)
- [GraphQL Playground](#-graphql-playground)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

- User registration and authentication
- Time logging for registered users
- GraphQL API for flexible queries and mutations
- Secure password handling with bcrypt
- JWT authentication for secure access

## 🌐 Technologies Used

This project was developed with the following technologies:

- NestJS
- TypeScript
- GraphQL
- Apollo
- TypeORM

## 🛠 Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (v6 or higher)
- [Docker](https://www.docker.com/)

## 📦 Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/LeoCamisa/register-api.git
    cd register-api
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the root of the project and add the following variables:

    ```dotenv
    # Database configuration
    POSTGRES_HOST=
    POSTGRES_PORT=
    POSTGRES_USER=
    POSTGRES_PASSWORD=
    POSTGRES_DB=

    # JWT configuration
    JWT_SECRET=
    JWT_EXPIRATION_TIME=3600s

    # Application configuration
    APP_PORT=3000
    ```

## 🏃🏻‍♂️ Running the Application

### Using Docker

1. **Build and start the Docker containers:**

    ```bash
    docker-compose up --build
    ```


2. **Run the application:**

    ```bash
    npm run start:dev
    ```

## 🎮 GraphQL Playground

To interact with the GraphQL API, navigate to `http://localhost:3000/graphql` in your browser. Here you can test queries and mutations.

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request if you would like to contribute to this project.

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
