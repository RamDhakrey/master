-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 27, 2018 at 07:01 AM
-- Server version: 10.1.34-MariaDB
-- PHP Version: 7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `node`
--

-- --------------------------------------------------------

--
-- Table structure for table `profile`
--

CREATE TABLE `profile` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `profile_image` text NOT NULL,
  `cover_image` text NOT NULL,
  `upload_image` text NOT NULL,
  `current_profile` varchar(255) NOT NULL,
  `current_cover` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `profile`
--

INSERT INTO `profile` (`id`, `user_id`, `profile_image`, `cover_image`, `upload_image`, `current_profile`, `current_cover`, `created_at`) VALUES
(1, 1, '/1Ram Pratap/download.jpg,/1Ram Pratap/girl-dandelion-yellow-flowers-160699.jpeg,/1Ram Pratap/download.jpg,/1Ram Pratap//1Ram Pratap/download.jpg,/1Ram Pratap/girl-dandelion-yellow-flowers-160699.jpeg,/1Ram Pratap/download.jpg', ',/1Ram Pratap/milky-way-2695569_960_720.jpg', '/1Ram Pratap/download.jpg,/1Ram Pratap/girl-dandelion-yellow-flowers-160699.jpeg,/1Ram Pratap/download.jpg,/1Ram Pratap/girl-dandelion-yellow-flowers-160699.jpeg,/1Ram Pratap/milky-way-2695569_960_720.jpg', '/1Ram Pratap/girl-dandelion-yellow-flowers-160699.jpeg', '/1Ram Pratap/milky-way-2695569_960_720.jpg', '2018-08-25 18:39:32');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `mob_no` varchar(14) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `gender` varchar(30) NOT NULL,
  `image` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `user_id`, `first_name`, `last_name`, `mob_no`, `email`, `password`, `gender`, `image`, `created_at`) VALUES
(1, 1, 'Ram Pratap', 'Singh', '9451201095', 'rpdhakrey949@gmail.com', 'ram123.4', 'male', '', '2018-08-25 08:53:29'),
(2, 2, 'jagmohan', 'Singh', '8888584854', 'ram@gmail.com', '12345', 'male', '', '2018-08-25 08:53:34'),
(3, 3, 'Anjali', 'Singh', '9876543210', 'anjali@gmail.com', '12345', 'female', '', '2018-08-25 08:53:37'),
(4, 4, 'ranu', 'Singh', '9867676765', 'anjali@gmail.com', '12345', 'male', '', '2018-08-25 08:55:25');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `profile`
--
ALTER TABLE `profile`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `profile`
--
ALTER TABLE `profile`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
