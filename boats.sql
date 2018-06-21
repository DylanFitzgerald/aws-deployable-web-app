USE boats;

DROP TABLE IF EXISTS ships;
CREATE TABLE ships
(
  ship_id INT NOT NULL AUTO_INCREMENT,
  shipName VARCHAR(50),
  shipType VARCHAR(50),
  PRIMARY KEY ( ship_id )
);

INSERT INTO ships ( shipName, shipType)
   VALUES
   ("USS Missouri", "Battleship");

INSERT INTO ships ( shipName, shipType)
   VALUES
   ("Ole Faithful", "speedboat");

INSERT INTO ships ( shipName, shipType)
   VALUES
   ("Red October", "submarine");