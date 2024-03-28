-- achlearnment.authority definition

CREATE TABLE `authority` (
                             `id` int(11) NOT NULL AUTO_INCREMENT,
                             `name` varchar(100) NOT NULL,
                             PRIMARY KEY (`id`),
                             UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- achlearnment.fill_task_part definition

CREATE TABLE `fill_task_part` (
                                  `id` int(11) NOT NULL AUTO_INCREMENT,
                                  `word` varchar(100) NOT NULL,
                                  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- achlearnment.main_task_part definition

CREATE TABLE `main_task_part` (
                                  `id` int(11) NOT NULL AUTO_INCREMENT,
                                  `text` text NOT NULL,
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
                             `pay` int(11) NOT NULL,
                             `duration` int(11) NOT NULL,
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


-- achlearnment.task definition

CREATE TABLE `task` (
                        `id` int(11) NOT NULL AUTO_INCREMENT,
                        `main_task_part_id` int(11) NOT NULL,
                        `fill_task_part_id` int(11) NOT NULL,
                        `user_id` int(11) NOT NULL,
                        `task_type_id` int(11) NOT NULL,
                        `is_completed` tinyint(1) NOT NULL DEFAULT 0,
                        PRIMARY KEY (`id`),
                        KEY `task_main_task_part_FK` (`main_task_part_id`),
                        KEY `task_fill_task_part_FK` (`fill_task_part_id`),
                        KEY `task_user_FK` (`user_id`),
                        KEY `task_task_type_FK` (`task_type_id`),
                        CONSTRAINT `task_fill_task_part_FK` FOREIGN KEY (`fill_task_part_id`) REFERENCES `fill_task_part` (`id`),
                        CONSTRAINT `task_main_task_part_FK` FOREIGN KEY (`main_task_part_id`) REFERENCES `main_task_part` (`id`),
                        CONSTRAINT `task_task_type_FK` FOREIGN KEY (`task_type_id`) REFERENCES `task_type` (`id`),
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

-- inserting default data

INSERT INTO task_type (`type`, pay, duration)
VALUES ('EASY', 5, 5),
       ('MEDIUM', 10, 10),
       ('HARD', 20, 20);

INSERT INTO achlearnment.main_task_part
(`text`)
VALUES ('Pretend that you are an actor, do a play about %s for %d minutes.'),
('Tell Santa Claus that you behaved well this year and why %s should be your present for %d minutes.'),
('Pretend that you can''t live without %s for %d minutes.'),
('Pretend that you argue with someone about %s for %d minutes.'),
('Pretend that you try to get a job where main objective is %s for %d minutes.'),
('Explain to your boss why you were late to the job because of %s for %d minutes.'),
('Pretend like you are a %s club leader, and you are trying to get more members into the club for %d minutes.'),
('Create a presentation discussing the historical significance of %s and its impact on society for %d minutes.'),
('Imagine a futuristic society where advancements in %s have led to significant societal changes, and describe what that world would look like for %d minutes.'),
('Give a scientific presentation analyzing the potential applications of %s in various industries for %d minutes.'),
('Imagine a world where %s is the primary source of energy, and describe how it has transformed daily life for %d minutes.'),
('Pretend to interview for a job where the primary objective is to innovate and improve %s for %d minutes.'),
('Explain how %s was invented for %d minutes.'),
('Explain how %s is the reason you haven''t done your homework for %d minutes.'),
('Be an interviewer who asks a person about %s for %d minutes.'),
('Come up with a sport where %s plays significant role and explain the rules of it for %d minutes.'),
('Explain how %s started a new lockdown for %d minutes.'),
('Give a Steve Jobs style presentation of %s for %d minutes.'),
('Try to explain how %s will become a next IPhone for %d minutes.'),
('Fire an employee because of %s for %d minutes.'),
('Explain how %s helped neanderthals survive for %d minutes.'),
('Pretend you''re a news reporter, reporting on a major event involving %s for %d minutes.'),
('Imagine being a teacher and explain the concept of %s to a class of students for %d minutes.'),
('Pretend you''re a lawyer defending a case involving %s for %d minutes.'),
('Imagine being a salesperson trying to convince a customer to buy %s for %d minutes.'),
('Envision a world where %s does not exist, and describe how that would affect everyday life for %d minutes.'),
('Create a TED talk about the importance of %s in today''s society for %d minutes.'),
('Pretend to host a cooking show where %s is the main ingredient for %d minutes.'),
('Imagine being a doctor and explain the effects of %s on the human body for %d minutes.'),
('Pretend to be a tour guide showcasing the wonders of %s for %d minutes.');


INSERT INTO achlearnment.fill_task_part
(word)
VALUES ('Dinosaur'),
       ('Rainbow'),
       ('Spaceship'),
       ('Unicorn'),
       ('Castle'),
       ('Pirate'),
       ('Robot'),
       ('Mermaid'),
       ('Volcano'),
       ('Guitar'),
       ('Elephant'),
       ('Butterfly'),
       ('Snowman'),
       ('Cupcake'),
       ('Sunglasses'),
       ('Jellyfish'),
       ('Skateboard'),
       ('Pizza'),
       ('Lighthouse'),
       ('Rocket'),
       ('Balloon'),
       ('Butterfly'),
       ('Treasure'),
       ('Ghost'),
       ('Pumpkin'),
       ('Snowflake'),
       ('Fairy'),
       ('Kite'),
       ('Dragon'),
       ('Astronaut'),
       ('Sunflower'),
       ('Dolphin'),
       ('Ladybug'),
       ('Treehouse'),
       ('Rainbow'),
       ('Starfish'),
       ('Apple'),
       ('Firetruck'),
       ('Teddy bear'),
       ('Ice cream'),
       ('Moon'),
       ('Lion'),
       ('Book'),
       ('Flower'),
       ('Computer'),
       ('Bee'),
       ('Mountain'),
       ('River'),
       ('Train'),
       ('Teapot'),
       ('Football'),
       ('Parrot'),
       ('Raincoat'),
       ('Cactus'),
       ('Octopus'),
       ('Diamond'),
       ('Cheese'),
       ('Penguin'),
       ('Tractor'),
       ('Sunset'),
       ('Refrigerator'),
       ('Oven'),
       ('Microwave'),
       ('Dishwasher'),
       ('Toaster'),
       ('Blender'),
       ('Coffee Maker'),
       ('Washing Machine'),
       ('Clothes Dryer'),
       ('Air Conditioner'),
       ('Heater'),
       ('Vacuum Cleaner'),
       ('Electric Fan'),
       ('Mixer'),
       ('Rice Cooker'),
       ('Hair Dryer'),
       ('Iron'),
       ('Television'),
       ('Radio'),
       ('Electric Grill'),
       ('Spaghetti Carbonara'),
       ('Beef Bourguignon'),
       ('Chicken Tikka Masala'),
       ('Sushi'),
       ('Pad Thai'),
       ('Paella'),
       ('Fish Tacos'),
       ('Margherita Pizza'),
       ('Peking Duck'),
       ('Lobster Bisque'),
       ('Coq au Vin'),
       ('Moussaka'),
       ('Chicken Parmesan'),
       ('Tiramisu'),
       ('Caesar Salad'),
       ('Beef Stroganoff'),
       ('Croque Monsieur'),
       ('Ratatouille'),
       ('Eggs Benedict'),
       ('Banh Mi'),
       ('Magic Wand'),
       ('Enchanted Forest'),
       ('Fairy Godmother'),
       ('Glass Slipper'),
       ('Magic Mirror'),
       ('Golden Goose'),
       ('Wicked Witch'),
       ('Fairy Dust'),
       ('Seven Dwarfs'),
       ('Talking Animals'),
       ('Magic Beanstalk'),
       ('Dragon'),
       ('Prince Charming'),
       ('Spell Book'),
       ('Mermaid'),
       ('Magic Carpet'),
       ('Evil Queen'),
       ('Enchanted Frog'),
       ('Pixie Hollow'),
       ('Eye'),
       ('Hand'),
       ('Foot'),
       ('Lip'),
       ('Heart'),
       ('Brain'),
       ('Ear'),
       ('Lung'),
       ('Arm'),
       ('Leg'),
       ('Stomach'),
       ('Skin'),
       ('Tongue'),
       ('Spine'),
       ('Nose'),
       ('Finger'),
       ('Knee'),
       ('Hair'),
       ('Tooth'),
       ('Shoulder'),
       ('Wrench'),
       ('Hammer'),
       ('Screwdriver'),
       ('Pliers'),
       ('Saw'),
       ('Drill'),
       ('Socket'),
       ('Level'),
       ('Chisel'),
       ('Tape measure'),
       ('Clamp'),
       ('Vise'),
       ('Sander'),
       ('File'),
       ('Allen key'),
       ('Crowbar'),
       ('Mallet'),
       ('Wire cutter'),
       ('Paintbrush'),
       ('Trowel');


INSERT INTO achlearnment.shop_item
(name, price, description, `function`)
VALUES('Task-o-dogo', 60, 'This dog is so, I mean, SOOOOO needy and to make you play with it longer it gives you 1 additional daily task.', 'EXPAND_DAILY_TASK_AMOUNT'),
      ('Taskboard', 140, 'Ding, ding, ding that''s a pretty huge board, I think it''s large enough to fit 1 extra daily task.', 'EXPAND_DAILY_TASK_AMOUNT'),
      ('Counter Task', 200, 'That''s a game, right? So it gives you 1 extra task per day.', 'EXPAND_DAILY_TASK_AMOUNT'),
      ('Task hive', 240, 'Those task-bees are so kind that they give you 1 extra daily task.', 'EXPAND_DAILY_TASK_AMOUNT');
