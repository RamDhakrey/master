-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Sep 06, 2018 at 11:51 AM
-- Server version: 5.7.23-0ubuntu0.16.04.1
-- PHP Version: 7.2.9-1+ubuntu16.04.1+deb.sury.org+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
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
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `user_id`, `first_name`, `last_name`, `mob_no`, `email`, `password`, `gender`, `created_at`) VALUES
(1, 1, 'Swati', 'ss', '08585909577', 'swati123@gmail.com', 'admin', 'male', '2018-08-29 12:17:08'),
(2, 2, 'Swati', 'sinha', '8585909577', 'swati123@gmail.com', 'admin', 'female', '2018-08-29 12:18:16'),
(3, 3, 'Swati', 'sinha', '8585909577', 'sinha@gmail.com', 'admin', 'female', '2018-08-31 05:22:37'),
(4, 4, 'dimple', 'mittal', '9898565623', 'dimple@gmail.com', 'admin', 'female', '2018-08-31 06:15:10'),
(14, 14, 'khushi', 'priya', '8585909577', 'kk@gmail.com', 'admin', 'female', '2018-08-31 07:36:53'),
(24, 24, 'Swati', 'sinha', '8585909577', 'sinha@gmail.com', 'admin', 'female', '2018-09-03 05:26:34'),
(25, 25, 'suraj', 'gfgfdgfg', '8585909577', 'suraj@gmail.com', 'admin', 'male', '2018-09-05 11:06:40'),
(26, 26, 'sneha', 'ddd', '8585909577', 'sinha@gmail.com', 'admin', 'female', '2018-09-04 13:22:32'),
(27, 27, 'Swati', 'sinha', '8585909577', 'test@gmail.com', 'admin', 'female', '2018-09-05 05:39:21'),
(28, 28, 'ss', 'ss', '8585909589', 'test@gmail.com', 'admin', 'male', '2018-09-05 07:22:08'),
(29, 29, 'hina', 'srivastva', '8585909580', 'sri@gmail.com', 'admin', 'female', '2018-09-05 11:01:37'),
(31, 31, 'gtf', 'dvgdg', '7585909577', 'uist@gmail.com', 'admin', 'male', '2018-09-05 11:10:58'),
(32, 32, 'Swati', 'sinha', '8585909577', 'test@gmail.com', 'admin', 'female', '2018-09-05 11:16:00');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
