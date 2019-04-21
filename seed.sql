INSERT INTO admin (username, password) VALUES ('admin', 'admin');


INSERT INTO users (username, password) VALUES ('teo', 'teo');
INSERT INTO users (username, password) VALUES ('chang', 'chang');
INSERT INTO users (username, password) VALUES ('hao', 'hao');


INSERT INTO orders (ref_no, order_detail, qty, pickup_date, pickup_time, payment, fulfilment, contact) VALUES ('SDXH2345', 'Bubble Tea A', 5, '2019-04-17', '12pm - 1pm', 'unpaid', 'fulfilled', 12345678);

INSERT INTO orders (ref_no, order_detail, qty, pickup_date, pickup_time, payment, fulfilment, contact) VALUES ('CGAT6789', 'Bubble Tea B', 3, '2019-04-17', '6pm - 7pm', 'paid', 'pending', 9876543);

INSERT INTO orders (ref_no, order_detail, qty, pickup_date, pickup_time, payment, fulfilment, contact) VALUES ('QWSE2234', 'Bubble Tea C', 2, '2019-04-17', '6pm - 7pm', 'unpaid', 'pending', 2233344);

INSERT INTO orders (ref_no, order_detail, qty, pickup_date, pickup_time, payment, fulfilment, contact) VALUES ('FTGY5678', 'Bubble Tea A', 1, '2019-04-17', '8am - 9am', 'unpaid', 'pending', 75849231);

INSERT INTO orders (ref_no, order_detail, qty, pickup_date, pickup_time, payment, fulfilment, contact) VALUES ('TVMNI5712', 'Bubble Tea C', 5, '2019-04-17', '12pm - 1pm', 'paid', 'fulfilled', 12345678);

INSERT INTO orders (ref_no, order_detail, qty, pickup_date, pickup_time, payment, fulfilment, contact) VALUES ('OSXY3457', 'Bubble Tea B', 2, '2019-04-17', '6pm - 7pm', 'paid', 'pending', 9876543);

INSERT INTO orders (ref_no, order_detail, qty, pickup_date, pickup_time, payment, fulfilment, contact) VALUES ('XFBT0231', 'Bubble Tea A', 9, '2019-04-17', '6pm - 7pm', 'paid', 'pending', 2233344);

INSERT INTO orders (ref_no, order_detail, qty, pickup_date, pickup_time, payment, fulfilment, contact) VALUES ('BNUY7570', 'Bubble Tea A', 8, '2019-04-17', '8am - 9am', 'unpaid', 'pending', 75849231);

UPDATE orders SET payment='paid' WHERE order_no = 'OD0004';

-- COPY orders TO 'Users/changhaoteo/Desktop/wdi-sg/tea-excel/tea-excel.csv' DELIMITER ',' CSV HEADER;