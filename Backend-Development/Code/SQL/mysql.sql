-- Drop the database if it exists and create a new one
DROP DATABASE IF EXISTS BACKEND_DB;
CREATE DATABASE BACKEND_DB;

-- Use the new database
USE BACKEND_DB;

-- Drop the table if it exists (though it's redundant right after creating the database)
DROP TABLE IF EXISTS USERS;

-- Create the USERS table
CREATE TABLE USERS (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    USER_NAME VARCHAR(50) NOT NULL,
    EMAIL VARCHAR(50) NOT NULL,
    CREATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert a row into the USERS table
INSERT INTO USERS (USER_NAME, EMAIL) VALUES('bill.gates', 'bill.gates@microsoft.com');
INSERT INTO USERS (USER_NAME, EMAIL) VALUES('elon.musk', 'elon.musk@tesla.com');

-- Select all rows from the USERS table
SELECT * FROM USERS;
