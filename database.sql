INSERT INTO `cover` (`id`, `url`, `category`) VALUES
(1, 'user.svg', 'avatar'),
(2, 'buttonmenu.svg', 'service'),
(3, 'detetive.svg', 'service'),
(4, 'dinheiro.svg', 'service'),
(5, 'massagem.svg', 'service'),
(6, 'pingpong.svg', 'service'),
(7, 'resistence.svg', 'service'),
(8, 'uno.svg', 'service'),
(9, 'user.svg', 'service'),
(10, 'videogame.svg', 'service'),
(11, 'xadrez.svg', 'service'),
(12, 'zumbie.svg', 'service'),
(13, 'avatar1.svg', 'avatar'),
(14, 'avatar2.svg', 'avatar'),
(15, 'avatar3.svg', 'avatar'),
(16, 'avatar4.svg', 'avatar'),
(17, 'avatar5.svg', 'avatar'),
(18, 'sinuca.svg', 'avatar'),
(19, 'breakingbad.svg', 'service');

INSERT INTO `localization` (`id`, `description`, `name`) VALUES
(1, 'Filial de Santos', 'Filial de Santos' ),
(2, 'Filial de São Paulo', 'Filial de São Paulo');

INSERT INTO `service` (`id` ,`description`, `name`, `cover`) VALUES
(1, 'Sinuca' , 'Sinuca' , 18),
(2, 'Ping Pong' , 'Ping Pong' , 6),
(3, 'Uno', 'Uno' , 8),
(4, 'The Resistance' , 'The Resistance' ,7),
(5, 'Breanking bad' , 'Breanking bad' , 19),
(6, 'Zumbicite' , 'Zumbicite' ,12),
(7, 'Detetive' , 'Detetive' ,3),
(8, 'Banco imobiliario' , 'Banco imobiliario' ,4),
(9, 'Xadrez' , 'Xadrez' , 11),
(10,'Massagem','Massagem',5),
(11,'Playstation','Playstation',10),
(12,'Xbox','Xbox',10);

INSERT INTO `localization_service`(`id`, `localization_id`, `service_id`) VALUES 
(1, 1,1),
(2, 1,2),
(3, 1,3),
(4, 1,4),
(5, 1,5),
(6, 1,6),
(7, 1,7),
(8, 1,8),
(9, 1,9),
(10,1,10),
(11,1,11),
(12,2,12);