SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


CREATE TABLE `users` (
  `uid` int(11) NOT NULL,
  `name` text NOT NULL,
  `email` text NOT NULL,
  `mobile_number` text NOT NULL,
  `date_month` text NOT NULL,
  `date_day` int(2) NOT NULL,
  `date_year` year(4) NOT NULL,
  `sex` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `users` (`uid`, `name`, `email`, `mobile_number`, `date_month`, `date_day`, `date_year`, `sex`) VALUES
(1, 'John Matin-ao Napoles', 'minecraft.john727@gmail.com', '', 'January', 1, 1995, 0),
(2, 'John Matin-ao Napoles', 'minecraftjohn727@gmail.com', '09308611273', 'June', 14, 2001, 1),
(3, 'Eren Yeager', 'eren.yeager@gmail.com', '09148259123', 'Februay', 5, 1997, 1);

ALTER TABLE `users`
  ADD PRIMARY KEY (`uid`),
  ADD UNIQUE KEY `email` (`email`) USING HASH;

ALTER TABLE `users`
  MODIFY `uid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;