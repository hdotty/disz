INSERT INTO person (id, first_name, last_name, email, admin, password)
SELECT 1, 'First name', 'Last name', 'address@email.com', true, '...'
WHERE NOT EXISTS (SELECT * FROM person);