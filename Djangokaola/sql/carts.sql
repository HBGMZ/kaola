/*
SQLyog Job Agent v12.09 (64 bit) Copyright(c) Webyog Inc. All Rights Reserved.


MySQL - 5.5.20-log : Database - carts
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`carts` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `carts`;

/*Table structure for table `carts` */

DROP TABLE IF EXISTS `carts`;

CREATE TABLE `carts` (
  `c_id` int(11) NOT NULL AUTO_INCREMENT,
  `c_img` varchar(100) NOT NULL,
  `c_xx` varchar(100) NOT NULL,
  `c_oldpie` varchar(50) NOT NULL,
  `c_pie` varchar(50) NOT NULL,
  `c_num` varchar(10) NOT NULL,
  `u_id` varchar(10) NOT NULL,
  PRIMARY KEY (`c_id`)
) ENGINE=InnoDB AUTO_INCREMENT=126 DEFAULT CHARSET=utf8;

/*Data for the table `carts` */

insert  into `carts` values (101,'images/images/1bn0q7ug827_800_800.jpg',' [2件装]SHISEIDO 资生堂 清爽洁净皮肤污垢','',' ￥45','7','9'),(102,'images/images/777.jpg',' [2件装]SHISEIDO 资生堂 清爽洁净皮肤污垢','',' ￥45','2','9'),(103,'images/images/888.jpg',' [2件装]SHISEIDO 资生堂 清爽洁净皮肤污垢','',' ￥45','1','9'),(104,'images/images/222.jpg',' [2件装]SHISEIDO 资生堂 清爽洁净皮肤污垢','',' ￥45','16','9'),(105,'images/images/333.jpg',' [2件装]SHISEIDO 资生堂 清爽洁净皮肤污垢','',' ￥45','20','9');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
