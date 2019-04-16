CREATE TABLE IF NOT EXISTS orders (
	id SERIAL PRIMARY KEY,
	order_no TEXT,
	order_detail TEXT,
	qty INTEGER,
	pickup_time TEXT,
	status TEXT
);

CREATE TABLE IF NOT EXISTS admin (
	id SERIAL PRIMARY KEY,
	username TEXT,
	password TEXT
);

-- CREATE TABLE IF NOT EXISTS test (
-- 	id SERIAL PRIMARY KEY,
-- 	user_id INTEGER,
-- 	tweets TEXT
-- );