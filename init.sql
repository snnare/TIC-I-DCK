CREATE TABLE `Tiendita`.`productos` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL DEFAULT NULL,
  `description` VARCHAR(45) NULL DEFAULT NULL,
  `price` DOUBLE NULL DEFAULT NULL,
  `stock` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO `Tiendita`.`productos` (`name`, `description`, `price`, `stock`) VALUES ('Coca Cola','Refresco de cola','30','90');
INSERT INTO `Tiendita`.`productos` (`name`, `description`, `price`, `stock`) VALUES ('Pepsi','Refresco de cola','25','70');
INSERT INTO `Tiendita`.`productos` (`name`, `description`, `price`, `stock`) VALUES ('Fanta','Refresco de naranja','20','100');
INSERT INTO `Tiendita`.`productos` (`name`, `description`, `price`, `stock`) VALUES ('Sprite','Refresco de limon','18','156');
INSERT INTO `Tiendita`.`productos` (`name`, `description`, `price`, `stock`) VALUES ('Manzana','Refresco de manzana','50','32');
INSERT INTO `Tiendita`.`productos` (`name`, `description`, `price`, `stock`) VALUES ('Jumex','Jugo de manzana','35','176');
INSERT INTO `Tiendita`.`productos` (`name`, `description`, `price`, `stock`) VALUES ('Jumex','Jugo de naranja','24','145');
INSERT INTO `Tiendita`.`productos` (`name`, `description`, `price`, `stock`) VALUES ('Jumex','Jugo de uva','24','20');
INSERT INTO `Tiendita`.`productos` (`name`, `description`, `price`, `stock`) VALUES ('Jumex','Jugo de mango','24','91');
INSERT INTO `Tiendita`.`productos` (`name`, `description`, `price`, `stock`) VALUES ('Jumex','Jugo de guayaba','24','234');
INSERT INTO `Tiendita`.`productos` (`name`, `description`, `price`, `stock`) VALUES ('Jumex','Jugo de pera','24','36');
INSERT INTO `Tiendita`.`productos` (`name`, `description`, `price`, `stock`) VALUES ('Jumex','Jugo de durazno','24','100');
INSERT INTO `Tiendita`.`productos` (`name`, `description`, `price`, `stock`) VALUES ('Jumex','Jugo de piña','24','111');
INSERT INTO `Tiendita`.`productos` (`name`, `description`, `price`, `stock`) VALUES ('Jumex','Jugo de toronja','24','171');
INSERT INTO `Tiendita`.`productos` (`name`, `description`, `price`, `stock`) VALUES ('Jumex','Jugo de tamarindo','24','34');
INSERT INTO `Tiendita`.`productos` (`name`, `description`, `price`, `stock`) VALUES ('Jumex','Jugo de mango','24','84');
INSERT INTO `Tiendita`.`productos` (`name`, `description`, `price`, `stock`) VALUES ('Gatorade','Bebida energetica','45','78');
