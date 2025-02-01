<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>To Do List</title>
<link rel="stylesheet" href="to-do.css">
</head>
<body>
	<h1>To Do List</h1>
	<div>
		<input type="text" placeholder="create a task" id="task">
		<button id="add-task" onclick="addTask()">Add Task</button>
	</div>
	<ul id="list"></ul>
	<script type="text/javascript" src="to-do.js"></script>
</body>
</html>