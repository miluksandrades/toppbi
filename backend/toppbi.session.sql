/* CREATE FUNCTION change_trigger() RETURNS trigger AS $$
       BEGIN
         IF TG_OP = 'INSERT'
         THEN INSERT INTO logging.t_history (
                tabname, schemaname, operation, new_val
              ) VALUES (
                TG_RELNAME, TG_TABLE_SCHEMA, TG_OP, row_to_json(NEW)
              );
           RETURN NEW;
         ELSIF  TG_OP = 'UPDATE'
         THEN
           INSERT INTO logging.t_history (
             tabname, schemaname, operation, new_val, old_val
           )
           VALUES (TG_RELNAME, TG_TABLE_SCHEMA, TG_OP, row_to_json(NEW), row_to_json(OLD));
           RETURN NEW;
         ELSIF TG_OP = 'DELETE'
         THEN
           INSERT INTO logging.t_history
             (tabname, schemaname, operation, old_val)
             VALUES (
               TG_RELNAME, TG_TABLE_SCHEMA, TG_OP, row_to_json(OLD)
             );
             RETURN OLD;
         END IF;
       END;
$$ LANGUAGE 'plpgsql' SECURITY DEFINER; */

CREATE TRIGGER t BEFORE INSERT OR UPDATE OR DELETE ON radios
        FOR EACH ROW EXECUTE PROCEDURE change_trigger();
		
--select *from logging.t_history	

/* INSERT INTO "ocorrencia" (dtinicio, dtnormal, motivo, fkoperadora, fktiporeg) VALUES
    ('2020-09-23 08:45:00','2020-09-23 11:21:00', 'x', 9,4),
    ('2020-09-25 09:24:00','2020-09-25 14:00:00', 'x', 9,4),
    ('2020-10-02 12:33:00','2020-10-02 14:10:00', 'x', 9,2),
    ('2020-10-04 14:15:00','2020-10-04 19:00:00', 'x', 9,3),
    ('2020-10-04 14:15:00','2020-10-04 19:00:00', 'x', 8,3),
    ('2020-09-12 10:30:00','2020-09-25 21:00:00', 'x', 8,2),
    ('2020-09-16 09:21:00','2020-09-16 09:30:00', 'x', 7,3),
    ('2020-09-16 13:42:00','2020-09-19 21:15:00', 'x', 7,2),
    ('2020-09-21 13:18:00','2020-09-25 21:00:00', 'x', 7,2),
    ('2020-09-28 14:39:00','2020-09-28 16:48:00', 'x', 7,3),
    ('2020-09-29 08:24:00','2020-09-29 13:21:00', 'x', 7,3),
    ('2020-09-30 15:33:00','2020-09-30 22:54:00', 'x', 7,2),
    ('2020-10-02 12:33:00','2020-10-02 14:10:00', 'x', 7,2),
    ('2020-10-04 14:15:00','2020-10-04 19:00:00', 'x', 7,3),
    ('2020-09-28 14:45:00','2020-09-29 11:39:00', 'x', 10,3),
    ('2020-09-30 09:30:00','2020-09-30 13:51:00', 'x', 10,2),
    ('2020-09-30 15:32:00','2020-09-30 15:57:00', 'x', 10,4),
    ('2020-09-30 19:00:00','2020-09-30 19:12:00', 'x', 10,3),
    ('2020-10-01 01:30:00','2020-10-01 02:06:00', 'x', 10,3),
    ('2020-10-04 14:15:00','2020-10-04 15:30:00', 'x', 10,3),
    ('2020-10-05 08:24:00','2020-10-05 08:45:00', 'x', 10,4); */

/* insert into agente (atendente) values
('SUPORTE N1'),
('COMERCIAL'),
('FINANCEIRO'),
('KAROL'),
('ALINE'),
('MARIA'),
('LEVI'),
('JESSICA'),
('RETENÇÃO'); */
/* INSERT INTO atendimento (fkagente, dtatendimento, qtde, canal) VALUES

    (1,'2020-09-01',30,1),
    (1,'2020-09-02',15,1),
    (1,'2020-09-03',26,1),
    (1,'2020-09-04',12,1),
    (1,'2020-09-05',4,1),
    (1,'2020-09-08',36,1),
    (1,'2020-09-09',12,1),
    (1,'2020-09-10',23,1),
    (1,'2020-09-11',15,1),
    (1,'2020-09-12',8,1),
    (1,'2020-09-13',13,1),
    (1,'2020-09-14',27,1),
    (1,'2020-09-15',1,1),
    (1,'2020-09-16',18,1),
    (1,'2020-09-17',9,1),
    (1,'2020-09-18',5,1),
    (1,'2020-09-19',5,1),
    (1,'2020-09-20',6,1),
    (1,'2020-09-21',15,1),
    (1,'2020-09-22',18,1),
    (1,'2020-09-23',7,1),
    (1,'2020-09-24',7,1),
    (1,'2020-09-25',7,1),
    (1,'2020-09-26',8,1),
    (1,'2020-09-27',3,1),
    (1,'2020-09-28',15,1),
    (1,'2020-09-29',4,1),
    (1,'2020-09-30',16,1),
    (2,'2020-09-01',11,1),
    (2,'2020-09-02',7,1),
    (2,'2020-09-03',18,1),
    (2,'2020-09-04',15,1),
    (2,'2020-09-05',8,1),
    (2,'2020-09-07',2,1),
    (2,'2020-09-08',19,1),
    (2,'2020-09-09',14,1),
    (2,'2020-09-10',18,1),
    (2,'2020-09-11',10,1),
    (2,'2020-09-12',4,1),
    (2,'2020-09-13',2,1),
    (2,'2020-09-14',18,1),
    (2,'2020-09-15',15,1),
    (2,'2020-09-16',13,1),
    (2,'2020-09-17',13,1),
    (2,'2020-09-18',10,1),
    (2,'2020-09-19',11,1),
    (2,'2020-09-21',24,1),
    (2,'2020-09-22',23,1),
    (2,'2020-09-23',14,1),
    (2,'2020-09-24',10,1),
    (2,'2020-09-25',7,1),
    (2,'2020-09-26',4,1),
    (2,'2020-09-28',14,1),
    (2,'2020-09-29',11,1),
    (2,'2020-09-30',5,1),
    (3,'2020-09-01',28,1),
    (3,'2020-09-02',18,1),
    (3,'2020-09-03',30,1),
    (3,'2020-09-04',33,1),
    (3,'2020-09-05',8,1),
    (3,'2020-09-08',51,1),
    (3,'2020-09-09',73,1),
    (3,'2020-09-10',77,1),
    (3,'2020-09-11',80,1),
    (3,'2020-09-12',12,1),
    (3,'2020-09-14',71,1),
    (3,'2020-09-15',41,1),
    (3,'2020-09-16',51,1),
    (3,'2020-09-17',19,1),
    (3,'2020-09-18',25,1),
    (3,'2020-09-19',15,1),
    (3,'2020-09-20',2,1),
    (3,'2020-09-21',26,1),
    (3,'2020-09-22',23,1),
    (3,'2020-09-23',19,1),
    (3,'2020-09-24',32,1),
    (3,'2020-09-25',28,1),
    (3,'2020-09-26',6,1),
    (3,'2020-09-27',2,1),
    (3,'2020-09-28',18,1),
    (3,'2020-09-29',15,1),
    (3,'2020-09-30',28,1),
    (4,'2020-09-01',85,1),
    (4,'2020-09-02',68,1),
    (4,'2020-09-03',81,1),
    (4,'2020-09-04',62,1),
    (4,'2020-09-05',63,1),
    (4,'2020-09-06',17,1),
    (4,'2020-09-07',94,1),
    (4,'2020-09-08',94,1),
    (4,'2020-09-09',116,1),
    (4,'2020-09-10',144,1),
    (4,'2020-09-11',125,1),
    (4,'2020-09-12',37,1),
    (4,'2020-09-14',170,1),
    (4,'2020-09-15',110,1),
    (4,'2020-09-16',125,1),
    (4,'2020-09-17',96,1),
    (4,'2020-09-18',114,1),
    (4,'2020-09-19',18,1),
    (4,'2020-09-20',11,1),
    (4,'2020-09-21',69,1),
    (4,'2020-09-22',70,1),
    (4,'2020-09-23',108,1),
    (4,'2020-09-24',85,1),
    (4,'2020-09-25',97,1),
    (4,'2020-09-26',44,1),
    (4,'2020-09-27',2,1),
    (4,'2020-09-28',83,1),
    (4,'2020-09-29',87,1),
    (4,'2020-09-30',79,1),
    (5,'2020-09-01',1,1),
    (5,'2020-09-04',1,1),
    (5,'2020-09-14',10,1),
    (5,'2020-09-15',5,1),
    (5,'2020-09-16',5,1),
    (5,'2020-09-21',2,1),
    (5,'2020-09-22',5,1),
    (5,'2020-09-23',4,1),
    (5,'2020-09-24',2,1),
    (5,'2020-09-25',5,1),
    (5,'2020-09-26',6,1),
    (5,'2020-09-28',10,1),
    (5,'2020-09-29',4,1),
    (5,'2020-09-30',16,1),
    (6,'2020-09-01',74,1),
    (6,'2020-09-02',66,1),
    (6,'2020-09-03',76,1),
    (6,'2020-09-04',60,1),
    (6,'2020-09-05',3,1),
    (6,'2020-09-07',2,1),
    (6,'2020-09-08',91,1),
    (6,'2020-09-09',146,1),
    (6,'2020-09-10',175,1),
    (6,'2020-09-11',160,1),
    (6,'2020-09-12',68,1),
    (6,'2020-09-13',36,1),
    (6,'2020-09-14',23,1),
    (6,'2020-09-15',116,1),
    (6,'2020-09-16',100,1),
    (6,'2020-09-17',95,1),
    (6,'2020-09-18',78,1),
    (6,'2020-09-19',61,1),
    (6,'2020-09-21',77,1),
    (6,'2020-09-22',80,1),
    (6,'2020-09-23',90,1),
    (6,'2020-09-24',69,1),
    (6,'2020-09-25',50,1),
    (6,'2020-09-26',22,1),
    (6,'2020-09-27',16,1),
    (6,'2020-09-28',40,1),
    (6,'2020-09-29',81,1),
    (6,'2020-09-30',61,1),
    (7,'2020-09-01',17,1),
    (7,'2020-09-02',11,1),
    (7,'2020-09-03',18,1),
    (7,'2020-09-04',10,1),
    (7,'2020-09-05',13,1),
    (7,'2020-09-06',7,1),
    (7,'2020-09-07',21,1),
    (7,'2020-09-08',3,1),
    (7,'2020-09-09',10,1),
    (7,'2020-09-10',19,1),
    (7,'2020-09-11',12,1),
    (7,'2020-09-12',11,1),
    (7,'2020-09-14',19,1),
    (7,'2020-09-15',18,1),
    (7,'2020-09-16',14,1),
    (7,'2020-09-17',4,1),
    (7,'2020-09-18',2,1),
    (7,'2020-09-21',9,1),
    (7,'2020-09-22',15,1),
    (7,'2020-09-23',11,1),
    (7,'2020-09-24',12,1),
    (7,'2020-09-25',8,1),
    (7,'2020-09-26',2,1),
    (7,'2020-09-28',13,1),
    (7,'2020-09-29',5,1),
    (7,'2020-09-30',6,1),
    (8,'2020-09-01',19,1),
    (8,'2020-09-02',8,1),
    (8,'2020-09-03',13,1),
    (8,'2020-09-04',12,1),
    (8,'2020-09-05',6,1),
    (8,'2020-09-06',1,1),
    (8,'2020-09-07',1,1),
    (8,'2020-09-08',21,1),
    (8,'2020-09-09',13,1),
    (8,'2020-09-10',16,1),
    (8,'2020-09-11',10,1),
    (8,'2020-09-12',13,1),
    (8,'2020-09-13',2,1),
    (8,'2020-09-14',15,1),
    (8,'2020-09-15',20,1),
    (8,'2020-09-16',15,1),
    (8,'2020-09-17',11,1),
    (8,'2020-09-18',14,1),
    (8,'2020-09-19',2,1),
    (8,'2020-09-20',1,1),
    (8,'2020-09-21',17,1),
    (8,'2020-09-22',10,1),
    (8,'2020-09-23',17,1),
    (8,'2020-09-24',16,1),
    (8,'2020-09-25',10,1),
    (8,'2020-09-28',5,1),
    (8,'2020-09-29',12,1),
    (8,'2020-09-30',6,1),
    (9,'2020-09-01',5,1),
    (9,'2020-09-02',1,1),
    (9,'2020-09-03',1,1),
    (9,'2020-09-04',2,1),
    (9,'2020-09-08',3,1),
    (9,'2020-09-09',4,1),
    (9,'2020-09-10',6,1),
    (9,'2020-09-11',1,1),
    (9,'2020-09-12',2,1),
    (9,'2020-09-14',1,1),
    (9,'2020-09-15',2,1),
    (9,'2020-09-16',5,1),
    (9,'2020-09-17',2,1),
    (9,'2020-09-18',4,1),
    (9,'2020-09-22',2,1),
    (9,'2020-09-23',3,1),
    (9,'2020-09-24',1,1),
    (9,'2020-09-28',4,1),
    (9,'2020-09-30',1,1),
    (1,'2020-09-05 00:00:00',1,2),
    (1,'2020-09-27 00:00:00',1,2),
    (4,'2020-09-01 00:00:00',2,2),
    (4,'2020-09-02 00:00:00',3,2),
    (4,'2020-09-03 00:00:00',1,2),
    (4,'2020-09-04 00:00:00',1,2),
    (4,'2020-09-05 00:00:00',8,2),
    (4,'2020-09-07 00:00:00',2,2),
    (4,'2020-09-08 00:00:00',4,2),
    (4,'2020-09-09 00:00:00',2,2),
    (4,'2020-09-10 00:00:00',5,2),
    (4,'2020-09-11 00:00:00',4,2),
    (4,'2020-09-12 00:00:00',3,2),
    (4,'2020-09-13 00:00:00',1,2),
    (4,'2020-09-14 00:00:00',2,2),
    (4,'2020-09-15 00:00:00',1,2),
    (4,'2020-09-16 00:00:00',6,2),
    (4,'2020-09-17 00:00:00',3,2),
    (4,'2020-09-18 00:00:00',1,2),
    (4,'2020-09-21 00:00:00',2,2),
    (4,'2020-09-22 00:00:00',3,2),
    (4,'2020-09-23 00:00:00',2,2),
    (4,'2020-09-24 00:00:00',1,2),
    (4,'2020-09-25 00:00:00',5,2),
    (4,'2020-09-26 00:00:00',4,2),
    (4,'2020-09-28 00:00:00',1,2),
    (4,'2020-09-29 00:00:00',5,2),
    (6,'2020-09-01 00:00:00',2,2),
    (6,'2020-09-02 00:00:00',3,2),
    (6,'2020-09-03 00:00:00',4,2),
    (6,'2020-09-04 00:00:00',2,2),
    (6,'2020-09-08 00:00:00',2,2),
    (6,'2020-09-09 00:00:00',3,2),
    (6,'2020-09-10 00:00:00',6,2),
    (6,'2020-09-11 00:00:00',5,2),
    (6,'2020-09-12 00:00:00',3,2),
    (6,'2020-09-15 00:00:00',3,2),
    (6,'2020-09-16 00:00:00',6,2),
    (6,'2020-09-19 00:00:00',1,2),
    (6,'2020-09-21 00:00:00',2,2),
    (6,'2020-09-22 00:00:00',3,2),
    (6,'2020-09-23 00:00:00',3,2),
    (6,'2020-09-24 00:00:00',3,2),
    (6,'2020-09-25 00:00:00',1,2),
    (6,'2020-09-26 00:00:00',3,2),
    (6,'2020-09-27 00:00:00',2,2),
    (6,'2020-09-29 00:00:00',1,2),
    (6,'2020-09-30 00:00:00',2,2); */
    