-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: localhost    Database: yuplanner
-- ------------------------------------------------------
-- Server version	8.0.40

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
-- Table structure for table `advisor`
--

DROP TABLE IF EXISTS `advisor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `advisor` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userid` int NOT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `students` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `advisor`
--

LOCK TABLES `advisor` WRITE;
/*!40000 ALTER TABLE `advisor` DISABLE KEYS */;
INSERT INTO `advisor` VALUES (1,123498765,'Catherine','Keys','password','Maya Hart','ckeys'),(2,883546721,'James','Gold','password','John Smith, Penny Jean','jgold'),(3,732461933,'Reign','Brown','password','Leo Pen','rbrown'),(4,922043599,'Jake','Hudson','password','Katy Brink','jhudson');
/*!40000 ALTER TABLE `advisor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `course`
--

DROP TABLE IF EXISTS `course`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `course` (
  `id` int NOT NULL AUTO_INCREMENT,
  `coursecampus` varchar(255) DEFAULT NULL,
  `coursecode` int NOT NULL,
  `courseday` varchar(255) DEFAULT NULL,
  `courseduration` varchar(255) DEFAULT NULL,
  `courseinstructor` varchar(255) DEFAULT NULL,
  `courselocation` varchar(255) DEFAULT NULL,
  `coursename` varchar(255) DEFAULT NULL,
  `courseprerequisites` varchar(255) DEFAULT NULL,
  `coursesection` varchar(255) DEFAULT NULL,
  `courseterm` varchar(255) DEFAULT NULL,
  `coursetime` varchar(255) DEFAULT NULL,
  `coursetype` varchar(255) DEFAULT NULL,
  `dept` varchar(255) DEFAULT NULL,
  `coursedescription` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course`
--

LOCK TABLES `course` WRITE;
/*!40000 ALTER TABLE `course` DISABLE KEYS */;
INSERT INTO `course` VALUES (1,'keele',3311,'Monday','90','Carina King','LSB 1002','software design','EECS 2011','E','FW2024','19:00','LECT','EECS',NULL),(2,'keele',2311,'Thuesday, Thrusday','90','Carina King','CHEM 102','software development','EECS 2011','Z','FW2024','2:000','LECT','EECS',NULL),(3,'keele',2311,'Monday, Wednesday','90','Jenny Peel','LSB 1002','software development','EECS 2011','E','FW2025','19:00','LECT','EECS',NULL),(4,'keele',1002,'Tuesday','60','Manny Delgado','CLH 1002','justice, morality, and law','','A','FW2024','12:30','Tutorial','PHIL',NULL),(5,'keele',1001,'Thrusday','60','','CLH 1002','the meaning of life','','A','FW2024','11:30','Tutorial','PHIL',NULL),(6,'keele',3451,'Tuesday, Thrusday','90','Maven Donahue','ACW 003','signals and systems','EECS 2030','E','FW2024','2:30','LECT','EECS',NULL),(7,'keele',4000,'Monday','90','Carina King','LSB 1002','Capstone','EECS 2011','E','FW2024','19:00','LECT','ENG',NULL);
/*!40000 ALTER TABLE `course` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `professor`
--

DROP TABLE IF EXISTS `professor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `professor` (
  `id` int NOT NULL AUTO_INCREMENT,
  `courses` varchar(255) DEFAULT NULL,
  `userid` int NOT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `professor`
--

LOCK TABLES `professor` WRITE;
/*!40000 ALTER TABLE `professor` DISABLE KEYS */;
INSERT INTO `professor` VALUES (1,'EECS 2311',123654987,'Jenny','Peel','password','jpeel'),(2,'EECS 3311 EECS 2311',192837465,'Carina','King','password','cking'),(3,'PHIL 1002',995322178,'Manny','Delgado','password','mdelgado'),(4,'EECS 3451',899237065,'Maven','Donahue','password','mdonahue'),(5,NULL,466324,'naomi','bank','password','naomi@yorku.ca'),(6,NULL,42674826,'Sam','Wilson','password','sam@yorku.ca'),(7,NULL,543219876,'Ella','Hen','password','ehen@yorku.ca');
/*!40000 ALTER TABLE `professor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student`
--

DROP TABLE IF EXISTS `student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student` (
  `id` int NOT NULL AUTO_INCREMENT,
  `courses` varchar(255) DEFAULT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `userid` int NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student`
--

LOCK TABLES `student` WRITE;
/*!40000 ALTER TABLE `student` DISABLE KEYS */;
INSERT INTO `student` VALUES (1,'EECS 3311','Maya','Hart','password',123456789,'mhart'),(2,'EECS 3311','John','Smith','password',987654321,'jsmith'),(3,'EECS 2311','Penny','Jean','password',123498765,'pjean'),(4,'PHIL 1002','Leo','Pen','password',217863211,'lpen'),(5,'PHIL 1002','Katy','Brink','password',927634598,'kbrink'),(6,NULL,NULL,NULL,NULL,0,NULL),(7,NULL,'Paige','Lawrence','password',674674,NULL),(8,NULL,'blake','winslow','password',7583673,'bwinslow@yorku.ca'),(9,NULL,'Catherine','Kramer','password',583646472,'ckramer@yorku.ca'),(10,NULL,'lola','path','password',472848892,'lolap@yorku.ca'),(11,NULL,'nina','dobrev','password',4726482,'nina@yorku.ca'),(12,NULL,'Alice','Kane','password',123456789,'akane@my.yorku.ca'),(13,NULL,'John','Doe','password',123456789,'johndoe@my.yorku.ca'),(14,NULL,'John','Doe','password',123456789,'johndoe@my.yorku.ca');
/*!40000 ALTER TABLE `student` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-02  7:40:33
