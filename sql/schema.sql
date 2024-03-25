-- achlearnment.authority definition

CREATE TABLE `authority` (
                             `id` int(11) NOT NULL AUTO_INCREMENT,
                             `name` varchar(100) NOT NULL,
                             PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- achlearnment.fill_task_part definition

CREATE TABLE `fill_task_part` (
                                  `id` int(11) NOT NULL AUTO_INCREMENT,
                                  `word` varchar(100) NOT NULL,
                                  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- achlearnment.shop_item definition

CREATE TABLE `shop_item` (
                             `id` int(11) NOT NULL AUTO_INCREMENT,
                             `name` varchar(100) NOT NULL,
                             `price` int(11) NOT NULL,
                             `description` text DEFAULT NULL,
                             `function` varchar(100) NOT NULL,
                             PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- achlearnment.task_type definition

CREATE TABLE `task_type` (
                             `id` int(11) NOT NULL AUTO_INCREMENT,
                             `type` varchar(100) NOT NULL,
                             `task_duration` int(11) NOT NULL,
                             `pay` int(11) NOT NULL,
                             PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- achlearnment.`user` definition

CREATE TABLE `user` (
                        `id` int(11) NOT NULL AUTO_INCREMENT,
                        `balance` int(11) NOT NULL DEFAULT 0,
                        `email` varchar(100) NOT NULL,
                        `password` varchar(100) NOT NULL,
                        PRIMARY KEY (`id`),
                        UNIQUE KEY `user_unique` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- achlearnment.main_task_part definition

CREATE TABLE `main_task_part` (
                                  `id` int(11) NOT NULL AUTO_INCREMENT,
                                  `text` varchar(100) NOT NULL,
                                  `task_type_id` int(11) NOT NULL,
                                  PRIMARY KEY (`id`),
                                  KEY `main_task_part_task_type_FK` (`task_type_id`),
                                  CONSTRAINT `main_task_part_task_type_FK` FOREIGN KEY (`task_type_id`) REFERENCES `task_type` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- achlearnment.task definition

CREATE TABLE `task` (
                        `id` int(11) NOT NULL AUTO_INCREMENT,
                        `main_task_part_id` int(11) NOT NULL,
                        `fill_task_part_id` int(11) NOT NULL,
                        `user_id` int(11) NOT NULL,
                        `is_completed` tinyint(1) NOT NULL DEFAULT 0,
                        PRIMARY KEY (`id`),
                        KEY `task_main_task_part_FK` (`main_task_part_id`),
                        KEY `task_fill_task_part_FK` (`fill_task_part_id`),
                        KEY `task_user_FK` (`user_id`),
                        CONSTRAINT `task_fill_task_part_FK` FOREIGN KEY (`fill_task_part_id`) REFERENCES `fill_task_part` (`id`),
                        CONSTRAINT `task_main_task_part_FK` FOREIGN KEY (`main_task_part_id`) REFERENCES `main_task_part` (`id`),
                        CONSTRAINT `task_user_FK` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- achlearnment.user_activity definition

CREATE TABLE `user_activity` (
                                 `id` int(11) NOT NULL AUTO_INCREMENT,
                                 `day` date NOT NULL,
                                 `user_id` int(11) NOT NULL,
                                 PRIMARY KEY (`id`),
                                 KEY `user_activity_user_FK` (`user_id`),
                                 CONSTRAINT `user_activity_user_FK` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- achlearnment.user_authority definition

CREATE TABLE `user_authority` (
                                  `user_id` int(11) NOT NULL,
                                  `authority_id` int(11) NOT NULL,
                                  PRIMARY KEY (`user_id`,`authority_id`),
                                  KEY `user_authority_authority_FK` (`authority_id`),
                                  CONSTRAINT `user_authority_authority_FK` FOREIGN KEY (`authority_id`) REFERENCES `authority` (`id`),
                                  CONSTRAINT `user_authority_user_FK` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- achlearnment.user_shop_item definition

CREATE TABLE `user_shop_item` (
                                  `user_id` int(11) NOT NULL,
                                  `shop_item_id` int(11) NOT NULL,
                                  PRIMARY KEY (`user_id`,`shop_item_id`),
                                  KEY `user_shop_item_shop_item_FK` (`shop_item_id`),
                                  CONSTRAINT `user_shop_item_shop_item_FK` FOREIGN KEY (`shop_item_id`) REFERENCES `shop_item` (`id`),
                                  CONSTRAINT `user_shop_item_user_FK` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO task_type (`type`, pay, task_duration)
VALUES ('EASY', 5, 5),
       ('MEDIUM', 10, 10),
       ('HARD', 20, 20);
