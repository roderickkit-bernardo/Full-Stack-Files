-- Drop the table if it exists (though it's redundant right after creating the database)
DROP TABLE IF EXISTS USERS;

-- Create the USERS table
CREATE TABLE USERS (
    ID INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    USER_NAME TEXT NOT NULL,
    EMAIL TEXT NOT NULL,
    CREATED_AT TEXT DEFAULT (datetime('now', 'localtime'))
);

-- Insert a row into the USERS table
INSERT INTO USERS (USER_NAME, EMAIL) VALUES('bill.gates', 'bill.gates@microsoft.com');
INSERT INTO USERS (USER_NAME, EMAIL) VALUES('elon.musk', 'elon.musk@tesla.com');

-- Select all rows from the USERS table
SELECT * FROM USERS;