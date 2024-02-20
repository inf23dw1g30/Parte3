Drop schema if exists `digimon`;
Create schema digimon;
use digimon;



DROP TABLE IF EXISTS `Digimon`;
CREATE TABLE `Digimon` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(512) NOT NULL,
  `tipo1` varchar(512) NOT NULL,
  `tipo2` varchar(512) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
insert into `Digimon` (nome, tipo1, tipo2) values ("Agumon", "vaccine", "reptile");
insert into `Digimon` (nome, tipo1, tipo2) values ("Andromon", "vaccine", "android");
insert into `Digimon` (nome, tipo1, tipo2) values ("Candlemon", "data", "fire");
insert into `Digimon` (nome, tipo1, tipo2) values ("Pteromon", "data", "Bird Dragon");
insert into `Digimon` (nome, tipo1, tipo2) values ("Aruraumon", "data", "vegetation");
insert into `Digimon` (nome, tipo1, tipo2) values ("DoKunemon", "virus", "larva");
insert into `Digimon` (nome, tipo1, tipo2) values ("Datamon", "virus", "machine");
insert into `Digimon` (nome, tipo1, tipo2) values ("Cherrymon", "virus", "vegetaion");
insert into `Digimon` (nome, tipo1, tipo2) values ("Bakemon", "virus", "ghost");



DROP TABLE IF EXISTS `Trainer`;
CREATE TABLE `Trainer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(512) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
insert into `Trainer`(nome) values ("Trainer 1");
insert into `Trainer`(nome) values ("Trainer 2");
insert into `Trainer`(nome) values ("Trainer 3");



DROP TABLE IF EXISTS `Teams`;
CREATE TABLE `Teams` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(512) NOT NULL,
  `id_digimon` int(11) DEFAULT NULL,
  `id_trainer` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
insert into `Teams` (nome, id_digimon, id_trainer) values ("Equipa 1", 1, 1);
insert into `Teams` (nome, id_digimon, id_trainer) values ("Equipa 2", 2, 2);
insert into `Teams` (nome, id_digimon, id_trainer) values ("Equipa 3", 3, 3);



DROP TABLE IF EXISTS `Tipo`;
CREATE TABLE `Tipo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(512) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
insert into `Tipo` (nome) values ("vaccine");
insert into `Tipo` (nome) values ("data");
insert into `Tipo` (nome) values ("virus");
insert into `Tipo` (nome) values ("reptile");
insert into `Tipo` (nome) values ("android");
insert into `Tipo` (nome) values ("fire");
insert into `Tipo` (nome) values ("vegetation");
insert into `Tipo` (nome) values ("larva");
insert into `Tipo` (nome) values ("machine");
insert into `Tipo` (nome) values ("ghost");


GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY '12345678';

