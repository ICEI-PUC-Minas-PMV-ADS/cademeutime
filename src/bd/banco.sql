CREATE SCHEMA `cade_meu_time` ; 

USE cade_meu_time;

create table Usuario
(id_usuario int NOT NULL AUTO_INCREMENT,
nome_usuario varchar(200),
email varchar(50),
senha varchar(20),
PRIMARY KEY (id_usuario));

create table Esporte
(id_esporte int NOT NULL AUTO_INCREMENT,
modalidade varchar(50),
qtdPessoas int,
local varchar(100),
PRIMARY KEY (id_esporte));

create table Evento
(id_evento int NOT NULL AUTO_INCREMENT,
nome_evento varchar(50),
tipoEsporte varchar(50),
data DATE,
horario TIME,
local varchar(100),
PRIMARY KEY (id_evento));