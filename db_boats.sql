CREATE DATABASE  IF NOT EXISTS `db_boats` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `db_boats`;
-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: db_boats
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `boats`
--

DROP TABLE IF EXISTS `boats`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `boats` (
  `id` int NOT NULL AUTO_INCREMENT,
  `brand` varchar(255) NOT NULL,
  `model` varchar(255) NOT NULL,
  `status` varchar(45) NOT NULL,
  `filename` varchar(45) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` int NOT NULL,
  `managerId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId_idx` (`userId`),
  KEY `managerId_idx` (`managerId`),
  CONSTRAINT `managerId` FOREIGN KEY (`managerId`) REFERENCES `managers` (`id`),
  CONSTRAINT `userId` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `boats`
--

LOCK TABLES `boats` WRITE;
/*!40000 ALTER TABLE `boats` DISABLE KEYS */;
INSERT INTO `boats` VALUES (13,'Queen','Mary','Checking','image-1639618949670.jpg','2021-12-16 01:42:29','2021-12-16 01:42:29',12,12),(14,'XTG','200 GT','Repairing','image-1639619087958.jpg','2021-12-16 01:44:47','2021-12-16 01:44:47',5,14),(15,'FTS','2000','Repaired','image-1639619160631.jpg','2021-12-16 01:46:00','2021-12-16 01:46:00',12,15),(16,'GTF','300 FT','Repaired','image-1639619306569.jpg','2021-12-16 01:48:26','2021-12-16 01:48:26',13,13);
/*!40000 ALTER TABLE `boats` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `managers`
--

DROP TABLE IF EXISTS `managers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `managers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `surname` varchar(45) NOT NULL,
  `repairedboats` int NOT NULL,
  `description` varchar(255) NOT NULL,
  `filename` varchar(45) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `managers`
--

LOCK TABLES `managers` WRITE;
/*!40000 ALTER TABLE `managers` DISABLE KEYS */;
INSERT INTO `managers` VALUES (12,'Alberto','Moleiro',32,'Es uno de nuestros encargados con mayor experiencia en el sector','image-1639617535851.png','2021-12-16 01:18:55','2021-12-16 01:18:55'),(13,'Sergio','Aguado',23,'Es el número tres del mundo en cuanto a eficacia en su trabajo','image-1639617861786.png','2021-12-16 01:24:21','2021-12-16 01:24:21'),(14,'Marcos','García',24,'Es uno de nuestros encargados mas longévos','image-1639618022333.jpg','2021-12-16 01:27:02','2021-12-16 01:27:02'),(15,'Alejandro','López',32,'Un encargado muy experimentado en el sector','image-1639618326876.jpg','2021-12-16 01:32:06','2021-12-16 01:32:06');
/*!40000 ALTER TABLE `managers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sequelizemeta` (
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('20211103160425-create-users.js'),('20211104182632-create-boats.js'),('20211110162858-create-managers.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `password` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `isAdmin` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (4,'$2a$10$RaqWcxoJWNkIlCq5Aj308uk7kkuVPl0.TcYnnapHCV/yyd0/b71lK','admin','admin',1,'2021-11-04 19:40:58','2021-11-04 19:40:58'),(5,'$2a$10$W8vVf.KKY/o5gqR5PTM8HO7VmSY0w8mKG28V1dbXQyFoEiVaw8Zku','Federico','Federico',0,'2021-11-08 15:43:08','2021-11-08 15:43:08'),(12,'$2a$10$FBrw5fc9eRgucvE57O0/uuXNQpXyZjn4sxCEfRSVD2/XSr25RTEAu',NULL,'elpepe',0,'2021-11-26 18:45:41','2021-11-26 18:45:41'),(13,'$2a$10$M706qjpViiDFpl.K/2GC1eYIJZkm3zjsPctXYkYEFy/S9I.aE79Lu',NULL,'Roberto@gmail.com',0,'2021-12-16 01:35:05','2021-12-16 01:35:05'),(14,'$2a$10$wRzEr85bhl1duKajPMadIuG/GOwVk626cU7zexxMqqOJVJOnuNJty',NULL,'Fernando@gmail.com',0,'2021-12-16 01:36:14','2021-12-16 01:36:14'),(15,'$2a$10$ZyG8M90PfPCUF7lJMtblzuq5CpFaqEYdorQRIqKOdjSl1ADZza6ga',NULL,'Amancio@gmail.com',0,'2021-12-16 01:40:23','2021-12-16 01:40:23');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-16  1:53:39
