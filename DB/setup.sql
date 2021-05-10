

CREATE TABLE IF NOT EXISTS Usuario (
  `IdUsuario` INT NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(45) NOT NULL,
  `Telefono` INT NOT NULL,
  `Correo` VARCHAR(45) NOT NULL,
  `Contrasena` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`IdUsuario`))
ENGINE = InnoDB;

insert into Usuario(IdUsuario,Nombre,Telefono,Correo,Contrasena) values(null,'mario','12345678','mario@gmail.com','mario123');
insert into Usuario(IdUsuario,Nombre,Telefono,Correo,Contrasena) values(null,'sofia','88765433','sofia@gmail.com','sofia123');
insert into Usuario(IdUsuario,Nombre,Telefono,Correo,Contrasena) values(null,'ramiro','88997755','ramiro@hotmail.com','ramiro123');
insert into Usuario(IdUsuario,Nombre,Telefono,Correo,Contrasena) values(null,'alejandra','23443321','ale@hotmail.com','ale123');
insert into Usuario(IdUsuario,Nombre,Telefono,Correo,Contrasena) values(null,'lucia','11775421','lucia@hotmail.com','lucia123');




-- -----------------------------------------------------
-- Table `mydb`.`Publicacion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Pais (
  `IdPais` INT NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(45) NOT NULL,
  `Capital` VARCHAR(45) NOT NULL,
  `Moneda` VARCHAR(10) NOT NULL,
  PRIMARY KEY (`IdPais`))
ENGINE = InnoDB;

insert into Pais(IdPais,Nombre,Capital,Moneda) values (null,"Guatemala","C.Guatemala","Quetzal");
insert into Pais(IdPais,Nombre,Capital,Moneda) values (null,"EE.UU","EE.UU","Dolar");
insert into Pais(IdPais,Nombre,Capital,Moneda) values (null,"Mexico","Mexico DF","Peso");