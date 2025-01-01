-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 12-Dez-2024 às 08:34
-- Versão do servidor: 10.4.28-MariaDB
-- versão do PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `products`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `log_error`
--

CREATE TABLE `log_error` (
  `id` int(11) NOT NULL,
  `status_code` text DEFAULT NULL,
  `message` text DEFAULT NULL,
  `endpoint` text DEFAULT NULL,
  `method` text DEFAULT NULL,
  `created_at` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Extraindo dados da tabela `log_error`
--

INSERT INTO `log_error` (`id`, `status_code`, `message`, `endpoint`, `method`, `created_at`) VALUES
(1, '404', 'Usuário não encontrado no DB... Verifique seu email e senha!', 'Unknown', 'Unknown', '2024-12-02T05:50:41.468Z'),
(2, '404', 'Usuário não encontrado no DB... Verifique seu email e senha!', 'Unknown', 'Unknown', '2024-12-02T05:56:11.400Z'),
(3, '500', 'Usuário não encontrado no DB...', 'Unknown', 'Unknown', '2024-12-02T06:16:08.030Z'),
(4, '500', 'Erro interno ao buscar um usuário.', 'Unknown', 'Unknown', '2024-12-02T06:16:08.039Z'),
(5, '500', 'Usuário não encontrado no DB...', 'Unknown', 'Unknown', '2024-12-02T06:16:30.374Z'),
(6, '500', 'Erro ao buscar um usuário. Não encontrado!', 'Unknown', 'Unknown', '2024-12-02T06:16:30.383Z'),
(7, '404', 'Usuário não encontrado no DB... Verifique seu email e senha!', 'Unknown', 'Unknown', '2024-12-02T22:48:56.407Z'),
(8, '404', 'Usuário não encontrado no DB... Verifique seu email e senha!', 'Unknown', 'Unknown', '2024-12-03T17:13:32.822Z'),
(9, '404', 'Usuário não encontrado no DB... Verifique seu email e senha!', 'Unknown', 'Unknown', '2024-12-03T19:02:57.900Z'),
(10, '404', 'Usuário não encontrado no DB... Verifique seu email e senha!', 'Unknown', 'Unknown', '2024-12-04T06:02:58.231Z'),
(11, '404', 'Usuário não encontrado no DB... Verifique seu email e senha!', 'Unknown', 'Unknown', '2024-12-04T06:02:59.681Z'),
(12, '404', 'Usuário não encontrado no DB... Verifique seu email e senha!', 'Unknown', 'Unknown', '2024-12-04T06:03:00.568Z'),
(13, '404', 'Usuário não encontrado no DB... Verifique seu email e senha!', 'Unknown', 'Unknown', '2024-12-04T06:03:01.120Z'),
(14, '404', 'Usuário não encontrado no DB... Verifique seu email e senha!', 'Unknown', 'Unknown', '2024-12-04T06:03:01.449Z'),
(15, '404', 'Usuário não encontrado no DB... Verifique seu email e senha!', 'Unknown', 'Unknown', '2024-12-04T06:03:01.681Z'),
(16, '404', 'Usuário não encontrado no DB... Verifique seu email e senha!', 'Unknown', 'Unknown', '2024-12-04T06:03:02.320Z'),
(17, '404', 'Usuário não encontrado no DB... Verifique seu email e senha!', 'Unknown', 'Unknown', '2024-12-04T06:03:03.913Z'),
(18, '404', 'Usuário não encontrado no DB... Verifique seu email e senha!', 'Unknown', 'Unknown', '2024-12-04T06:03:04.945Z'),
(19, '404', 'Usuário não encontrado no DB... Verifique seu email e senha!', 'Unknown', 'Unknown', '2024-12-04T06:03:05.168Z'),
(20, '404', 'Usuário não encontrado no DB... Verifique seu email e senha!', 'Unknown', 'Unknown', '2024-12-04T06:03:05.392Z'),
(21, '404', 'Usuário não encontrado no DB... Verifique seu email e senha!', 'Unknown', 'Unknown', '2024-12-04T06:03:05.688Z'),
(22, '404', 'Usuário não encontrado no DB... Verifique seu email e senha!', 'Unknown', 'Unknown', '2024-12-04T06:03:05.977Z'),
(23, '404', 'Usuário não encontrado no DB... Verifique seu email e senha!', 'Unknown', 'Unknown', '2024-12-04T06:03:06.288Z'),
(24, '404', 'Usuário não encontrado no DB... Verifique seu email e senha!', 'Unknown', 'Unknown', '2024-12-04T06:03:07.128Z'),
(25, '404', 'Usuário não encontrado no DB... Verifique seu email e senha!', 'Unknown', 'Unknown', '2024-12-04T06:03:10.497Z'),
(26, '404', 'Usuário não encontrado no DB... Verifique seu email e senha!', 'Unknown', 'Unknown', '2024-12-04T06:09:05.692Z'),
(27, '404', 'Usuário não encontrado no DB... Verifique seu email e senha!', 'Unknown', 'Unknown', '2024-12-04T06:09:06.712Z'),
(28, '404', 'Usuário não encontrado no DB... Verifique seu email e senha!', 'Unknown', 'Unknown', '2024-12-04T06:09:07.817Z'),
(29, '404', 'Usuário não encontrado no DB... Verifique seu email e senha!', 'Unknown', 'Unknown', '2024-12-04T06:09:08.401Z'),
(30, '404', 'Usuário não encontrado no DB... Verifique seu email e senha!', 'Unknown', 'Unknown', '2024-12-04T06:10:39.827Z'),
(31, '404', 'Usuário não encontrado no DB... Verifique seu email e senha!', 'Unknown', 'Unknown', '2024-12-04T06:16:40.782Z'),
(32, '404', 'Usuário não encontrado no DB... Verifique seu email e senha!', 'Unknown', 'Unknown', '2024-12-04T06:22:28.179Z'),
(33, '404', 'Usuário não encontrado no DB... Verifique seu email e senha!', 'Unknown', 'Unknown', '2024-12-04T06:22:29.103Z'),
(34, '404', 'Usuário não encontrado no DB... Verifique seu email e senha!', 'Unknown', 'Unknown', '2024-12-04T06:22:29.608Z'),
(35, '404', 'Usuário não encontrado no DB... Verifique seu email e senha!', 'Unknown', 'Unknown', '2024-12-04T06:22:30.423Z'),
(36, '404', 'Usuário não encontrado no DB... Verifique seu email e senha!', 'Unknown', 'Unknown', '2024-12-04T06:22:32.047Z'),
(37, '404', 'Usuário não encontrado no DB... Verifique seu email e senha!', 'Unknown', 'Unknown', '2024-12-04T06:22:36.810Z'),
(38, '404', 'Usuário não encontrado no DB... Verifique seu email e senha!', 'Unknown', 'Unknown', '2024-12-04T06:22:37.263Z'),
(39, '404', 'Usuário não encontrado no DB... Verifique seu email e senha!', 'Unknown', 'Unknown', '2024-12-04T06:22:37.583Z'),
(40, '404', 'Usuário não encontrado no DB... Verifique seu email e senha!', 'Unknown', 'Unknown', '2024-12-04T06:22:37.839Z'),
(41, '404', 'Usuário não encontrado no DB... Verifique seu email e senha!', 'Unknown', 'Unknown', '2024-12-04T06:22:38.071Z'),
(42, '404', 'Usuário não encontrado no DB... Verifique seu email e senha!', 'Unknown', 'Unknown', '2024-12-04T06:23:00.898Z'),
(43, '404', 'Usuário não encontrado no DB... Verifique seu email e senha!', 'Unknown', 'Unknown', '2024-12-04T06:23:07.160Z'),
(44, '404', 'Usuário não encontrado no DB... Verifique seu email e senha!', 'Unknown', 'Unknown', '2024-12-04T06:23:50.173Z'),
(45, '404', 'Usuário não encontrado no DB... Verifique seu email e senha!', 'Unknown', 'Unknown', '2024-12-04T06:29:12.260Z'),
(46, '404', 'Usuário não encontrado no DB... Verifique seu email e senha!', 'Unknown', 'Unknown', '2024-12-04T06:30:42.485Z'),
(47, '404', 'Usuário não encontrado no DB... Verifique seu email e senha!', 'Unknown', 'Unknown', '2024-12-04T06:32:54.980Z'),
(48, '404', 'Usuário não encontrado no DB... Verifique seu email e senha!', 'Unknown', 'Unknown', '2024-12-04T06:38:41.763Z'),
(49, '404', 'Usuário não encontrado no DB... Verifique seu email e senha!', 'Unknown', 'Unknown', '2024-12-04T06:38:42.742Z'),
(50, '404', 'Usuário não encontrado no DB... Verifique seu email e senha!', 'Unknown', 'Unknown', '2024-12-04T06:38:43.454Z'),
(51, '404', 'Usuário não encontrado no DB... Verifique seu email e senha!', 'Unknown', 'Unknown', '2024-12-04T06:38:43.950Z'),
(52, '404', 'Usuário não encontrado no DB... Verifique seu email e senha!', 'Unknown', 'Unknown', '2024-12-04T06:38:44.766Z'),
(53, '404', 'Usuário não encontrado no DB... Verifique seu email e senha!', 'Unknown', 'Unknown', '2024-12-04T06:38:45.414Z'),
(54, '404', 'Usuário não encontrado no DB... Verifique seu email e senha!', 'Unknown', 'Unknown', '2024-12-04T06:38:46.470Z'),
(55, '404', 'Usuário não encontrado no DB... Verifique seu email e senha!', 'Unknown', 'Unknown', '2024-12-04T06:38:47.831Z'),
(56, '404', 'Usuário não encontrado no DB... Verifique seu email e senha!', 'Unknown', 'Unknown', '2024-12-04T06:39:23.331Z'),
(57, '404', 'Usuário não encontrado no DB... Verifique seu email e senha!', 'Unknown', 'Unknown', '2024-12-04T06:44:42.761Z'),
(58, '409', 'Usuário já existe no sistema!', 'Unknown', 'Unknown', '2024-12-06T17:02:03.285Z'),
(59, '409', 'Usuário já existe no sistema!', 'Unknown', 'Unknown', '2024-12-06T17:02:34.545Z'),
(60, '409', 'Usuário já existe no sistema!', 'Unknown', 'Unknown', '2024-12-06T17:04:16.342Z'),
(61, '409', 'Usuário já existe no sistema!', 'Unknown', 'Unknown', '2024-12-06T17:08:11.211Z'),
(62, '409', 'Usuário já existe no sistema!', 'Unknown', 'Unknown', '2024-12-06T17:15:12.391Z'),
(63, '409', 'Usuário já existe no sistema!', 'Unknown', 'Unknown', '2024-12-06T17:40:39.086Z'),
(64, '409', 'Usuário já existe no sistema!', 'Unknown', 'Unknown', '2024-12-06T17:42:22.352Z'),
(65, '404', 'Erro ao buscar usuário!', 'Unknown', 'Unknown', '2024-12-06T18:06:35.945Z'),
(66, '404', 'Erro ao buscar usuário!', 'Unknown', 'Unknown', '2024-12-06T18:08:16.016Z'),
(67, '404', 'Erro ao buscar usuário!', 'Unknown', 'Unknown', '2024-12-06T18:09:45.086Z'),
(68, '404', 'Erro ao buscar usuário!', 'Unknown', 'Unknown', '2024-12-06T18:10:47.361Z'),
(69, '409', 'Usuário já existe no sistema!', 'Unknown', 'Unknown', '2024-12-06T19:10:12.088Z'),
(70, '409', 'Usuário já existe no sistema!', 'Unknown', 'Unknown', '2024-12-06T19:11:38.352Z'),
(71, '409', 'Usuário já existe no sistema!', 'Unknown', 'Unknown', '2024-12-06T19:11:59.867Z'),
(72, '409', 'Usuário já existe no sistema!', 'Unknown', 'Unknown', '2024-12-06T19:12:51.601Z'),
(73, '409', 'Usuário já existe no sistema!', 'Unknown', 'Unknown', '2024-12-06T19:14:11.931Z'),
(74, '409', 'Usuário já existe no sistema!', 'Unknown', 'Unknown', '2024-12-06T19:15:08.484Z'),
(75, '409', 'Usuário já existe no sistema!', 'Unknown', 'Unknown', '2024-12-06T19:15:57.204Z'),
(76, '409', 'Usuário já existe no sistema!', 'Unknown', 'Unknown', '2024-12-06T19:16:06.828Z'),
(77, '409', 'Usuário já existe no sistema!', 'Unknown', 'Unknown', '2024-12-06T19:16:59.493Z'),
(78, '409', 'Usuário já existe no sistema!', 'Unknown', 'Unknown', '2024-12-06T19:17:59.045Z'),
(79, '409', 'Usuário já existe no sistema!', 'Unknown', 'Unknown', '2024-12-06T19:21:49.015Z'),
(80, '409', 'Usuário já existe no sistema!', 'Unknown', 'Unknown', '2024-12-06T19:23:08.357Z'),
(81, '409', 'Usuário já existe no sistema!', 'Unknown', 'Unknown', '2024-12-06T19:23:43.512Z'),
(82, '404', 'Usuário não encontrado no DB... Verifique seu email e senha!', 'Unknown', 'Unknown', '2024-12-06T22:46:00.822Z'),
(83, '404', 'Usuário não encontrado no DB... Verifique seu email e senha!', 'Unknown', 'Unknown', '2024-12-06T22:48:00.359Z'),
(84, '500', 'Usuário ou senha incorretos!', 'Unknown', 'Unknown', '2024-12-06T22:49:03.983Z'),
(85, '500', 'Usuário ou senha incorretos!', 'Unknown', 'Unknown', '2024-12-06T22:49:06.592Z'),
(86, '404', 'Usuário não encontrado no DB... Verifique seu email e senha!', 'Unknown', 'Unknown', '2024-12-06T22:49:13.776Z'),
(87, '500', 'Usuário ou senha incorretops!', 'Unknown', 'Unknown', '2024-12-06T22:49:26.343Z'),
(88, '404', 'Usuário ou senha incorreto!', 'Unknown', 'Unknown', '2024-12-06T22:52:12.997Z'),
(89, '404', 'Usuário ou senha incorreto!', 'Unknown', 'Unknown', '2024-12-06T22:53:06.898Z'),
(90, '404', 'Usuário ou senha incorreto!', 'Unknown', 'Unknown', '2024-12-06T22:53:28.852Z'),
(91, '404', 'Usuário ou senha incorreto!', 'Unknown', 'Unknown', '2024-12-06T22:53:34.689Z'),
(92, '404', 'Usuário ou senha incorreto!', 'Unknown', 'Unknown', '2024-12-06T22:55:44.036Z'),
(93, '404', 'Usuário ou senha incorreto!', 'Unknown', 'Unknown', '2024-12-06T22:55:50.066Z'),
(94, '404', 'Usuário ou senha incorreto!', 'Unknown', 'Unknown', '2024-12-07T08:04:04.966Z'),
(95, '404', 'Usuário ou senha incorreto!', 'Unknown', 'Unknown', '2024-12-07T08:30:28.803Z'),
(96, '404', 'Usuário ou senha incorreto!', 'Unknown', 'Unknown', '2024-12-07T10:19:54.081Z'),
(97, '404', 'Usuário ou senha incorreto!', 'Unknown', 'Unknown', '2024-12-07T10:24:01.779Z'),
(98, '404', 'Usuário ou senha incorreto!', 'Unknown', 'Unknown', '2024-12-07T18:42:07.488Z'),
(99, '404', 'Usuário ou senha incorreto!', 'Unknown', 'Unknown', '2024-12-07T18:42:10.758Z'),
(100, '404', 'Usuário ou senha incorreto!', 'Unknown', 'Unknown', '2024-12-07T18:42:11.502Z'),
(101, '404', 'Usuário ou senha incorreto!', 'Unknown', 'Unknown', '2024-12-07T18:42:18.359Z'),
(102, '404', 'Usuário ou senha incorreto!', 'Unknown', 'Unknown', '2024-12-07T19:30:40.346Z'),
(103, '404', 'Usuário ou senha incorreto!', 'Unknown', 'Unknown', '2024-12-07T19:30:43.025Z'),
(104, '404', 'Usuário ou senha incorreto!', 'Unknown', 'Unknown', '2024-12-07T19:30:47.722Z'),
(105, '404', 'Usuário ou senha incorreto!', 'Unknown', 'Unknown', '2024-12-07T19:30:50.609Z'),
(106, '404', 'Usuário ou senha incorreto!', 'Unknown', 'Unknown', '2024-12-07T19:30:53.387Z'),
(107, '404', 'Usuário ou senha incorreto!', 'Unknown', 'Unknown', '2024-12-07T19:45:00.396Z'),
(108, '404', 'Usuário ou senha incorreto!', 'Unknown', 'Unknown', '2024-12-07T19:45:02.723Z'),
(109, '404', 'Usuário ou senha incorreto!', 'Unknown', 'Unknown', '2024-12-07T19:45:07.691Z'),
(110, '404', 'Usuário ou senha incorreto!', 'Unknown', 'Unknown', '2024-12-07T19:45:13.340Z'),
(111, '404', 'Usuário ou senha incorreto!', 'Unknown', 'Unknown', '2024-12-07T19:45:14.274Z'),
(112, '404', 'Usuário ou senha incorreto!', 'Unknown', 'Unknown', '2024-12-07T19:45:16.602Z'),
(113, '404', 'Usuário ou senha incorreto!', 'Unknown', 'Unknown', '2024-12-07T19:48:48.262Z'),
(114, '404', 'Usuário ou senha incorreto!', 'Unknown', 'Unknown', '2024-12-07T20:19:07.024Z'),
(115, '404', 'Usuário ou senha incorreto!', 'Unknown', 'Unknown', '2024-12-07T21:08:06.851Z'),
(116, '404', 'Usuário ou senha incorreto!', 'Unknown', 'Unknown', '2024-12-07T22:39:24.494Z'),
(117, '404', 'Usuário ou senha incorreto!', 'Unknown', 'Unknown', '2024-12-07T22:39:25.364Z'),
(118, '404', 'Usuário ou senha incorreto!', 'Unknown', 'Unknown', '2024-12-07T22:39:29.613Z'),
(119, '404', 'Usuário ou senha incorreto!', 'Unknown', 'Unknown', '2024-12-07T22:39:30.300Z'),
(120, '500', 'Usuário não encontrado no DB...', 'Unknown', 'Unknown', '2024-12-07T23:49:31.669Z'),
(121, '404', 'Usuário ou senha incorreto!', 'Unknown', 'Unknown', '2024-12-08T00:38:24.880Z'),
(122, '404', 'Usuário ou senha incorreto!', 'Unknown', 'Unknown', '2024-12-08T01:32:33.883Z'),
(123, '404', 'Erro ao buscar produto no DB...', 'Unknown', 'Unknown', '2024-12-08T04:04:19.196Z'),
(124, '404', 'Erro ao buscar produto no DB...', 'Unknown', 'Unknown', '2024-12-08T04:04:53.174Z'),
(125, '404', 'Erro ao buscar produto no DB...', 'Unknown', 'Unknown', '2024-12-08T04:05:07.943Z'),
(126, '404', 'Erro ao buscar produto no DB...', 'Unknown', 'Unknown', '2024-12-08T04:05:47.501Z'),
(127, '404', 'Usuário ou senha incorreto!', 'Unknown', 'Unknown', '2024-12-08T04:10:19.857Z'),
(128, '404', 'Usuário ou senha incorreto!', 'Unknown', 'Unknown', '2024-12-08T09:11:21.779Z'),
(129, '404', 'Usuário ou senha incorreto!', 'Unknown', 'Unknown', '2024-12-09T01:50:42.077Z'),
(130, '404', 'Usuário ou senha incorreto!', 'Unknown', 'Unknown', '2024-12-09T06:51:46.929Z'),
(131, '404', 'Erro ao buscar produto no DB...', 'Unknown', 'Unknown', '2024-12-09T09:07:32.788Z'),
(132, '404', 'Erro ao buscar produto no DB...', 'Unknown', 'Unknown', '2024-12-09T09:08:07.619Z'),
(133, '404', 'Erro ao buscar produto no DB...', 'Unknown', 'Unknown', '2024-12-09T09:08:28.391Z'),
(134, '404', 'Erro ao buscar produto no DB...', 'Unknown', 'Unknown', '2024-12-09T09:09:04.996Z'),
(135, '404', 'Erro ao buscar produto no DB...', 'Unknown', 'Unknown', '2024-12-09T09:10:52.267Z'),
(136, '404', 'Erro ao buscar produto no DB...', 'Unknown', 'Unknown', '2024-12-09T09:12:13.804Z'),
(137, '404', 'Erro ao buscar produto no DB...', 'Unknown', 'Unknown', '2024-12-09T17:30:48.669Z'),
(138, '404', 'Erro ao buscar produto no DB...', 'Unknown', 'Unknown', '2024-12-09T17:31:24.791Z'),
(139, '404', 'Erro ao buscar produto no DB...', 'Unknown', 'Unknown', '2024-12-09T17:31:49.060Z'),
(140, '404', 'Erro ao buscar produto no DB...', 'Unknown', 'Unknown', '2024-12-09T17:40:10.771Z'),
(141, '404', 'Erro ao buscar produto no DB...', 'Unknown', 'Unknown', '2024-12-09T17:51:20.508Z'),
(142, '404', 'Erro ao buscar produto no DB...', 'Unknown', 'Unknown', '2024-12-09T17:53:21.726Z'),
(143, '404', 'Erro ao buscar produto no DB...', 'Unknown', 'Unknown', '2024-12-09T17:57:10.076Z'),
(144, '404', 'Erro ao buscar produto no DB...', 'Unknown', 'Unknown', '2024-12-09T18:01:45.350Z'),
(145, '404', 'Erro ao buscar produto no DB...', 'Unknown', 'Unknown', '2024-12-09T18:02:16.038Z'),
(146, '404', 'Erro ao buscar produto no DB...', 'Unknown', 'Unknown', '2024-12-09T18:05:59.117Z'),
(147, '404', 'Erro ao buscar produto no DB...', 'Unknown', 'Unknown', '2024-12-09T19:06:12.475Z'),
(148, '404', 'Erro ao buscar produto no DB...', 'Unknown', 'Unknown', '2024-12-09T19:42:38.529Z'),
(149, '404', 'Erro ao buscar produto no DB...', 'Unknown', 'Unknown', '2024-12-09T20:16:48.474Z'),
(150, '404', 'Erro ao buscar produto no DB...', 'Unknown', 'Unknown', '2024-12-09T20:21:04.633Z'),
(151, '404', 'Erro ao buscar produto no DB...', 'Unknown', 'Unknown', '2024-12-09T20:22:35.092Z'),
(152, '404', 'Erro ao buscar produto no DB...', 'Unknown', 'Unknown', '2024-12-09T20:23:56.469Z'),
(153, '404', 'Erro ao buscar produto no DB...', 'Unknown', 'Unknown', '2024-12-09T20:24:56.746Z'),
(154, '404', 'Erro ao buscar produto no DB...', 'Unknown', 'Unknown', '2024-12-09T20:26:25.829Z'),
(155, '404', 'Usuário ou senha incorreto!', 'Unknown', 'Unknown', '2024-12-09T23:51:32.772Z'),
(156, '404', 'Usuário ou senha incorreto!', 'Unknown', 'Unknown', '2024-12-10T02:10:41.295Z'),
(157, '404', 'Usuário ou senha incorreto!', 'Unknown', 'Unknown', '2024-12-10T07:15:49.186Z'),
(158, '404', 'Usuário ou senha incorreto!', 'Unknown', 'Unknown', '2024-12-10T08:04:34.192Z'),
(159, '404', 'Usuário ou senha incorreto!', 'Unknown', 'Unknown', '2024-12-10T08:04:51.134Z'),
(160, '404', 'Senha incorreta! Erro: ', 'Unknown', 'Unknown', '2024-12-10T08:56:12.746Z'),
(161, '404', 'Usuário não encontrado! Verifique seu email! Erro: ', 'Unknown', 'Unknown', '2024-12-10T08:56:43.159Z'),
(162, '404', 'Senha incorreta! Erro: ', 'Unknown', 'Unknown', '2024-12-11T02:52:55.148Z'),
(163, '404', 'Senha incorreta! Erro: ', 'Unknown', 'Unknown', '2024-12-11T02:52:56.657Z'),
(164, '404', 'Senha incorreta! Erro: ', 'Unknown', 'Unknown', '2024-12-11T02:52:57.353Z'),
(165, '404', 'Senha incorreta! Erro: ', 'Unknown', 'Unknown', '2024-12-11T02:52:57.985Z'),
(166, '404', 'Senha incorreta! Erro: ', 'Unknown', 'Unknown', '2024-12-11T02:52:58.640Z'),
(167, '404', 'Senha incorreta! Erro: ', 'Unknown', 'Unknown', '2024-12-11T02:53:00.162Z'),
(168, '404', 'Senha incorreta! Erro: ', 'Unknown', 'Unknown', '2024-12-11T02:53:00.761Z'),
(169, '404', 'Senha incorreta! Erro: ', 'Unknown', 'Unknown', '2024-12-11T02:53:01.586Z'),
(170, '404', 'Senha incorreta! Erro: ', 'Unknown', 'Unknown', '2024-12-11T02:53:03.145Z'),
(171, '404', 'Senha incorreta! Erro: ', 'Unknown', 'Unknown', '2024-12-11T02:53:21.836Z'),
(172, '404', 'Senha incorreta! Erro: ', 'Unknown', 'Unknown', '2024-12-11T02:53:22.857Z'),
(173, '404', 'Senha incorreta! Erro: ', 'Unknown', 'Unknown', '2024-12-11T02:56:27.861Z'),
(174, '404', 'Senha incorreta! Erro: ', 'Unknown', 'Unknown', '2024-12-11T02:57:59.581Z'),
(175, '404', 'Senha incorreta! Erro: ', 'Unknown', 'Unknown', '2024-12-11T02:58:02.066Z'),
(176, '404', 'Senha incorreta! Erro: ', 'Unknown', 'Unknown', '2024-12-11T02:58:04.050Z'),
(177, '404', 'Senha incorreta! Erro: ', 'Unknown', 'Unknown', '2024-12-11T02:58:06.673Z'),
(178, '404', 'Senha incorreta! Erro: ', 'Unknown', 'Unknown', '2024-12-11T02:58:16.349Z'),
(179, '404', 'Senha incorreta! Erro: ', 'Unknown', 'Unknown', '2024-12-11T02:58:17.553Z'),
(180, '404', 'Senha incorreta! Erro: ', 'Unknown', 'Unknown', '2024-12-11T02:58:18.601Z'),
(181, '404', 'Senha incorreta! Erro: ', 'Unknown', 'Unknown', '2024-12-11T02:58:19.521Z'),
(182, '404', 'Senha incorreta! Erro: ', 'Unknown', 'Unknown', '2024-12-11T02:58:22.475Z'),
(183, '404', 'Senha incorreta! Erro: ', 'Unknown', 'Unknown', '2024-12-11T02:58:24.049Z'),
(184, '404', 'Senha incorreta! Erro: ', 'Unknown', 'Unknown', '2024-12-11T02:58:29.971Z'),
(185, '404', 'Senha incorreta! Erro: ', 'Unknown', 'Unknown', '2024-12-11T02:58:31.642Z'),
(186, '404', 'Senha incorreta! Erro: ', 'Unknown', 'Unknown', '2024-12-11T02:58:32.657Z'),
(187, '404', 'Senha incorreta! Erro: ', 'Unknown', 'Unknown', '2024-12-11T02:58:33.937Z'),
(188, '404', 'Senha incorreta! Erro: ', 'Unknown', 'Unknown', '2024-12-11T02:58:39.083Z'),
(189, '404', 'Senha incorreta! Erro: ', 'Unknown', 'Unknown', '2024-12-11T02:58:42.881Z'),
(190, '404', 'Senha incorreta! Erro: ', 'Unknown', 'Unknown', '2024-12-11T02:58:56.660Z'),
(191, '404', 'Senha incorreta! Erro: ', 'Unknown', 'Unknown', '2024-12-11T02:58:57.801Z'),
(192, '404', 'Senha incorreta! Erro: ', 'Unknown', 'Unknown', '2024-12-11T02:59:05.355Z'),
(193, '404', 'Senha incorreta! Erro: ', 'Unknown', 'Unknown', '2024-12-11T02:59:07.332Z'),
(194, '404', 'Senha incorreta! Erro: ', 'Unknown', 'Unknown', '2024-12-11T02:59:07.953Z'),
(195, '404', 'Senha incorreta! Erro: ', 'Unknown', 'Unknown', '2024-12-11T02:59:08.152Z'),
(196, '404', 'Senha incorreta! Erro: ', 'Unknown', 'Unknown', '2024-12-11T02:59:08.377Z'),
(197, '404', 'Senha incorreta! Erro: ', 'Unknown', 'Unknown', '2024-12-11T02:59:08.769Z'),
(198, '404', 'Senha incorreta! Erro: ', 'Unknown', 'Unknown', '2024-12-11T02:59:09.201Z'),
(199, '404', 'Senha incorreta! Erro: ', 'Unknown', 'Unknown', '2024-12-11T02:59:17.060Z'),
(200, '404', 'Senha incorreta! Erro: ', 'Unknown', 'Unknown', '2024-12-11T02:59:18.642Z'),
(201, '404', 'Senha incorreta! Erro: ', 'Unknown', 'Unknown', '2024-12-11T02:59:19.354Z'),
(202, '404', 'Senha incorreta! Erro: ', 'Unknown', 'Unknown', '2024-12-11T02:59:19.809Z'),
(203, '404', 'Senha incorreta! Erro: ', 'Unknown', 'Unknown', '2024-12-11T02:59:21.017Z'),
(204, '404', 'Senha incorreta! Erro: ', 'Unknown', 'Unknown', '2024-12-11T02:59:23.058Z'),
(205, '404', 'Senha incorreta! Erro: ', 'Unknown', 'Unknown', '2024-12-11T02:59:33.988Z'),
(206, '404', 'Senha incorreta! Erro: ', 'Unknown', 'Unknown', '2024-12-11T02:59:34.801Z'),
(207, '404', 'Senha incorreta! Erro: ', 'Unknown', 'Unknown', '2024-12-11T02:59:35.530Z'),
(208, '404', 'Senha incorreta! Erro: ', 'Unknown', 'Unknown', '2024-12-11T02:59:37.001Z'),
(209, '404', 'Senha incorreta! Erro: ', 'Unknown', 'Unknown', '2024-12-11T02:59:38.105Z'),
(210, '404', 'Senha incorreta! Erro: ', 'Unknown', 'Unknown', '2024-12-11T02:59:38.857Z'),
(211, '404', 'Senha incorreta! Erro: ', 'Unknown', 'Unknown', '2024-12-11T02:59:39.706Z'),
(212, '404', 'Senha incorreta! Erro: ', 'Unknown', 'Unknown', '2024-12-11T02:59:40.417Z'),
(213, '404', 'Senha incorreta! Erro: ', 'Unknown', 'Unknown', '2024-12-11T02:59:46.114Z'),
(214, '404', 'Senha incorreta! Erro: ', 'Unknown', 'Unknown', '2024-12-11T02:59:51.148Z'),
(215, '404', 'Senha incorreta! Erro: ', 'Unknown', 'Unknown', '2024-12-11T03:03:38.046Z'),
(216, '404', 'Senha incorreta! Erro: ', 'Unknown', 'Unknown', '2024-12-11T03:03:40.001Z'),
(217, '404', 'Senha incorreta! Erro: ', 'Unknown', 'Unknown', '2024-12-11T03:03:41.697Z'),
(218, '404', 'Senha incorreta! Erro: ', 'Unknown', 'Unknown', '2024-12-11T03:03:43.570Z'),
(219, '404', 'Senha incorreta! Erro: ', 'Unknown', 'Unknown', '2024-12-11T03:03:46.609Z'),
(220, '404', 'Senha incorreta! Erro: ', 'Unknown', 'Unknown', '2024-12-11T03:05:20.244Z'),
(221, '404', 'Senha incorreta! Erro: ', 'Unknown', 'Unknown', '2024-12-11T03:05:21.114Z'),
(222, '404', 'Senha incorreta! Erro: ', 'Unknown', 'Unknown', '2024-12-11T03:05:21.618Z'),
(223, '404', 'Senha incorreta! Erro: ', 'Unknown', 'Unknown', '2024-12-11T03:05:21.801Z'),
(224, '404', 'Senha incorreta! Erro: ', 'Unknown', 'Unknown', '2024-12-11T03:05:22.473Z'),
(225, '404', 'Senha incorreta! Erro: ', 'Unknown', 'Unknown', '2024-12-11T03:05:23.442Z'),
(226, '404', 'Senha incorreta! Erro: ', 'Unknown', 'Unknown', '2024-12-11T03:05:24.586Z'),
(227, '404', 'Senha incorreta! Erro: ', 'Unknown', 'Unknown', '2024-12-11T03:05:25.842Z'),
(228, '404', 'Senha incorreta! Erro: ', 'Unknown', 'Unknown', '2024-12-11T03:05:29.657Z'),
(229, '404', 'Senha incorreta! Erro: ', 'Unknown', 'Unknown', '2024-12-11T03:05:30.497Z'),
(230, '404', 'Senha incorreta! Erro: ', 'Unknown', 'Unknown', '2024-12-11T03:05:32.785Z'),
(231, '404', 'Senha incorreta! Erro: ', 'Unknown', 'Unknown', '2024-12-11T03:06:03.619Z'),
(232, '404', 'Senha incorreta! Erro: ', 'Unknown', 'Unknown', '2024-12-11T03:06:04.474Z'),
(233, '404', 'Senha incorreta! Erro: ', 'Unknown', 'Unknown', '2024-12-11T03:06:05.881Z'),
(234, '404', 'Senha incorreta! Erro: ', 'Unknown', 'Unknown', '2024-12-11T03:10:59.254Z'),
(235, '404', 'Senha incorreta! Erro: ', 'Unknown', 'Unknown', '2024-12-11T03:11:20.877Z'),
(236, '404', 'Usuário não encontrado! Verifique seu email! Erro: ', 'Unknown', 'Unknown', '2024-12-11T03:11:43.333Z'),
(237, '404', 'Usuário não encontrado! Verifique seu email! Erro: ', 'Unknown', 'Unknown', '2024-12-11T03:11:48.378Z'),
(238, '404', 'Usuário não encontrado! Verifique seu email! Erro: ', 'Unknown', 'Unknown', '2024-12-11T03:11:50.434Z'),
(239, '404', 'Senha incorreta! Erro: ', 'Unknown', 'Unknown', '2024-12-11T06:34:09.088Z'),
(240, '404', 'Senha incorreta! Erro: ', 'Unknown', 'Unknown', '2024-12-12T02:15:53.548Z'),
(241, '404', 'Usuário ou senha incorreto!', 'Unknown', 'Unknown', '2024-12-12T04:29:43.505Z'),
(242, '404', 'Usuário ou senha incorreto!', 'Unknown', 'Unknown', '2024-12-12T04:29:46.466Z'),
(243, '404', 'Usuário ou senha incorreto!', 'Unknown', 'Unknown', '2024-12-12T04:29:51.435Z'),
(244, '404', 'Usuário ou senha incorreto!', 'Unknown', 'Unknown', '2024-12-12T04:30:07.292Z'),
(245, '404', 'Usuário ou senha incorreto!', 'Unknown', 'Unknown', '2024-12-12T04:36:06.724Z'),
(246, '404', 'Usuário ou senha incorreto!', 'Unknown', 'Unknown', '2024-12-12T04:36:12.190Z'),
(247, '404', 'Usuário ou senha incorreto!', 'Unknown', 'Unknown', '2024-12-12T04:37:05.775Z'),
(248, '404', 'Erro ao buscar produto no DB...', 'Unknown', 'Unknown', '2024-12-12T04:58:49.113Z'),
(249, '404', 'Erro ao buscar produto no DB...', 'Unknown', 'Unknown', '2024-12-12T05:00:11.504Z'),
(250, '404', 'Erro ao buscar produto no DB...', 'Unknown', 'Unknown', '2024-12-12T05:03:18.505Z'),
(251, '404', 'Erro ao buscar produto no DB...', 'Unknown', 'Unknown', '2024-12-12T05:05:02.439Z'),
(252, '404', 'Erro ao buscar produto no DB...', 'Unknown', 'Unknown', '2024-12-12T05:06:03.275Z'),
(253, '404', 'Erro ao buscar produto no DB...', 'Unknown', 'Unknown', '2024-12-12T05:07:05.418Z'),
(254, '404', 'Erro ao buscar produto no DB...', 'Unknown', 'Unknown', '2024-12-12T05:40:31.214Z');

-- --------------------------------------------------------

--
-- Estrutura da tabela `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `way` varchar(255) DEFAULT NULL,
  `price` double NOT NULL,
  `description` text DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `created_at` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Extraindo dados da tabela `products`
--

INSERT INTO `products` (`id`, `name`, `way`, `price`, `description`, `type`, `created_at`) VALUES
(1, 'Produto1', 'aleatoria.jpg', 0, 'products', '2/12/2024 3:24:1', '2/12/2024 3:24:1'),
(4, 'Produto3', '1734655607419f522eb354.jpg', 19.9, 'Este é o produto 3 mas pode ser o 4.', 'products', '2/12/2024 14:48:21'),
(5, 'Produto3 variavel', '1734789940126f522eb351.jpg', 2.99, 'Este é o produto 4.', 'products', '2/12/2024 14:48:21'),
(6, 'Prato 1', '1734079806659f522eb351.jpg', 25.99, 'Este é o Prato 1, e continua sendo o 1.', 'plates', '2/12/2024 18:24:12'),
(8, 'plate3', 'prato3.jpg', 50.9, 'Este é o Prato 3.', 'plates', '2/12/2024 18:24:12'),
(9, 'plate4', 'prato4.jpg', 29.9, 'Este é o Prato 4.', 'plates', '2/12/2024 18:24:12'),
(10, 'Produto5', '17339689974563ab28f5b2.jpg', 5.99, 'Este é o produto 5.', 'products', '7/12/2024 5:3:13'),
(11, 'Produto11', '17340498034623ab28f5b6.jpg', 7.99, 'Este é o produto 11 Novamente.', 'products', '7/12/2024 5:50:12'),
(16, 'Produto 12', '17340101783703ab28f5b5.jpg', 5.99, 'Produto 12 teste', 'products', '8/12/2024 16:15:45'),
(17, 'undefined', NULL, 0, 'undefined', 'undefined', '8/12/2024 20:27:1'),
(18, 'undefined', NULL, 0, 'undefined', 'undefined', '8/12/2024 20:27:1'),
(19, 'undefined', NULL, 0, 'undefined', 'undefined', '8/12/2024 20:27:1'),
(20, 'undefined', NULL, 0, 'undefined', 'undefined', '8/12/2024 20:27:1'),
(21, 'undefined', NULL, 0, 'undefined', 'undefined', '8/12/2024 20:27:1'),
(22, 'undefined', NULL, 0, 'undefined', 'undefined', '8/12/2024 21:21:39'),
(23, 'undefined', NULL, 0, 'undefined', 'undefined', '8/12/2024 21:23:51'),
(24, 'undefined', NULL, 0, 'undefined', 'undefined', '8/12/2024 21:23:51'),
(25, 'Prato 5', '1734222871781prato5.jpg', 29.95, 'Prato 5 ok', 'plates', '8/12/2024 23:46:44'),
(26, 'Prato 6', '17341421925003ef0b9a8ec623fe3', 20, 'Prato 6', 'plates', '9/12/2024 0:0:39'),
(27, 'Buffet Livre', '17346911250553ef0b9a8ec623fe3', 50, 'Buffet Livre com 4 carnes', 'plates', '9/12/2024 0:0:39'),
(28, 'Prato 7', '1734552623833ed4340127.jpg', 15.9, 'Prato delicioso 7', 'plates', '9/12/2024 0:20:52'),
(29, 'Aspirina', '1734312109127ed4340122.jpg', 5.29, 'Serve para dor de cabeça', 'products', '9/12/2024 0:20:52'),
(30, 'Clicletes', '1734053287723ed4340123.jpg', 2.99, 'Cliquetinho para mascar.', 'products', '9/12/2024 0:20:52'),
(31, 'Band Aid', '1734124752822ed4340124.jpg', 9.9, 'Curativos', 'products', '9/12/2024 0:20:52'),
(32, 'Yogurte Batavo', '1733951839749ed4340125.jpg', 3.29, 'Yogurte Sabor Morango', 'products', '9/12/2024 0:20:52'),
(36, 'Produto 6 delicioso', '17347148213355ee606899.jpg', 10.9, 'Prato Delicioso', 'plates', '11/12/2024 23:35:54');

-- --------------------------------------------------------

--
-- Estrutura da tabela `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `fullname` varchar(255) DEFAULT NULL,
  `mail` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `administrator` tinyint(1) NOT NULL,
  `created_at` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Extraindo dados da tabela `users`
--

INSERT INTO `users` (`id`, `fullname`, `mail`, `password`, `administrator`, `created_at`) VALUES
(1, 'admin', 'admin@teste.com', '$2b$10$vAqeTqQ0G6rO23kBbXSUL.XIXxyPnOfqTmws2i/PDNNUDTFTWp1Ky', 1, '2/12/2024 2:57:6'),
(2, 'João Alberto', 'joao.alberto@teste.com', '1111', 0, '2/12/2024 2:57:6'),
(3, 'Marina Almeida', 'marina.almeida@teste.com', '1111', 0, '2/12/2024 2:57:6'),
(4, 'Alejandro Rodrigues', 'alejandro.rodrigues@teste.com', '1111', 0, '2/12/2024 2:57:6'),
(5, 'user4 teste4', 'teste4@teste.com', '4444', 0, '2/12/2024 2:57:6'),
(10, 'user7 teste7', 'user7@test.com', '1111', 1, '4/12/2024 19:22:29'),
(11, 'user8 teste8', 'user8@test.com', '8888', 0, '4/12/2024 19:22:29'),
(13, 'user10 teste10', 'user10@test.com', '11', 0, '4/12/2024 19:22:29'),
(15, 'user11 teste11', 'user11@test.com', '11', 0, '6/12/2024 16:21:45'),
(16, 'user12 teste12', 'user12@test.com', '12', 0, '6/12/2024 16:30:22'),
(19, 'user15 teste15', 'user15@test.com', '11', 0, '6/12/2024 16:38:37'),
(21, 'user17 teste17', 'user17@test.com', '11', 0, '7/12/2024 5:50:12'),
(24, 'user20 teste20', 'user20@test.com', '11', 1, '7/12/2024 5:50:12'),
(25, 'user21 teste21', 'user21@test.com', '11', 1, '7/12/2024 5:50:12'),
(26, 'user22 teste22 edit', 'user22@test.com', '1111', 1, '7/12/2024 5:50:12'),
(28, 'User 11', 'teste1@teste.com', '$2b$10$8eg0OfYP9P9L8XRZ/kyZkuhqBjaZa9ql12WMHnJJ0EGbeWU1ilQni', 0, '10/12/2024 4:15:7'),
(29, 'User Teste 2', 'teste2@teste.com', '$2b$10$DTH.imc9TAOFgbAK7a5U3e5SZvkBQwh4c7LtTBaeVNEXAewdyc2pm', 0, '10/12/2024 4:19:5'),
(30, 'User Teste 3', 'teste3@teste.com', '$2b$10$dPRe3/dlSXUOUQznAgGS3uV6sdcyc4IxPJnY1RlhU6UOZV2EKkwAO', 0, '10/12/2024 4:19:5'),
(31, 'Teste user 1', 'testeuser1@teste.com', '$2b$10$cVceDSZq8BIYBfb8o1uS..TWzruyWTWPa8mlYAFqFyXNxDaOEkHeW', 0, '10/12/2024 4:19:5'),
(32, 'testeUser 1', 'padraouser@teste.com', '$2b$10$h5PWGENokbWaT99zPRLpuuFxAnKY9sM7Py2xmKD/RC3SMJknoJ/1W', 0, '10/12/2024 4:19:5'),
(33, 'user teste 22', 'teste22@teste.com', '$2b$10$x2R1cRpr49xi18r67eSB/uRQ9kQ7dE7/omh7ivPusw9omrpHru1HG', 0, '10/12/2024 4:19:5'),
(34, 'user teste 23', 'teste23@teste.com', '$2b$10$Oq9vMCsMp23OXr9f.1nIZOV3xsDo58VqG2daZ2HIKEHMiK7zUEoxC', 0, '10/12/2024 4:19:5'),
(35, 'user teste 25', 'teste25@teste.com', '$2b$10$Iq3NC27hRkGFCHsdA5BK1eYAF.GehHhvm0yP6R1pIUgmdnQPJkxFC', 0, '10/12/2024 4:19:5'),
(37, 'teste validation 1', 'validation1@mail.com', '$2b$10$mMpvw4Q7YpRJtR6JZQb9R.IBaRj.BAIOSoCA1DH1GpxmHahjrh37e', 0, '10/12/2024 19:46:44'),
(38, 'user validate2', 'validation2@mail.com', '$2b$10$D/54h7F0Va59wHJNibhtR.uwMag4WBodVSh5ziCs/ANtSD2DpxmN.', 0, '10/12/2024 19:46:44'),
(39, 'teste validation 3', 'validation3@mail.com', '$2b$10$jJj8KbT.ME8dvBMFS1WJpOB4WkI4n4eEFxcT36CcHmp.cWQihKd8i', 0, '10/12/2024 19:46:44'),
(40, 'validate user 4', 'validate4@teste.com', '$2b$10$mgp6W4fMyBbGdg3PUUKCr./CFfS20JBwHWCJaXZIHh/0HAoXxpJMC', 0, '10/12/2024 19:46:44'),
(41, 'validate teste 5', 'validate5@teste.com', '$2b$10$wt/UDLH94GQt0v8P86VdceAfLC8fFryMatBl5N1F.PMhdKSTg21.m', 0, '10/12/2024 19:46:44'),
(42, 'validate user 6', 'validate6@mail.com', '$2b$10$Ik/3BIuYqMHznuDhs3Dboup/Ylil9eQpX1fj4wEXoU6E.Up6hp2DG', 0, '10/12/2024 19:46:44'),
(43, 'Teste Register 7', 'register7@mail.com.br', '$2b$10$6q0PPWJZlAFuGozBspY76OU1fwIAR6HPQ/PvxEFJIlrPQ27BfxNgm', 0, '10/12/2024 19:46:44'),
(44, 'admin LTE', 'admin@admin.com', '$2b$10$nXkLyiQG4c2D.GaLSpoWBOsFDBe0X42mBXrZSx1h7EUUCORxmlOMq', 1, '11/12/2024 3:34:46'),
(45, 'last teste', 'las@teste.com.br', '$2b$10$hJ1C6azOJwtpHqsjCGJbmeKq2OCzO/f7DSTJx6ISsNRsPF.KDSyZG', 0, '12/12/2024 2:5:0');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `log_error`
--
ALTER TABLE `log_error`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `log_error`
--
ALTER TABLE `log_error`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=255;

--
-- AUTO_INCREMENT de tabela `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
