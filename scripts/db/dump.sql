-- Create Table for table `users` with auto increment for postgres
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create table `products` with name and price
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Seed some data on products
INSERT INTO
    products (name, price)
VALUES
    ('Product 1', 100.00);

INSERT INTO
    products (name, price)
VALUES
    ('Product 2', 200.00);

INSERT INTO
    products (name, price)
VALUES
    ('Product 3', 300.00);

INSERT INTO
    products (name, price)
VALUES
    ('Product 4', 400.00);

INSERT INTO
    products (name, price)
VALUES
    ('Product 5', 500.00);

INSERT INTO
    products (name, price)
VALUES
    ('Different Product 1', 100.00);

INSERT INTO
    products (name, price)
VALUES
    ('Different Product 2', 200.00);

INSERT INTO
    products (name, price)
VALUES
    ('Different Product 3', 300.00);

-- Seed some data on users
INSERT INTO
    users (username, password)
VALUES
    ('admin', 'supersecretadminpassword');

INSERT INTO
    users (username, password)
VALUES
    ('user', 'password');