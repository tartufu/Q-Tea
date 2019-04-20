CREATE TABLE IF NOT EXISTS orders (
	id SERIAL PRIMARY KEY,
	order_no TEXT,
	ref_no TEXT,
	order_detail TEXT,
	qty INTEGER,
	pickup_date DATE,
	pickup_time TEXT,
	payment TEXT,
	fulfilment TEXT,
	contact VARCHAR(8)
);

CREATE TABLE IF NOT EXISTS admin (
	id SERIAL PRIMARY KEY,
	username TEXT,
	password TEXT
);

CREATE TABLE IF NOT EXISTS users (
	id SERIAL PRIMARY KEY,
	username TEXT,
	password TEXT
);

-- CREATE TABLE IF NOT EXISTS test (
-- 	id SERIAL PRIMARY KEY,
-- 	user_id INTEGER,
-- 	tweets TEXT
-- );