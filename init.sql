-- Create table user
CREATE TABLE IF NOT EXISTS "user" (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL
);

-- Create table registered_time
CREATE TABLE IF NOT EXISTS "registered_time" (
    id SERIAL PRIMARY KEY,
    time_registered TIMESTAMP NOT NULL,
    userId INTEGER NOT NULL,
    CONSTRAINT fk_user
       FOREIGN KEY(userId)
       REFERENCES "user"(id)
);

-- Insert the administrator user
INSERT INTO "user" (name, email, password, role)
VALUES ('Administrador', 'admin@efficlin.com.br', 'pw123', 'admin');