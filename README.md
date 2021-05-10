# Proyecto web basico utilizando contenedores
- Ubuntu

## NodeJS y MySQL:
### Comando para correr el documento de dockercompose
- sudo docker-compose up 


## Angular:
### Comando para compilar el proyecto 
- ng build --prod 
### Comando para construir el contenedor
- sudo docker build -t cliente-docker-example . 
### Comando para correr el contenedor 
- sudo docker run -p 80:80 cliente-docker-example 


## Comandos para inspeccionar en contenedor de mysql
1. sudo docker ps
2. sudo docker exec -it ID_DEL_CONTENEDOR_MYSQL bash
3. mysql -u root -p
4. Escribir la contraseña, 123
5. enter 
6. use EJEMPLO;
7. show tables;


ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123';
