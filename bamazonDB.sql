CREATE DATABASE bamazonDB;

USE bamazonDB; 

CREATE TABLE products(
	itemID INT NOT NULL,
    productNAME VARCHAR(45) NULL,
    deptNAME VARCHAR(45) NULL,
    priceITEM INT NOT NULL,
    stockQuantity INT NOT NULL,
    PRIMARY KEY (`itemID`)
);

INSERT INTO products (itemID, productNAME, deptNAME, priceITEM, stockQUANTITY) VALUES ('05226','Break Away Halter','Horse Tack', '14.99', '6');
INSERT INTO products (itemID, productNAME, deptNAME, priceITEM, stockQUANTITY) VALUES ('05060','Heavy Rope Lead','Horse Tack', '10.99', '9');
INSERT INTO products (itemID, productNAME, deptNAME, priceITEM, stockQUANTITY) VALUES ('15012','Circuit Dressage Saddle','Horse Tack', '1199.00', '3');
INSERT INTO products (itemID, productNAME, deptNAME, priceITEM, stockQUANTITY) VALUES ('02013','Contoured Dressage Girth','Horse Tack', '49.99', '7');
INSERT INTO products (itemID, productNAME, deptNAME, priceITEM, stockQUANTITY) VALUES ('12976','Micklem Competition Bridle','Horse Tack', '199.99', '4');
INSERT INTO products (itemID, productNAME, deptNAME, priceITEM, stockQUANTITY) VALUES ('03841','England Dressage Reins','Horse Tack', '119.99', '2');
INSERT INTO products (itemID, productNAME, deptNAME, priceITEM, stockQUANTITY) VALUES ('07252','Fillis Stirrup Irons','Horse Tack', '36.99', '8');
INSERT INTO products (itemID, productNAME, deptNAME, priceITEM, stockQUANTITY) VALUES ('06174','Dressage Stirrup Leathers','Horse Tack', '59.99', '5');
INSERT INTO products (itemID, productNAME, deptNAME, priceITEM, stockQUANTITY) VALUES ('19183','Dressage Saddle Pad','Horse Tack', '36.99', '6');
INSERT INTO products (itemID, productNAME, deptNAME, priceITEM, stockQUANTITY) VALUES ('24221','Turnout Sheet','Horse Tack', '74.99', '1');