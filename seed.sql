INSERT INTO admin (username, password) VALUES ('admin', 'admin');



INSERT INTO orders (order_no, ref_no, order_detail, qty, pickup_date, pickup_time, payment, fulfilment, contact) VALUES ('OD0001', 'SDXH2345', 'Bubble Tea A', 5, '2019-04-17', '12pm - 1pm', 'unpaid', 'pending', 12345678);

INSERT INTO orders (order_no, ref_no, order_detail, qty, pickup_date, pickup_time, payment, fulfilment, contact) VALUES ('OD0002', 'CGAT6789', 'Bubble Tea B', 3, '2019-04-17', '6pm - 7pm', 'paid', 'pending', 9876543);

INSERT INTO orders (order_no, ref_no, order_detail, qty, pickup_date, pickup_time, payment, fulfilment, contact) VALUES ('OD0003', 'QWSE2234', 'Bubble Tea C', 2, '2019-04-17', '6pm - 7pm', 'unpaid', 'pending', 22233344);

INSERT INTO orders (order_no, ref_no, order_detail, qty, pickup_date, pickup_time, payment, fulfilment, contact) VALUES ('OD0004', 'FTGY5678', 'Bubble Tea A', 1, '2019-04-17', '8am - 9am', 'unpaid', 'pending', 76589231);

UPDATE orders SET payment='paid' WHERE order_no = 'OD0004';