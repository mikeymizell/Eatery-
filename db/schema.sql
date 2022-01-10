DROP DATABASE IF EXISTS blog;
CREATE DATABASE blog;
USE blog;

-- CREATE TABLE user_accounts(
--     id INTEGER AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(50) NOT NULL,
--     email VARCHAR(50) NOT NULL,
--     username VARCHAR(20) NOT NULL,
--     password VARCHAR(30) NOT NULL,
--     accCreatedOn DATETIME DEFAULT CURRENT_TIMESTAMP
-- );

-- CREATE TABLE food_groups(
--     id INTEGER AUTO_INCREMENT PRIMARY KEY,
--     group_name VARCHAR(20) NOT NULL
-- );

-- CREATE TABLE recipes(
--     foodgroup_id INT NULL,
--     recipeAddedOn DATETIME DEFAULT CURRENT_TIMESTAMP,
--     author_id INT NOT NULL,
--     recipe_name VARCHAR(50) NOT NULL,
--     ingredients TEXT NOT NULL,
--     instructions TEXT NOT NULL,
--     CONSTRAINT fk_user FOREIGN KEY (author_id) REFERENCES user_accounts(id),
--     CONSTRAINT fk_foodgroup FOREIGN KEY (foodgroup_id) REFERENCES food_groups(id)
-- );